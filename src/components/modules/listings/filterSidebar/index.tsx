"use client";
import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
// import { Star } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { getAllCategories } from "@/services/Category";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {  BedDouble} from "lucide-react";
// import { Value } from "@radix-ui/react-select";
export default function FilterSidebar() {
  const [price, setPrice] = useState([0]);

  const [isLoading, setIsLoading] = useState(false);


  const [categories, setCategories] = useState([]);
  // const [bedRooms, setBedrooms] = useState(0);
//   const [searchTerm, setSearchTerm] = useState('');
// console.log(searchTerm);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [{ data: categoriesData }] =
          await Promise.all([getAllCategories()]);
        setCategories(categoriesData);
        // const { data } = await getAllListings();
 
       
      } catch (error: any) {
        console.error(error);
        toast.error("Failed to fetch filters");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();


 
  const handleSearchQuery = (query: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(query, value.toString());

    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className="p-6  bg-white rounded-lg">
      <div className="flex justify-between items-center mb-6">
    
        <h2 className="text-xl font-semibold">Filter Listing</h2>
        {searchParams.toString().length > 0 && (
          <Button
            onClick={() => {
              router.push(`${pathname}`, {
                scroll: false,
              });
            }}
            size="sm"
            className="bg-black hover:bg-gray-700 ml-5"
          >
            Clear Filters
          </Button>
        )}
      </div>

    
     
      {/* Filter by Price */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Rent Amount</h2>
        <div className="flex items-center justify-between text-sm mb-2">
          <span>$0</span>
          <span>$500000</span>
        </div>
        <Slider
          max={500000}
          step={1}
          onValueChange={(value) => {
            setPrice(value);
            handleSearchQuery("price", value[0]);
          }}
          className="w-full"
        />
        <p className="text-sm mt-2">Selected Price: ${price[0]}</p>
      </div>
      {/* Product Types */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Product Category</h2>
        {!isLoading && (
          <RadioGroup className="space-y-2">
            {categories?.map((category: { _id: string; name: string }) => (
              <div key={category._id} className="flex items-center space-x-2">
                <RadioGroupItem
                  onClick={() => handleSearchQuery("category", category._id)}
                  value={category._id}
                  id={category._id}
                />
                <Label
                  htmlFor={category._id}
                  className="text-gray-500 font-light"
                >
                  {category.name}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      </div>
      {/* Bedrooms */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Search Bedrooms</h2>
        {!isLoading && (
          <RadioGroup className="space-y-2">
              <div className="grid grid-cols-4 gap-2">
              <div className="flex items-center space-x-2">
        <RadioGroupItem value="1" id="r1"onClick={() => handleSearchQuery("bedrooms", 1)} />
        <Label htmlFor="r1"><p className="flex gap-2 justify-center items-center text-gray-500 font-light"><span>1</span> <BedDouble/></p></Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="2" id="r2" onClick={() => handleSearchQuery("bedrooms", 2)}/>
        <Label htmlFor="r2"><p className="flex gap-2 justify-center items-center text-gray-500 font-light"><span>2</span> <BedDouble/></p></Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="3" id="r3" onClick={() => handleSearchQuery("bedrooms", 3)} />
        <Label htmlFor="r3"><p className="flex gap-2 justify-center items-center text-gray-500 font-light"><span>3</span> <BedDouble/></p></Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="4" id="r4" onClick={() => handleSearchQuery("bedrooms", 4)} />
        <Label htmlFor="r3"><p className="flex gap-2 justify-center items-center text-gray-500 font-light"><span>4</span> <BedDouble/></p></Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="5" id="r5" onClick={() => handleSearchQuery("bedrooms", 5)} />
        <Label htmlFor="r3"><p className="flex gap-2 justify-center items-center text-gray-500 font-light"><span>5</span> <BedDouble/></p></Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="6" id="r6" onClick={() => handleSearchQuery("bedrooms", 6)} />
        <Label htmlFor="r3"><p className="flex gap-2 justify-center items-center text-gray-500 font-light"><span>6</span> <BedDouble/></p></Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="7" id="r7" onClick={() => handleSearchQuery("bedrooms", 7)} />
        <Label htmlFor="r3"><p className="flex gap-2 justify-center items-center text-gray-500 font-light"><span>7</span> <BedDouble/></p></Label>
      </div>
              </div>
          </RadioGroup>
        )}
      </div>
      {/* Rating */}
     
    </div>
  );
}