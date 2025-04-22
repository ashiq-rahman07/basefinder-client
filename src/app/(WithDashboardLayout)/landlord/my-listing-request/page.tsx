import ManageLandReq from '@/components/modules/dashboard/rentRequest/ManagelandReq';
import { getAllLandListingReq } from '@/services/Rental Request';

import React from 'react';

const MyListingRequestPage = async () => {
  const { data } = await getAllLandListingReq();
  console.log(data);
  return (
    <div>
      {/* <ManageLandListingReq requests={data} /> */}
      <ManageLandReq requests={data} />
    </div>
  );
};

export default MyListingRequestPage;
