import Image from "next/image";


interface RequestData {
  _id: string;
  listingId: {
    _id: string;
    name: string;
    location: string;
    images: string[];
    rentAmount: number;
  };
  status: "Pending" | "Approved" | "Rejected";
  moveDate: string;
  rentDuration: string;
  landlordPhone?:string;
  paymentStatus?: "Pending" | "Paid" | "Fail";
  message: string;
}

const RequestCard = ({ request }: { request: RequestData }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <Image
        src={request.listingId.images?.[0]}
        alt={request.listingId.name}
        className="w-full h-48 object-cover"
        width={300}
        height={250}
      />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold">{request.listingId.name}</h3>
        <p className="text-gray-600">{request.listingId.location}</p>
        <p className="text-gray-800 font-medium">৳ {request.listingId.rentAmount}</p>
        <p className="text-sm text-gray-500">Move Date: {new Date(request.moveDate).toLocaleDateString()}</p>
        <p className="text-sm text-gray-500">Duration: {request.rentDuration}</p>
        <p className="text-sm text-gray-500">Message: {request.message}</p>
        { request.status === "Approved" && (
                <p className="text-sm text-gray-500">Direct Contact Lanlord : {request.landlordPhone}</p>
        )
    
        }
        <div className="">
          <div className="text-sm text-gray-500 my-3">Request Status: <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              request.status === "Approved"
                ? "bg-green-100 text-green-700"
                : request.status === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {request.status}
          </span>
          </div>
          {request.paymentStatus && (
           <div className="text-sm text-gray-500 ">Payment Status:  <span
           className={`px-3 py-1 rounded-full text-xs font-medium ${
             request.paymentStatus === "Paid"
               ? "bg-green-100 text-green-700"
               : request.paymentStatus === "Pending"
               ? "bg-yellow-100 text-yellow-700"
               : "bg-red-100 text-red-700"
           }`}
         >
           {request.paymentStatus}
         </span>
         </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
