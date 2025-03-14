import { Button } from "@/components/ui/button";

import { IListing } from "@/types/listing";

import Image from "next/image";


const ListingDetails = ({ listing }: { listing: IListing }) => {
  return (
    <div className="grid grid-cols-2 gap-4 border border-white p-4 rounded-md my-5 shadow-sm">
      <div>
        <Image
          src={listing?.images[0]}
          alt="product image"
          width={500}
          height={500}
          className="rounded-md w-full object-cover h-80"
        />
        <div className="grid grid-cols-3 gap-4 mt-5">
          {listing?.images.slice(0, 3).map((image: string, idx: number) => (
            <Image
              key={idx}
              src={image}
              alt="product image"
              width={500}
              height={500}
              className="rounded-md w-full object-cover h-40"
            />
          ))}
        </div>
      </div>
      <div className="bg-white rounded-md p-4">
        <h2 className="font-bold text-xl mb-4">{listing?.location}</h2>
        <p className="text-justify text-gray-500 font-light text-sm">
          {listing?.description}
        </p>
        {/* <div className="flex items-center justify-between my-5 text-gray-500 text-xs">
          <p className="rounded-full px-4 py-1 bg-gray-100 flex items-center justify-center gap-1">
            <Star className="w-4 h-4" fill="orange" stroke="orange" />
            {listing?.averageRating} Ratings
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Stock: {product?.stock}
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Brand: {product?.brand?.name}
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Category: {product?.category?.name}
          </p>
        </div> */}
        <hr />
        <p className="my-2 font-bold">
          Price:{" "}
          {listing?.rentAmount ? (
            <>
              <span className="font-semibold mr-2 text-orange-400">
                $ {listing?.rentAmount}
              </span>
              <del className="font-semibold text-xs">$ {listing?.rentAmount}</del>
            </>
          ) : (
            <span className="font-semibold">$ {listing?.rentAmount}</span>
          )}
        </p>
        <hr />

        <Button variant="outline" className="w-full my-5">
          Add To Cart
        </Button>
        <Button className="w-full">Buy Now</Button>
      </div>
    </div>
  );
};

export default ListingDetails;