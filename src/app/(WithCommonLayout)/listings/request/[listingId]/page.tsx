import RentalRequestDetails from '@/components/modules/request/RentalRequestDetails';
// import Spinner from '@/components/shared/Spinner';
// import { useUser } from '@/context/UserContext';
// import { getCurrentUser } from '@/services/AuthService';
import { getSingleListing } from '@/services/listing';
import { getRentReqListTent } from '@/services/Rental Request';
import React from 'react'

const RenRequestPage = async({
  params,
}: {
  params: Promise<{ listingId: string }>;
}) => {
  const { listingId } = await params;
  // console.log(listingId);
    const { data: listing } = await getSingleListing(listingId);

    
    const {data:requestData}= await getRentReqListTent(listing?._id);
  return (
    <>
    
   <RentalRequestDetails requestData = {requestData}  listing={listing}/>
    
    
    </>
  )
}

export default RenRequestPage