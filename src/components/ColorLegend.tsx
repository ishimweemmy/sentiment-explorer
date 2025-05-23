
import { Card } from "@/components/ui/card";
import { SentimentType } from "@/types/sentiment";

type ColorLegendProps = {
  selectedSentiment: SentimentType;
}

const ColorLegend = ({ selectedSentiment }: ColorLegendProps) => {
  return (
    <Card className="p-4 shadow-sm">
      <h3 className="text-sm font-medium mb-2">Sentiment Legend</h3>
      <div className="flex flex-col space-y-2">
        {selectedSentiment === 'overall' ? (
          <>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-400 rounded-sm mr-2"></div>
              <span className="text-xs">Positive</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-400 rounded-sm mr-2"></div>
              <span className="text-xs">Neutral</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-400 rounded-sm mr-2"></div>
              <span className="text-xs">Negative</span>
            </div>
          </>
        ) : selectedSentiment === 'positive' ? (
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-400 rounded-sm mr-2"></div>
            <span className="text-xs">Positive Sentiment</span>
          </div>
        ) : selectedSentiment === 'neutral' ? (
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-sm mr-2"></div>
            <span className="text-xs">Neutral Sentiment</span>
          </div>
        ) : (
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-400 rounded-sm mr-2"></div>
            <span className="text-xs">Negative Sentiment</span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ColorLegend;
