
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { MapSelection } from "@/types/sentiment";
import { mockSentimentData } from "@/data/mockData";

type RegionSelectorProps = {
  selectedRegion: MapSelection | null;
  onRegionSelect: (selection: MapSelection | null) => void;
}

const RegionSelector = ({ selectedRegion, onRegionSelect }: RegionSelectorProps) => {
  const [countries, setCountries] = useState<string[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  
  useEffect(() => {
    const uniqueCountries = Array.from(new Set(mockSentimentData.map(item => item.country)));
    setCountries(uniqueCountries.sort());
  }, []);
  
  useEffect(() => {
    if (selectedRegion?.country) {
      const countryRegions = mockSentimentData
        .filter(item => item.country === selectedRegion.country)
        .map(item => item.region);
      setRegions(Array.from(new Set(countryRegions)).sort());
    } else {
      setRegions([]);
    }
  }, [selectedRegion?.country]);
  
  const handleCountryChange = (country: string) => {
    onRegionSelect({ country });
  };
  
  const handleRegionChange = (region: string) => {
    if (selectedRegion?.country) {
      onRegionSelect({ country: selectedRegion.country, region });
    }
  };
  
  const handleReset = () => {
    onRegionSelect(null);
  };
  
  return (
    <Card className="p-4 shadow-sm">
      <h3 className="text-sm font-medium mb-2">Region Selection</h3>
      <div className="space-y-3">
        <div>
          <label htmlFor="country-select" className="text-xs text-muted-foreground block mb-1">
            Country
          </label>
          <Select 
            value={selectedRegion?.country || ""} 
            onValueChange={handleCountryChange}
          >
            <SelectTrigger id="country-select" className="w-full text-xs h-8">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map(country => (
                <SelectItem key={country} value={country} className="text-xs">
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {selectedRegion?.country && (
          <div>
            <label htmlFor="region-select" className="text-xs text-muted-foreground block mb-1">
              Region
            </label>
            <Select 
              value={selectedRegion?.region || ""} 
              onValueChange={handleRegionChange}
            >
              <SelectTrigger id="region-select" className="w-full text-xs h-8">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map(region => (
                  <SelectItem key={region} value={region} className="text-xs">
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        
        {selectedRegion && (
          <button
            onClick={handleReset}
            className="text-xs text-primary hover:underline mt-2 w-full"
          >
            Reset Selection
          </button>
        )}
      </div>
    </Card>
  );
};

export default RegionSelector;
