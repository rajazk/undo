export interface CarbonRegistryResponse {
  orderNumber: string;
  orderedBy: string;
  projectCountry: string;
  purchaseDate: string;
  saleCountry: string;
  carbonData: CarbonData;
}

interface CarbonData {
  methodology: string;
  netTonnesRemoved: number;
  processingEmissionsTonnes: number;
  sequestrationYear: string;
  totalTonnesSequestered: number;
  transportEmissionsTonnes: number;
}
