
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SentimentType } from "@/types/sentiment";

type SentimentToggleProps = {
  selectedSentiment: SentimentType;
  onSelectSentiment: (sentiment: SentimentType) => void;
}

const SentimentToggle = ({ selectedSentiment, onSelectSentiment }: SentimentToggleProps) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium mb-2">Sentiment View</h3>
      <ToggleGroup type="single" value={selectedSentiment} onValueChange={(value) => value && onSelectSentiment(value as SentimentType)}>
        <ToggleGroupItem value="overall" className="text-xs px-3" aria-label="Toggle overall sentiment view">
          Overall
        </ToggleGroupItem>
        <ToggleGroupItem value="positive" className="text-xs px-3" aria-label="Toggle positive sentiment view">
          Positive
        </ToggleGroupItem>
        <ToggleGroupItem value="neutral" className="text-xs px-3" aria-label="Toggle neutral sentiment view">
          Neutral
        </ToggleGroupItem>
        <ToggleGroupItem value="negative" className="text-xs px-3" aria-label="Toggle negative sentiment view">
          Negative
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default SentimentToggle;
