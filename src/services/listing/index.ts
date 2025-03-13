"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";




// get all products
export const getAllListing = async (page?: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/rental-house/landlords/listings?page=${page}`,
        {
          next: {
            tags: ["LISTING"],
          },
        }
      );
      const data = await res.json();
      return data;
    } catch (error: any) {
      return Error(error.message);
    }
  };
export const getAllListingByUser = async (page?: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/rental-house/listings?page=${page}`,
        {   
          method: "GET",
          headers: {
            Authorization: (await cookies()).get("accessToken")!.value,
          },
          next: {
            tags: ["LISTING"],
          },
        }
      );
      const data = await res.json();
   
      return data;
    } catch (error: any) {
      return Error(error.message);
    }
  };
// add product
export const addListing = async (listingData: FormData): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/rental-house/landlords/listings`, {
      method: "POST",
      body: listingData,
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });
    revalidateTag("LISTING");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// get single product
export const getSingleListing = async (houseId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rental-house/landlords/listings/${houseId}`,
      {
        next: {
          tags: ["LISTING"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error)
    return Error(error.message);
  }
};


// update product
export const updateListing = async (
  listingData: FormData,
  houseId: string
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rental-house/landlords/listings/${houseId}`,
      {
        method: "PATCH",
        body: listingData,
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("LISTING");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};