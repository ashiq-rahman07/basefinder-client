 export interface IListing {
    _id: string;
    name:string;
    location: string;
    description: string;
    rentAmount: number;
    bedrooms: number;
    bathrooms:number;
    category: {
      _id: string;
      name: string;
    };
    landlordUser: {
      _id: string;
      name: string;
    };
    images: string[];
    isAvailable: boolean;
    createdAt: string;
    updatedAt: string;
  
  }