'use server';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export const getAllListings = async (
  page?: string,
  limit?: string,

  query?: { [key: string]: string | string[] | undefined }
) => {
  const params = new URLSearchParams();

  if (query?.price) {
    params.append('minPrice', '0');
    params.append('maxPrice', query?.price.toString());
  }

  if (query?.category) {
    params.append('categories', query?.category.toString());
  }
  if (query?.bedrooms) {
    params.append('bedrooms', query?.bedrooms.toString());
  }

  // if(query?.searchTerm){
  //   params.append("searchTerm", query?.searchTerm.toString());
  // }
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rental-house/landlords/listings?limit=${limit}&page=${page}&${params}`,
      {
        
        next: {
         
          tags: ['LISTING'],
        },
      
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
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
export const getAllListingByUser = async (page?: string, limit?: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rental-house/listings?limit=${limit}&page=${page}`,
      {
        method: 'GET',
        headers: {
          Authorization: (await cookies()).get('accessToken')?.value || '',
        },
        next: {
          tags: ['LISTING'],
        },
      }
    );

    // 🔐 Check for failed response before parsing
    if (!res.ok) {
      const errorText = await res.text(); // logs what's going wrong
      console.error('API error:', res.status, errorText);
      throw new Error(`Failed to fetch listings: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error('getAllListingByUser error:', error);
    return { data: null }; // make return type safe for frontend
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
