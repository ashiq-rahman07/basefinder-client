import UpdateListingForm from '@/components/modules/dashboard/listing/UpdateListingForm';
import { getSingleListing } from '@/services/listing';

const UpdateListingPage = async ({
  params,
}: {
  params: Promise<{ houseId: string }>;
}) => {
  const { houseId } = await params;

  const { data: listing } = await getSingleListing(houseId);


  return (
    <div className="flex justify-center items-center">
      <UpdateListingForm listing={listing} />
    </div>
  );
};

export default UpdateListingPage;
