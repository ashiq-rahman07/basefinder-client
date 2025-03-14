"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
interface IRequestData {
    listingId:string,
    message:string
}
export const submitListing = async (requestData:IRequestData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/rental-request`, {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: JSON.stringify(requestData),
    });
    revalidateTag("RENTREQUEST");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getRentRequest = async (tenantId?: string,listingId?:string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rental-request?tenantId=${tenantId}&listingId=${listingId}`,
      {
          method: "GET",
          headers: {
            Authorization: (await cookies()).get("accessToken")!.value,
          },
          next: {
              tags: ["RENTREQUEST"],
            },
      }
        
    );
    const data = await res.json();
 
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const getRentReqListTent = async (listingId?:string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rental-request/${listingId}`,
      {
          method: "GET",
          headers: {
            Authorization: (await cookies()).get("accessToken")!.value,
          },
          next: {
              tags: ["RENTREQUEST"],
            },
      }
        
    );
    const data = await res.json();
 
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const getAllReqTenant = async (page?: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rental-request/tenant?page=${page}`,
      {
          method: "GET",
          headers: {
            Authorization: (await cookies()).get("accessToken")!.value,
          },
          next: {
              tags: ["RENTREQUEST"],
            },
      }
        
    );
    const data = await res.json();
 
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};


