
import { useState, useCallback } from "react";
import { MapSelection, RegionSummary, SentimentType } from "@/types/sentiment";
import GlobalHeatmap from "./GlobalHeatmap";
import ColorLegend from "./ColorLegend";
import SentimentToggle from "./SentimentToggle";
import RegionSelector from "./RegionSelector";
import RegionDetails from "./RegionDetails";
import { mockSentimentData } from "@/data/mockData";

const DashboardLayout = () => {
  const [selectedSentiment, setSelectedSentiment] = useState<SentimentType>("overall");
  const [selectedRegion, setSelectedRegion] = useState<MapSelection | null>(null);
  const [regionDetails, setRegionDetails] = useState<RegionSummary | null>(null);
  
  const handleSentimentChange = useCallback((sentiment: SentimentType) => {
    setSelectedSentiment(sentiment);
  }, []);
  
  const handleRegionSelect = useCallback((selection: MapSelection | null) => {
    setSelectedRegion(selection);
    
    if (selection === null) {
      setRegionDetails(null);
      return;
    }
    
    let filteredData = mockSentimentData;
    
    if (selection.country) {
      filteredData = filteredData.filter(item => item.country === selection.country);
      
      if (selection.region) {
        filteredData = filteredData.filter(item => item.region === selection.region);
      }
    }
    
    if (filteredData.length > 0) {
      const positive = filteredData.filter(item => item.value === 1).length;
      const neutral = filteredData.filter(item => item.value === 0).length;
      const negative = filteredData.filter(item => item.value === 2).length;
      const total = positive + neutral + negative;
      const overall = total > 0 ? (positive - negative) / total : 0;
      
      setRegionDetails({
        country: selection.country,
        region: selection.region || "",
        positive,
        neutral,
        negative,
        overall
      });
    }
  }, []);
  
  const handleRegionClick = useCallback((region: RegionSummary) => {
    setRegionDetails(region);
  }, []);
  
  return (
    <div className="container py-8 h-screen flex flex-col">
      <header className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Global Sentiment Heatmap Dashboard</h1>
        <p className="text-muted-foreground">
          Explore sentiment patterns across geographic regions
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-1 overflow-hidden">
        <div className="col-span-1 space-y-4">
          <SentimentToggle
            selectedSentiment={selectedSentiment}
            onSelectSentiment={handleSentimentChange}
          />
          
          <ColorLegend selectedSentiment={selectedSentiment} />
          
          <RegionSelector
            selectedRegion={selectedRegion}
            onRegionSelect={handleRegionSelect}
          />
        </div>
        
        <div className="col-span-1 md:col-span-3 grid gap-6 h-full overflow-auto">
          <div className="row-span-3 max-h-[400px]">
            <GlobalHeatmap
              selectedSentiment={selectedSentiment}
              selectedRegion={selectedRegion}
              onRegionClick={handleRegionClick}
              onRegionSelect={handleRegionSelect}
            />
          </div>
          <div className="row-span-1">
            <RegionDetails region={regionDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
