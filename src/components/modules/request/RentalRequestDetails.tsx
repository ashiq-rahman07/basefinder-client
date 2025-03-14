"use client"
import Logo from '@/assets/logonew.png';
import { IListing } from '@/types/listing';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { getRentReqListTent, submitListing } from '@/services/Rental Request';
import { toast } from 'sonner';
// import { Input } from '@/components/ui/input';
import { IRentalRequest } from '@/types';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Bath, BedDouble} from "lucide-react";
import Spinner from '@/components/shared/Spinner';
// import { useRouter } from "next/navigation";




interface RentalRequestPageProps {
  listing: IListing;
 
}


const RentalRequestDetails: React.FC<RentalRequestPageProps> = ({ listing }) => {
  
 
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [requestStatus, setRequestStatus] = useState<'Pending' | 'Approved' | 'Rejected' | null>(null);
  const [loading, setLoading] =useState(true);
  const [requestData, setRequestData] =useState<IRentalRequest | null>(null) 
  
  const fetchData = async () => {
    try {
      const { data } = await getRentReqListTent(listing?._id);

          if (data) {
            setRequestData(data); // Set requestData
            setRequestStatus(data.status); // Set requestStatus
          } else {
            setRequestStatus(null); // No request found
          }    
    
        } catch (error:any) {
          console.error('Error fetching rental request:', error);
          toast.error(error.message)
            
  } finally {
    setLoading(false); // Set loading to false after fetching data
  }
};


  useEffect(() => {
    fetchData();
});

const form = useForm({defaultValues: {message:""}});
const {formState: { isSubmitting }} = form;

const onSubmit: SubmitHandler<FieldValues> = async (data) => {

  const requestData = {
      status:"Pending",
      listingId:listing._id,
      message:data.message as string
    }
  try {
    const res = await submitListing(requestData);

    if (res.success) {
     
      toast.success(res.message);
      
      
    } else {
      console.log(res)
      toast.error(res.message);
    }
  } catch (err: any) {
    console.error(err);
  }
};

if(loading){
  return <Spinner/>
}
  
 return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl text-gray-800 font-bold text-center">Submit Your Request</h1>
      <p className='text-sm font-se text-gray-800 text-center my-3'>Landlord Review Your Request, <br />If Approved Your Request, You direct contact landlord Phone  no and Payment Procedure Start</p>
      <div className="">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
        {/* Left Side: Listing Information */}
        <div className="bg-white  flex flex-col md:flex-row  items-center justify-center gap-4 p-6 rounded-lg shadow-md">
          <div className='w-1/2'>
          <h2 className="text-xl text-gray-800  font-semibold mb-4">{listing?.name}</h2>
          <h2 className="text-md text-gray-700 font-medium mb-4">{listing?.location}</h2>
          <p className="text-gray-700 text-md mb-4">{listing?.description}</p>
          <div className='flex  items-center gap-10 mb-4'>
            <span className='flex gap-2'>
              <BedDouble/> {listing?.bedrooms}
            </span>
            <span className='flex gap-2'>
              <Bath/> {listing?.bathrooms}
            </span>
          </div>
          <p className="text-lg text-gray-800  font-bold mb-4">${listing?.rentAmount}/month</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {listing.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={150}
                height={100}
                alt={`Listing Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Right Side: Rental Request Form */}
        <div className="bg-white w-full md:w-1/2  mx-auto px-6 pb-4  rounded-lg shadow-md">
        {requestData && !loading &&  (
              // Status Section
              <div className="space-y-4 mt-4">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Request Status</h2>
              <div
                  className={`p-4 rounded-lg ${
                    requestData.status === 'Approved'
                      ? 'bg-green-100 text-green-800'
                      : requestData.status === 'Rejected'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  <p className="font-semibold">Status: {requestData.status}</p>
                  {requestData.status === 'Rejected' &&  (
                    <p className="mt-2"> Your Request Rejected Landlord When Update or Cancel This status You Can again Submit Request</p>
                  )}
                  {requestData.status === 'Pending' &&  (
                    <p className="mt-2"> Your Request Status Now Pending.Please wait Landlord review your request. He Approved or Reject your Request. please wait...</p>
                  )}
                  {requestData.status === 'Approved' && requestData.message && (
                    <p className="mt-2">Message: Your Request Approved Please Follow Payment procedure</p>
                  )}
                </div> 
              </div>
            )} 
          { requestData == null && (
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex justify-between items-center border-t border-b py-3 my-5">
                <Image src={Logo} width={100} height={75} alt='Houswe Solution Logo'/>
                <p className="text-gray-600 font-bold text-xl">Request Message For Rent</p>
              </div>
           
              <div className="my-5">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel><span className='text-md font-medium text-gray-800'>Message</span></FormLabel>
                      <FormControl>
                        <Textarea
                          className="h-36 resize-none"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
                {/* Terms and Conditions Checkbox */}
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                      className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      // disabled={requestStatus !== null}
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      I agree to the terms and conditions
                    </span>
                  </label>
                </div>
                  <div className='pt-4'>
                  <Button
                        type="submit"
                        className={`inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                          agreeToTerms
                            ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
                            : 'bg-gray-400 cursor-not-allowed'
                        }`}
                        // disabled={requestStatus !== null || isSubmitting || loading}
                        >
                        {isSubmitting ? 'Submitting...': 'Submit Request'}
                        </Button> 
                  </div> 
                  </form>
          </Form>
          )
        }
          
        </div>
       {requestStatus === 'Approved' && (
        <div>
            <Button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                    Proceed to Payment
                </Button>    
        </div>
        )} 
      </div>
    </div>
  );
};

export default RentalRequestDetails;
