import { getAllListings } from '@/services/listing';
import { IListing } from '@/types/listing';
import { ListingCard } from './ListingCard';

const FeaturedListing = async () => {
  let listings: IListing[] = [];

  try {
    const response = await getAllListings();
    listings = response?.data?.result || [];
  } catch (error) {
    console.error("❌ Failed to load listings in FeaturedListing:", error);
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Featured Properties
        </h2>

        {listings.length === 0 ? (
          <p className="text-center text-gray-500">No listings found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {listings.slice(0, 4).map((listing: IListing, idx: number) => (
              <ListingCard key={idx} listing={listing} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedListing;
