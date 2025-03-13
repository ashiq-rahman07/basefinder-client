

import UpdateListingForm from "@/components/modules/dashboard/listing/UpdateListingForm";
import { getSingleListing } from "@/services/listing";
// import UpdateProductForm from "@/components/modules/shop/product/UpdateProductForm";
// import { getSingleProduct } from "@/services/Product";

const UpdateListingPage = async ({
  params,
}: {
  params: Promise<{ houseId: string }>;
}) => {
  const { houseId } = await params;

  const { data:listing } = await getSingleListing(houseId);
  //   console.log(product);

  return (
    <div className="flex justify-center items-center">
      <UpdateListingForm listing={listing} />
    </div>
  );
};

export default UpdateListingPage;