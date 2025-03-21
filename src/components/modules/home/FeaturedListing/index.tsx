
import { ListingCard } from './ListingCard'

const FeaturedSection = () => {
  return (
    <section className="container mx-auto px-4">
    <h2 className="text-2xl font-bold text-center mb-6">Featured Listings</h2>
    <div className="grid  grid-cols-1 md:grid-cols-4 gap-6">
      {/* Listing Card Component */}
      <ListingCard />
      <ListingCard />
      <ListingCard />
      <ListingCard />
    </div>
  </section>
  )
}

export default FeaturedSection