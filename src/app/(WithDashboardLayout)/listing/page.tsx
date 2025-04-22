import ManageListings from '@/components/modules/dashboard/listing/ManageListings';
import { getAllListingByUser } from '@/services/listing';

const ListingPage = async () => {
  //   const { data, meta } = await getAllProducts();
  const { data } = await getAllListingByUser();

  return (
    <div>
      <ManageListings listings={data?.result} />
    </div>
  );
};

export default ListingPage;
