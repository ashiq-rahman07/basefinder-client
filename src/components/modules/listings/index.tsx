import ProductCard from "@/components/ui/core/ProductCard";

import FilterSidebar from "./filterSidebar";
import { IListing } from "@/types/listing";


const AllListings = ({ listings }: { listings: IListing[] }) => {
  return (
    <div className="flex gap-8 my-10">
      <div className="w-full max-w-sm">
        <FilterSidebar />
      </div>
      <div>
        <div className="grid grid-cols-3 gap-8">
          {listings?.map((listing: IListing, idx: number) => (
            <ProductCard key={idx} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllListings;