import ManageListings from '@/components/modules/dashboard/listing/ManageListings';
import { getAllListingByUser } from '@/services/listing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'listing Management',
};
const ListingPage = async () => {
  const { data } = await getAllListingByUser();
 

  return (
    <div>
      <ManageListings listings={data?.result} meta={data?.meta}/>
    </div>
  );
};

export default ListingPage;
