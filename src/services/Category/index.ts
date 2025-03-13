"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createCategory = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
revalidateTag("CATEGORY");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllCategories = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category` , {
      next: {
        tags: ["CATEGORY"],
      },
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const getAllCategoriesUser = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category/created-user`,{
      method: "GET",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      next: {
        tags: ["CATEGORY"],
      },
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};