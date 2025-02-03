export interface ITrustPilot {
  showGrow?: boolean;
  showTrustPilot?: boolean;
}

export interface IProperty {
  id: number;
  title: string;
  address: IAddress;
  pricePerMonth: number;
  currency: string;
  status: "POPULAR" | "AVAILABLE" | "RENTED" | string;
  features: IFeatures;
  image: string;
}

interface IAddress {
  street: string;
  city: string;
  state: string;
}

interface IFeatures {
  beds: number;
  bathrooms: number;
  size: ISize;
}

interface ISize {
  width: number;
  length: number;
  unit: "m²" | "sq ft" | string;
}
