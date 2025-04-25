import ListingBanner from '@/components/modules/listings/banner';
import ListingDetails from '@/components/modules/listings/listingDetails';
import { getSingleListing } from '@/services/listing';
import { getRentReqListTent } from '@/services/Rental Request';




const ListingDetailsPage = async ({
  params,
}: {
  params: Promise<{ listingId: string }>;
}) => {
  const { listingId } = await params;

  const { data: listing } = await getSingleListing(listingId);

  const { data: requestData } = await getRentReqListTent(listing?._id);

  return (
    <div>
      <ListingBanner
        title="Product Details"
        path="Home - Products - Product Details"
      />
      <ListingDetails requestData={requestData} listing={listing} />
    </div>
  );
};

export default ListingDetailsPage;
