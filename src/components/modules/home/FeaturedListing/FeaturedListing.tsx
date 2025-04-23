import { getAllListings } from '@/services/listing';
import { IListing } from '@/types/listing';
// import Image from 'next/image'
import { ListingCard } from './ListingCard';




const FeaturedListing = async () => {
  const { data } = await getAllListings();
  const listings = data?.result;
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listings
            ?.slice(0, 4)
            .map((listing: IListing, idx: number) => (
              <ListingCard key={idx} listing={listing} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListing;
