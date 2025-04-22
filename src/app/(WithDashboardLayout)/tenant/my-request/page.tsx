import ManageTenantRequest from '@/components/modules/dashboard/rentRequest/ManageTenantRequest';

import { getAllReqTenant } from '@/services/Rental Request';

const MyRequestPage = async () => {
  //   const { data, meta } = await getAllProducts();
  const { data } = await getAllReqTenant();

  return (
    <div>
      <ManageTenantRequest requests={data?.result} />
    </div>
  );
};

export default MyRequestPage;
