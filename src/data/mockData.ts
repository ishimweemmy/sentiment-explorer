
import { SentimentData } from '../types/sentiment';

export const mockSentimentData: SentimentData[] = [
  // United States
  { country: "US", region: "Alabama", value: 1, lat: 32.3617, lng: -86.2792 },
  { country: "US", region: "Alaska", value: 0, lat: 64.0685, lng: -152.2782 },
  { country: "US", region: "Arizona", value: 2, lat: 34.2744, lng: -111.6602 },
  { country: "US", region: "California", value: 1, lat: 36.7783, lng: -119.4179 },
  { country: "US", region: "Colorado", value: 0, lat: 39.5501, lng: -105.7821 },
  { country: "US", region: "Florida", value: 2, lat: 27.7663, lng: -81.6868 },
  { country: "US", region: "New York", value: 1, lat: 40.7128, lng: -74.0060 },
  { country: "US", region: "Texas", value: 0, lat: 31.9686, lng: -99.9018 },
  
  // United Kingdom  
  { country: "GB", region: "England", value: 2, lat: 52.3555, lng: -1.1743 },
  { country: "GB", region: "Scotland", value: 1, lat: 56.4907, lng: -4.2026 },
  { country: "GB", region: "Wales", value: 0, lat: 52.1307, lng: -3.7837 },
  { country: "GB", region: "Northern Ireland", value: 2, lat: 54.7877, lng: -6.4923 },
  
  // Canada
  { country: "CA", region: "Alberta", value: 1, lat: 53.9333, lng: -116.5765 },
  { country: "CA", region: "British Columbia", value: 0, lat: 53.7267, lng: -127.6476 },
  { country: "CA", region: "Ontario", value: 2, lat: 51.2538, lng: -85.3232 },
  { country: "CA", region: "Quebec", value: 1, lat: 52.9399, lng: -73.5491 },
  { country: "CA", region: "Nova Scotia", value: 0, lat: 44.6820, lng: -63.7443 },
  
  // Australia
  { country: "AU", region: "New South Wales", value: 2, lat: -31.2532, lng: 146.9211 },
  { country: "AU", region: "Queensland", value: 1, lat: -20.9176, lng: 142.7028 },
  { country: "AU", region: "Victoria", value: 0, lat: -37.4713, lng: 144.7852 },
  { country: "AU", region: "Western Australia", value: 2, lat: -25.0424, lng: 121.6453 },
  { country: "AU", region: "South Australia", value: 1, lat: -30.0002, lng: 136.2092 },
  
  // Germany
  { country: "DE", region: "Bavaria", value: 0, lat: 49.0134, lng: 10.4515 },
  { country: "DE", region: "Berlin", value: 2, lat: 52.5200, lng: 13.4050 },
  { country: "DE", region: "Hamburg", value: 1, lat: 53.5511, lng: 9.9937 },
  { country: "DE", region: "Hesse", value: 0, lat: 50.6520, lng: 9.1624 },
  { country: "DE", region: "North Rhine-Westphalia", value: 2, lat: 51.4332, lng: 7.6616 },
  
  // France
  { country: "FR", region: "Brittany", value: 1, lat: 48.2020, lng: -2.9326 },
  { country: "FR", region: "Grand Est", value: 0, lat: 48.7004, lng: 6.1878 },
  { country: "FR", region: "Île-de-France", value: 2, lat: 48.8499, lng: 2.6370 },
  { country: "FR", region: "Normandy", value: 1, lat: 49.1829, lng: 0.3707 },
  { country: "FR", region: "Provence-Alpes-Côte d'Azur", value: 0, lat: 43.9352, lng: 6.0679 },
  
  // Japan
  { country: "JP", region: "Hokkaido", value: 2, lat: 43.2203, lng: 142.8635 },
  { country: "JP", region: "Tokyo", value: 1, lat: 35.6762, lng: 139.6503 },
  { country: "JP", region: "Osaka", value: 0, lat: 34.6937, lng: 135.5023 },
  { country: "JP", region: "Kyoto", value: 2, lat: 35.0116, lng: 135.7681 },
  { country: "JP", region: "Okinawa", value: 1, lat: 26.2540, lng: 127.8311 },
  
  // China
  { country: "CN", region: "Beijing", value: 0, lat: 39.9042, lng: 116.4074 },
  { country: "CN", region: "Guangdong", value: 2, lat: 23.3790, lng: 113.7633 },
  { country: "CN", region: "Shanghai", value: 1, lat: 31.2304, lng: 121.4737 },
  { country: "CN", region: "Sichuan", value: 0, lat: 30.6171, lng: 102.7103 },
  { country: "CN", region: "Zhejiang", value: 2, lat: 29.1832, lng: 120.0934 },
  
  // India
  { country: "IN", region: "Maharashtra", value: 1, lat: 19.7515, lng: 75.7139 },
  { country: "IN", region: "Uttar Pradesh", value: 0, lat: 26.8467, lng: 80.9462 },
  { country: "IN", region: "Tamil Nadu", value: 2, lat: 11.1271, lng: 78.6569 },
  { country: "IN", region: "Karnataka", value: 1, lat: 15.3173, lng: 75.7139 },
  { country: "IN", region: "Gujarat", value: 0, lat: 22.2587, lng: 71.1924 },
  
  // Brazil
  { country: "BR", region: "São Paulo", value: 2, lat: -23.5505, lng: -46.6333 },
  { country: "BR", region: "Rio de Janeiro", value: 1, lat: -22.9068, lng: -43.1729 },
  { country: "BR", region: "Minas Gerais", value: 0, lat: -18.5122, lng: -44.5550 },
  { country: "BR", region: "Bahia", value: 2, lat: -12.5797, lng: -41.7007 },
  { country: "BR", region: "Rio Grande do Sul", value: 1, lat: -30.0346, lng: -51.2177 },
  
  // Mexico
  { country: "MX", region: "Mexico City", value: 0, lat: 19.4326, lng: -99.1332 },
  { country: "MX", region: "Jalisco", value: 2, lat: 20.6597, lng: -103.3496 },
  { country: "MX", region: "Nuevo León", value: 1, lat: 25.5922, lng: -99.9962 },
  { country: "MX", region: "Veracruz", value: 0, lat: 19.1738, lng: -96.1342 },
  { country: "MX", region: "Puebla", value: 2, lat: 19.0414, lng: -98.2063 },
  
  // Russia
  { country: "RU", region: "Moscow", value: 1, lat: 55.7558, lng: 37.6176 },
  { country: "RU", region: "Saint Petersburg", value: 0, lat: 59.9311, lng: 30.3609 },
  { country: "RU", region: "Novosibirsk", value: 2, lat: 55.0084, lng: 82.9357 },
  { country: "RU", region: "Yekaterinburg", value: 1, lat: 56.8431, lng: 60.6454 },
  { country: "RU", region: "Kazan", value: 0, lat: 55.8304, lng: 49.0661 },
  
  // Italy
  { country: "IT", region: "Lombardy", value: 2, lat: 45.8205, lng: 9.8307 },
  { country: "IT", region: "Lazio", value: 1, lat: 41.8719, lng: 12.5674 },
  { country: "IT", region: "Campania", value: 0, lat: 40.5734, lng: 14.7648 },
  { country: "IT", region: "Sicily", value: 2, lat: 37.5999, lng: 14.0154 },
  { country: "IT", region: "Veneto", value: 1, lat: 45.8205, lng: 12.1094 },
  
  // Spain
  { country: "ES", region: "Andalusia", value: 0, lat: 37.6000, lng: -4.5000 },
  { country: "ES", region: "Catalonia", value: 2, lat: 41.8211, lng: 1.8683 },
  { country: "ES", region: "Madrid", value: 1, lat: 40.4637, lng: -3.7492 },
  { country: "ES", region: "Valencia", value: 0, lat: 39.2794, lng: -0.5300 },
  { country: "ES", region: "Galicia", value: 2, lat: 42.7635, lng: -8.0559 },
  
  // South Korea
  { country: "KR", region: "Seoul", value: 1, lat: 37.5665, lng: 126.9780 },
  { country: "KR", region: "Busan", value: 0, lat: 35.1796, lng: 129.0756 },
  { country: "KR", region: "Incheon", value: 2, lat: 37.4563, lng: 126.7052 },
  { country: "KR", region: "Daegu", value: 1, lat: 35.8714, lng: 128.6014 },
  { country: "KR", region: "Gwangju", value: 0, lat: 35.1595, lng: 126.8526 },
  
  // Netherlands
  { country: "NL", region: "North Holland", value: 2, lat: 52.5175, lng: 4.8951 },
  { country: "NL", region: "South Holland", value: 1, lat: 52.0705, lng: 4.3007 },
  { country: "NL", region: "Utrecht", value: 0, lat: 52.1326, lng: 5.2913 },
  { country: "NL", region: "North Brabant", value: 2, lat: 51.6978, lng: 5.3037 },
  { country: "NL", region: "Gelderland", value: 1, lat: 52.0409, lng: 5.8574 },
  
  // Saudi Arabia
  { country: "SA", region: "Riyadh", value: 0, lat: 24.7136, lng: 46.6753 },
  { country: "SA", region: "Makkah", value: 2, lat: 21.3891, lng: 39.8579 },
  { country: "SA", region: "Eastern Province", value: 1, lat: 26.4207, lng: 50.0888 },
  { country: "SA", region: "Madinah", value: 0, lat: 24.5247, lng: 39.5692 },
  { country: "SA", region: "Asir", value: 2, lat: 18.2465, lng: 42.5347 },
  
  // South Africa
  { country: "ZA", region: "Gauteng", value: 1, lat: -26.2041, lng: 28.0473 },
  { country: "ZA", region: "Western Cape", value: 0, lat: -33.9249, lng: 18.4241 },
  { country: "ZA", region: "KwaZulu-Natal", value: 2, lat: -29.6094, lng: 30.3781 },
  { country: "ZA", region: "Eastern Cape", value: 1, lat: -32.2968, lng: 26.4194 },
  { country: "ZA", region: "Free State", value: 0, lat: -28.4541, lng: 26.7968 },
  
  // Turkey
  { country: "TR", region: "Istanbul", value: 2, lat: 41.0082, lng: 28.9784 },
  { country: "TR", region: "Ankara", value: 1, lat: 39.9334, lng: 32.8597 },
  { country: "TR", region: "Izmir", value: 0, lat: 38.4192, lng: 27.1287 },
  { country: "TR", region: "Antalya", value: 2, lat: 36.8969, lng: 30.7133 },
  { country: "TR", region: "Bursa", value: 1, lat: 40.1826, lng: 29.0665 }
];
