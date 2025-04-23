'use server';
import { getValidToken } from '@/lib/verifyToken';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export const getAllListings = async (
  page?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined }
) => {
  const params = new URLSearchParams();

  if (query?.price) {
    params.append("minPrice", "0");
    params.append("maxPrice", query.price.toString());
  }
  if (query?.category) {
    params.append("categories", query.category.toString());
  }
  if (query?.bedrooms) {
    params.append("bedrooms", query.bedrooms.toString());
  }
  if (limit) params.append("limit", limit);
  if (page) params.append("page", page);

  const url = `${process.env.NEXT_PUBLIC_BASE_API}/rental-house/landlords/listings?${params.toString()}`;
  console.log("🌐 Fetching Listings From:", url);

  try {
    const res = await fetch(url, {
      next: {
        tags: ["LISTING"],
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const contentType = res.headers.get("content-type");

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ API Error Response:", errorText);
      throw new Error(`API responded with status ${res.status}`);
    }

    if (contentType?.includes("application/json")) {
      return await res.json();
    } else {
      const text = await res.text();
      console.error("❌ Unexpected content type:", contentType);
      console.error("🔍 Response text:", text.slice(0, 300));
      throw new Error("Response is not JSON");
    }
  } catch (error: any) {
    console.error("💥 Fetch Failed:", error.message);
    throw new Error(error.message); // ✅ Throw, don't return
  }
};




// get all products
// export const getAllListing = async (page?: string) => {
//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_API}/rental-house/landlords/listings?page=${page}`,
//         {
//           next: {
//             tags: ["LISTING"],
//           },
//         }
//       );
//       const data = await res.json();
//       return data;
//     } catch (error: any) {
//       return Error(error.message);
//     }
//   };
// export const getAllListingByUser = async (page?: string, limit?: string) => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API}/rental-house/listings?limit=${limit}&page=${page}`,
//       {
//         method: 'GET',
//         headers: {
//           Authorization: (await cookies()).get('accessToken')!.value,
//         },
//         next: {
//           tags: ['LISTING'],
//         },
//       }
//     );
//     const data = await res.json();

//     return data;
//   } catch (error: any) {
//     return Error(error.message);
//   }
// };
// services/listing.ts

export const getAllListingByUser = async (

 
) => {
  const token = await getValidToken()
  try {

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rental-house/listings`,
      {
        method: 'GET',
        headers: {
         Authorization: token,
         
        },
        // credentials: 'include' // If using cookies
      }
    );

  

    return await res.json();
  } catch (error: any) {
    console.error('getAllListingByUser error:', error);
    throw error; // Re-throw for error boundary
  }
};

// add product
export const addListing = async (listingData: FormData): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rental-house/landlords/listings`,
      {
        method: 'POST',
        body: listingData,
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
      }
    );
    revalidateTag('LISTING');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// get single product
export const getSingleListing = async (listingId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rental-house/landlords/listings/${listingId}`,
      {
        next: {
          tags: ['LISTING'],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error);
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
        method: 'PATCH',
        cache: 'force-cache',
        body: listingData,
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
      }
    );
    revalidateTag('LISTING');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const deleteListing = async (houseId: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rental-house/landlords/listings/${houseId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
      }
    );
    revalidateTag('LISTING');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
