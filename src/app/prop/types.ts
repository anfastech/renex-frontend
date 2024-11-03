// types.ts
export interface Location {
    city: string;
    address: string;
  }
  
  export interface Image {
    url: string;
    alt: string;
  }
  
  export interface Property {
    id: string;
    paid_ad: boolean;
    location: Location;
    transactionType: string;
    propertyType: string;
    image: Image;
    price: number;
    features: string[];
    available: boolean;
  }
  