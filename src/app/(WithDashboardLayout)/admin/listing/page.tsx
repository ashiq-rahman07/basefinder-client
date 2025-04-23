import ManageListings from '@/components/modules/dashboard/listing/ManageListings';
import { getAllListingByUser } from '@/services/listing';


export const dynamic = 'force-dynamic';
const ListingPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  //   const { data, meta } = await getAllProducts();
  const { page } = await searchParams;
  const { data } = await getAllListingByUser(page, '3');
  if (!data || !data.result) {
    return <div>Failed to load listings.</div>;
  }

  return (
    <div>
      <ManageListings listings={data?.result} meta={data?.meta} />
    </div>
  );
};

export default ListingPage;
