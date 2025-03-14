
import ListingBanner from "@/components/modules/listings/banner";
import ListingDetails from "@/components/modules/listings/listingDetails";
import NMContainer from "@/components/ui/core/NMContainer";
import { getSingleListing } from "@/services/listing";


const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ listingId: string }>;
}) => {
  const { listingId } = await params;

  const { data: listing } = await getSingleListing(listingId);

  return (
    <NMContainer>
      <ListingBanner
        title="Product Details"
        path="Home - Products - Product Details"
      />
      <ListingDetails listing={listing} />
    </NMContainer>
  );
};

export default ProductDetailsPage;