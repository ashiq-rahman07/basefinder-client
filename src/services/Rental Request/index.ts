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
