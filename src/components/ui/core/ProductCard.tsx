"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import { IProduct } from "@/types";
import { IListing } from "@/types/listing";
import { Bath, BedDouble} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ listing }: { listing: IListing }) => {
  return (
    <Card className="p-3">
      <CardHeader className="relative p-0 h-48">
        <Image
          src={
            listing?.images[0] ||
            "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
          }
          width={500}
          height={500}
          alt="product image"
          className="rounded-sm h-48 object-cover"
        />
        {!listing?.isAvailable && (
          <div className="absolute left-2 top-0 bg-red-500 text-white px-2 rounded-full">
           Not Available Now
          </div>
        )}
      </CardHeader>

      <CardContent className=" p-0 mt-2">
        <Link href={`/products/${listing?._id}`} passHref>
          <CardTitle
            title={listing?.name}
            className="font-semibold cursor-pointer text-sm"
          >
            {listing?.name.length > 30
              ? listing?.name?.slice(0, 30) + "..."
              : listing?.name}
          </CardTitle>
          <p className="text-sm text-gray-700 py-2">{listing?.location}</p>
          <p className="text-sm text-gray-700 py-2">Rent Amount: {listing?.rentAmount}/month</p>
        </Link>

        <div className="flex items-center  gap-4 my-2">
         

          <div className="flex items-center justify-center gap-1">
          <BedDouble />
            <span className="text-sm font-medium text-gray-700">
              {listing?.bedrooms}
            </span>
          </div>
          <div className="flex items-center justify-center gap-1">
          <Bath />
            <span className="text-sm font-medium text-gray-700">
              {listing?.bathrooms}
            </span>
          </div>
        </div>
        
      </CardContent>
     

  
      
      
        
          <Link href={`/listings/${listing?._id}`}>
          <Button
            disabled={listing?.bedrooms === 0}
            variant="outline"
            size="sm"
            className="mt-4 w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600"
          >
           View Details
          </Button>
        
          </Link>
         
     
   

    </Card>
  );
};

export default ProductCard;