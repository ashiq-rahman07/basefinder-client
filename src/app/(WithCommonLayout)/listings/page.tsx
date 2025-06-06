import { PropertyTypeSection } from '@/components/modules/home/PropertyTypeSection/PropertyTypeSection';
import AllListings from '@/components/modules/listings';
import ListingBanner from '@/components/modules/listings/banner';

import { getAllListings } from '@/services/listing';
import { Metadata } from 'next';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export const metadata: Metadata = {
  title: 'All Listing',
};
const AllProductsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const query = await searchParams;
  const { data } = await getAllListings(undefined, undefined, query);
  
  const listings = data?.result;

  return (
    <div>
      <ListingBanner title="All Products" path="Home - Products" />
      <PropertyTypeSection />
      <AllListings listings={listings} />
    </div>
  );
};

export default AllProductsPage;
