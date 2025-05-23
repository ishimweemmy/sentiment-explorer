
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RegionSummary } from "@/types/sentiment";
import { mockSentimentData } from "@/data/mockData";

type RegionDetailsProps = {
  region: RegionSummary | null;
}

const RegionDetails = ({ region }: RegionDetailsProps) => {
  if (!region) {
    return (
      <Card className="p-4 shadow-sm h-full flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Select a region to view details</p>
      </Card>
    );
  }

  const total = region.positive + region.neutral + region.negative;
  const positivePercent = total > 0 ? Math.round((region.positive / total) * 100) : 0;
  const neutralPercent = total > 0 ? Math.round((region.neutral / total) * 100) : 0;
  const negativePercent = total > 0 ? Math.round((region.negative / total) * 100) : 0;

  return (
    <Card className="p-4 shadow-sm">
      <h3 className="font-medium mb-1">{region.region || region.country}</h3>
      <p className="text-xs text-muted-foreground mb-4">
        {region.region ? `${region.country} - ${region.region}` : region.country}
      </p>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-medium">Positive</span>
            <span className="text-xs text-muted-foreground">{positivePercent}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-300" 
              style={{ width: `${positivePercent}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-medium">Neutral</span>
            <span className="text-xs text-muted-foreground">{neutralPercent}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-yellow-500 transition-all duration-300" 
              style={{ width: `${neutralPercent}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-medium">Negative</span>
            <span className="text-xs text-muted-foreground">{negativePercent}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-500 transition-all duration-300" 
              style={{ width: `${negativePercent}%` }}
            ></div>
          </div>
        </div>
        
        <div className="pt-2">
          <p className="text-xs font-medium mb-1">Overall Sentiment</p>
          <div className="flex items-center">
            <div 
              className={`w-4 h-4 rounded-sm mr-2 ${
                region.overall > 0.2 ? "bg-green-500" : 
                region.overall < -0.2 ? "bg-red-500" : 
                "bg-yellow-500"
              }`}
            ></div>
            <span className="text-xs">
              {region.overall > 0.2 ? "Positive" : 
               region.overall < -0.2 ? "Negative" : 
               "Neutral"}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RegionDetails;
