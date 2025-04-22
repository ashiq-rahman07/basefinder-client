import UpdateListingForm from '@/components/modules/listing/UpdateListingForm';
// import UpdateProductForm from "@/components/modules/shop/product/UpdateProductForm";
import { getSingleListing } from '@/services/listing';
// import { getSingleProduct } from "@/services/Product";

const UpdateProductPage = async ({
  params,
}: {
  params: Promise<{ houseId: string }>;
}) => {
  const { houseId } = await params;

  const { data: listing } = await getSingleListing(houseId);
  //   console.log(listing);

  return (
    <div className="flex justify-center items-center">
      <UpdateListingForm listing={listing} />
    </div>
  );
};

export default UpdateProductPage;
