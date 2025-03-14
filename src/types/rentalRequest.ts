 export interface IRentalRequest {
    _id: string;
    listingId: {
      name:string,
      location:string,
      rentAmount:number
    };
    tenantId:string;
    message: string;
    paymentStatus: "Pending" | "Completed" | "Failed";
    status: "Pending" | "Approved" | "Rejected";
    createdAt: string;
    updatedAt: string;
  }
  