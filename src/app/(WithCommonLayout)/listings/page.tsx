import { PropertyTypeSection } from "@/components/modules/home/PropertyTypeSection/PropertyTypeSection";
import AllListings from "@/components/modules/listings";
import ListingBanner from "@/components/modules/listings/banner";

// import CategoryCard from "@/components/ui/core/CategoryCard";
// import NMContainer from "@/components/ui/core/NMContainer";
// import { getAllCategories } from "@/services/Category";
import { getAllListings } from "@/services/listing";

// import { ICategory } from "@/types";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const AllProductsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const query = await searchParams;

  // const { data: categories } = await getAllCategories();
  const { data } = await getAllListings(undefined, undefined, query);
  const listings = data?.result
  console.log(listings)

  
  return (
 
   <div>
       <ListingBanner title="All Products" path="Home - Products" />
      {/* <h2 className="text-xl font-bold my-5">Featured Collection </h2> */}
      {/* <div className="grid grid-cols-6 gap-6">
        {categories?.slice(0, 6).map((category: ICategory, idx: number) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </div> */}
      <PropertyTypeSection />
      <AllListings listings={listings} />
   </div>
 
  );
};

export default AllProductsPage;