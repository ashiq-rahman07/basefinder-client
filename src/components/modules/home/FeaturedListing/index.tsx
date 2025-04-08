
import NMContainer from '@/components/ui/core/NMContainer'
// import { ListingCard } from './ListingCard'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getAllListings } from '@/services/listing'
import ProductCard from '@/components/ui/core/ProductCard'
import { IListing } from '@/types/listing'

const FeaturedSection = async() => {
   const { data } = await getAllListings();
    const listings = data?.result
  return (
    <div className=" bg-white bg-opacity-50 pt-6 pb-8">
    <NMContainer className="my-16">
      <div className="flex items-center justify-between ">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <Link href="/listings">
          <Button variant="outline" className="rounded-full">
            All listings
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-10">
        {listings?.slice(0, 5).map((listing: IListing, idx: number) => (
          <ProductCard key={idx} listing={listing} />
        ))}
      </div>
    </NMContainer>
  </div>
  )
}

export default FeaturedSection