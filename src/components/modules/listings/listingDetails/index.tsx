"use client"
// import { Button } from "@/components/ui/button";

import { IListing } from "@/types/listing";

import Image from "next/image";

import CreateRequestModal from "./CreateRequestModal";
import { Button } from "@/components/ui/button";
import { IRentalRequest } from "@/types";
import { useUser } from "@/context/UserContext";
import Spinner from "@/components/shared/Spinner";
import { Bath, BedDouble } from "lucide-react";
import { createPayment } from "@/services/payment";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
// import Link from "next/link";

interface RentalRequestPageProps {
  listing: IListing;
 requestData :IRentalRequest
}

const ListingDetails: React.FC<RentalRequestPageProps> = ({ listing,requestData }) => {
   const { user,isLoading } = useUser();
 const router = useRouter();
if(!listing && !requestData){
  return <p>Loading</p>
}
   const handlePayment = async()=>{

    const paymentData = {
      listingId:listing?._id,
    rentAmount:listing?.rentAmount
    }
    console.log(paymentData);
    try {
      const payment = await createPayment(paymentData) ;
      console.log(payment);
      if (payment?.success) {
        toast.success("Payment Processing");
        router.push(`${payment?.data}`)
      } else {
        toast.error(payment?.message);
      }
     

   
    } catch (err: any) {
      console.error(err);
    }
   }

  
  return (
    <div className="grid grid-cols-2 gap-4 border border-white p-4 rounded-md my-5 shadow-sm">
      <div>
        <Image
          src={listing?.images[0]}
          alt="product image"
          width={500}
          height={500}
          className="rounded-md w-full object-cover h-80"
        />
        <div className="grid grid-cols-3 gap-4 mt-5">
          {listing?.images.slice(0, 3).map((image: string, idx: number) => (
            <Image
              key={idx}
              src={image}
              alt="product image"
              width={500}
              height={500}
              className="rounded-md w-full object-cover h-40"
            />
          ))}
        </div>
      </div>
      <div className="bg-white rounded-md p-4">
        <h2 className="font-bold text-xl text-gray-800 mb-2">{listing?.name}</h2>
        <h2 className="font-bold text-md text-gray-800 mb-4">Location: <span className="text-md text-gray-600"></span>{listing?.name}</h2>
      
        <p className="text-justify text-gray-700 font-light w-2/3  text-sm">
          {listing?.description}
        </p>
       
        <div className="flex items-center  gap-4 my-2">
         

         <div className="flex items-center justify-center gap-1">
         <BedDouble />
           <span className="text-sm font-medium text-gray-700">
             {listing?.bedrooms}
           </span>
         </div>
         <div className="flex items-center justify-center gap-1">
         <Bath />
           <span className="text-sm font-medium text-gray-700">
             {listing?.bathrooms}
           </span>
         </div>
       </div>
       <div>
       <span className="text-md font-bold text-gray-800">Amenities:</span>
        {
        listing?.amenities.map((amenity,idx)=>(
          <li key={idx} className="text-sm font-bold text-gray-700">{amenity}</li>
        ))
        }
       </div>
        <p className="my-2 font-bold text-gray-800 text-md">
          Rent Amount: {listing?.rentAmount} /month
        </p>
      

       
        {/* <Button className="my-4">Rent Request</Button> */}
        {isLoading && <Spinner/>}

        {requestData &&  (
              // Status Section
              <div className="space-y-4 mt-4">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Request Status</h2>
              <div
                  className={`p-4 rounded-lg ${
                    requestData?.status === 'Approved'
                      ? 'bg-green-100 text-green-800'
                      : requestData?.status === 'Rejected'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  <p className="font-semibold">Status: {requestData.status}</p>
                  {requestData?.paymentStatus === 'Paid' ?(
                       <p className="mt-2"> Your Rent Amount Succesfully Paid For This Listing.</p>
                  ):
                  <>
                     {requestData?.status === 'Rejected' &&  (
                    <p className="mt-2"> Your Request Rejected Landlord When Update or Cancel This status You Can again Submit Request</p>
                  )}
                  {requestData?.status === 'Pending' &&  (
                    <p className="mt-2"> Your Request Status Now Pending.Please wait Landlord review your request. He Approved or Reject your Request. please wait...</p>
                  )}
                  {requestData?.status === 'Approved' && requestData.message && (
                    <p className="mt-2">Message: Your Request Approved Please Follow Payment procedure</p>
                  )}
                  </>
                  
                  }
                 
               
                </div> 
              </div>
            )} 
        { !user && <div className="mt-4">
                <p className="text-md text-yellow-600">Rent for this listing please login or register</p>
              <Button disabled={true} className="my-4">Rent Request</Button>
           </div>
         }
       <div className="mt-4">
       { user &&  requestData == null &&
          <CreateRequestModal listingId ={listing?._id}/>
        }
        {requestData?.status === 'Approved' && requestData.paymentStatus === "Pending"  && (
        <div>
            <Button
             onClick={handlePayment}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                    Proceed to Payment
                </Button>    
        </div>
        )}
      </div>
       </div>
    </div>
  );
};

export default ListingDetails;