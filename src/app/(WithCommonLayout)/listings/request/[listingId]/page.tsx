import RentalRequestDetails from '@/components/modules/request/RentalRequestDetails';
// import Spinner from '@/components/shared/Spinner';
// import { useUser } from '@/context/UserContext';
// import { getCurrentUser } from '@/services/AuthService';
import { getSingleListing } from '@/services/listing';
import React from 'react'

const RenRequestPage = async({
  params,
}: {
  params: Promise<{ listingId: string }>;
}) => {
  const { listingId } = await params;
  console.log(listingId);
    const { data: listing } = await getSingleListing(listingId);
    
    
  return (
    <>
    
   <RentalRequestDetails  listing={listing}/>
    
    
    </>
  )
}

export default RenRequestPage