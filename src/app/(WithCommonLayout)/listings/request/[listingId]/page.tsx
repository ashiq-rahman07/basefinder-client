
import RequestListingDetails from '@/components/modules/listings/listingDetails/RequestListingDetails';
import RentalRequestForm from '@/components/modules/request/RentalRequestForm';
import { useUser } from '@/context/UserContext';
import { getSingleListing } from '@/services/listing';
import { submitListing } from '@/services/Rental Request';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';



const RequestPage = async ({
  params,
}: {
  params: Promise<{ listingId: string }>;
}) => {
  const { listingId } = await params;
  const { user,isLoading } = useUser();
  const { data: listing } = await getSingleListing(listingId);
  const [requestStatus, setRequestStatus] = useState<'Pending' | 'Approved' | 'Rejected' | null>(null);

  const userInfo = {
    user,
    isLoading
  }
  // Fetch request status on component mount
  useEffect(() => {
    const fetchRequestStatus = async () => {
      const response = await fetch(
        `/api/rental-requests/status?tenantId=${tenantId}&listingId=${listing.id}`
      );
      const data = await response.json();
      setRequestStatus(data.status);
    };
    fetchRequestStatus();
  }, [tenantId, listing.id]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data)
    const requestData = {
        listingId,
        message:data.message
    }
       
    console.log(requestData)
     
        try {
          const res = await submitListing(requestData);
    
          if (res.success) {
            toast.success(res.message);
            // router.push("/listing");
          } else {
            console.log(res)
            toast.error(res.message);
          }
        } catch (err: any) {
          console.error(err);
        }
      };
  return (
   <div className='container pt-10 mx-auto'>
     <h2 className='text-center pb-10 text-xl'>If You Want to Rent This Property, First to <span className='text-green-600'>Submit Request listing Owner</span></h2>
     <div className='  flex items-center justify-center  gap-4'>
   
   <RequestListingDetails listing={listing}/>
   <RentalRequestForm onSubmit={onSubmit} userInfo={userInfo}  />
 </div>
   </div>


  )
}

export default RequestPage;