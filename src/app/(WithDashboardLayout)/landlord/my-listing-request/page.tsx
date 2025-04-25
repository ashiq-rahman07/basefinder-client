import ManageLandReq from '@/components/modules/dashboard/rentRequest/ManagelandReq';
import { getAllLandListingReq } from '@/services/Rental Request';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landlord Request Management',
};

const MyListingRequestPage = async () => {
  const { data } = await getAllLandListingReq();
  const requestData= data || [];
  return (
    <div>
      {/* <ManageLandListingReq requests={data} /> */}
      <ManageLandReq requests={requestData} />
    </div>
  );
};

export default MyListingRequestPage;
