 export interface IRentalRequest {
    _id: string;
    listingId: {
      _id:string,
      images:Array<string>,
      name:string,
      location:string,
      rentAmount:number
    };
    tenantId:{
      name:string,
      email:string
    };
    moveDate: Date;
    rentDuration:string;
    message: string;
    paymentStatus: "Pending" | "Paid" | "Failed";
    status: "Pending" | "Approved" | "Rejected";
    landlordPhone?: string;
    createdAt: string;
    updatedAt: string;
  }
  