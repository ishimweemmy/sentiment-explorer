import { useEffect, useRef, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MapSelection, RegionSummary, SentimentType } from "@/types/sentiment";
import { mockSentimentData } from "@/data/mockData";

const getRegionData = () => {
  const regionData = new Map<
    string,
    {
      positive: number;
      neutral: number;
      negative: number;
      latitude: number;
      longitude: number;
    }
  >();

  mockSentimentData.forEach((item) => {
    const regionKey = item.region || `${item.country}-region1`;
    if (!regionData.has(regionKey)) {
      regionData.set(regionKey, {
        positive: 0,
        neutral: 0,
        negative: 0,
        latitude: item.lat,
        longitude: item.lng,
      });
    }

    const data = regionData.get(regionKey)!;
    if (item.value === 1) data.positive++;
    else if (item.value === 0) data.neutral++;
    else data.negative++;
  });

  return regionData;
};

interface GlobalHeatmapProps {
  selectedSentiment: SentimentType;
  selectedRegion: MapSelection | null;
  onRegionClick: (region: RegionSummary) => void;
  onRegionSelect: (selection: MapSelection | null) => void;
}

const GlobalHeatmap = ({
  selectedSentiment,
  selectedRegion,
  onRegionClick,
  onRegionSelect,
}: GlobalHeatmapProps) => {
  const chartRef = useRef<am5.Root | null>(null);
  const chartDivRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (!chartDivRef.current) return;

      const root = am5.Root.new(chartDivRef.current);
      chartRef.current = root;

      root.setThemes([am5themes_Animated.new(root)]);

      const chart = root.container.children.push(
        am5map.MapChart.new(root, {
          panX: "rotateX",
          panY: "translateY",
          projection: am5map.geoMercator(),
          homeZoomLevel: 1.5,
          homeGeoPoint: { latitude: 30, longitude: 10 },
          maxZoomLevel: 32,
          wheelY: "zoom",
          layout: root.verticalLayout,
        })
      );

      chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
          fill: am5.color("#f8fafc"),
          stroke: am5.color("#cbd5e1"),
          exclude: ["AQ"],
        })
      );

      chart.events.on("wheel", function (ev) {
        if (ev.originalEvent.ctrlKey || ev.originalEvent.metaKey) {
          ev.originalEvent.preventDefault();
          chart.set("wheelX", "rotateX");
          chart.set("wheelY", "zoom");
        } else {
          chart.set("wheelX", "none");
          chart.set("wheelY", "none");
        }
      });

      const pointSeries = chart.series.push(
        am5map.MapPointSeries.new(root, {
          latitudeField: "latitude",
          longitudeField: "longitude",
        })
      );

      pointSeries.bullets.push((root, series, dataItem) => {
        const data = dataItem.dataContext as any;
        const total = data.positive + data.neutral + data.negative;

        const value =
          selectedSentiment === "overall"
            ? (data.positive - data.negative) / Math.max(1, total)
            : data[selectedSentiment] / Math.max(1, total);

        const circle = am5.Circle.new(root, {
          radius: 5 + Math.abs(value) * 10,
          fill: getSentimentColor(value, selectedSentiment),
          fillOpacity: 0.7,
          stroke: am5.color("#ffffff"),
          strokeWidth: 1,
          tooltipText: `{region}
            Positive: ${data.positive}
            Neutral: ${data.neutral}
            Negative: ${data.negative}`,
        });

        circle.states.create("hover", {
          scale: 1.2,
          fillOpacity: 1,
        });

        circle.events.on("click", (ev) => {
          const region = dataItem.dataContext as any;
          onRegionClick({
            country: region.country,
            region: region.region,
            positive: region.positive,
            neutral: region.neutral,
            negative: region.negative,
            overall: (region.positive - region.negative) / Math.max(1, total),
          });

          chart.zoomToGeoPoint(
            { latitude: region.latitude, longitude: region.longitude },
            4,
            false,
            1000
          );
        });

        return am5.Bullet.new(root, { sprite: circle });
      });

      const legend = chart.children.push(
        am5.Legend.new(root, {
          x: am5.percent(90),
          y: am5.percent(10),
          layout: root.verticalLayout,
        })
      );

      legend.data.setAll([
        { name: "Positive", fill: am5.color("#4ade80") },
        { name: "Neutral", fill: am5.color("#fbbf24") },
        { name: "Negative", fill: am5.color("#f87171") },
      ]);

      const regionData = getRegionData();
      const pointData = Array.from(regionData.entries()).map(
        ([region, data]) => ({
          region,
          ...data,
          country: region.split("-")[0],
        })
      );

      pointSeries.data.setAll(pointData);

      return () => root.dispose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load map");
      console.error("Map error:", err);
    }
  }, [selectedSentiment, selectedRegion]);

  const getSentimentColor = (value: number, type: SentimentType) => {
    if (type === "overall") {
      if (value > 0.3) return am5.color("#4ade80");
      if (value < -0.3) return am5.color("#f87171");
      return am5.color("#fbbf24");
    }
    return am5.color(
      type === "positive"
        ? "#4ade80"
        : type === "negative"
        ? "#f87171"
        : "#fbbf24"
    );
  };

  return (
    <Card className="w-full h-full flex flex-col overflow-hidden">
      {error && (
        <Alert variant="destructive" className="m-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div ref={chartDivRef} className="w-full h-full min-h-[500px]" />
    </Card>
  );
};

export default GlobalHeatmap;
