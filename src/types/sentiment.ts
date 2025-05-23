
export type SentimentValue = 2 | 0 | 1;

export interface SentimentData {
  country: string;
  region: string;
  value: SentimentValue;
  lat: number;
  lng: number;
}

export type SentimentType = 'overall' | 'positive' | 'neutral' | 'negative';

export interface RegionSummary {
  country: string;
  region: string;
  positive: number;
  neutral: number;
  negative: number;
  overall: number;
}

export interface MapSelection {
  country: string;
  region?: string;
}
