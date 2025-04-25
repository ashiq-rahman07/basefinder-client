'use server';

import { getValidToken } from '@/lib/verifyToken';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export interface IPayment {
  listingId: string;
  requestId: string;
  rentAmount: number;
}
export const createPayment = async (paymentData: IPayment) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rent-pay/create-payment`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: (await cookies()).get('accessToken')!.value,
        },
        body: JSON.stringify(paymentData),
      }
    );

    revalidateTag('PAYMENT');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const verifyPayment = async (orderId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rent-pay/verify?order_id=${orderId}`,
      {
        method: 'GET',
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
      }
    );

    revalidateTag('PAYMENT');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const getSinglePayment = async (orderId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rent-pay/${orderId}`,
      {
        method: 'GET',
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
      }
    );

    revalidateTag('PAYMENT');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const getLandPaymentInfo = async () => {
  const token = await getValidToken()
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/rent-pay/land/payment`,
      {
        method: 'GET',
        headers: {
          Authorization:token,
        },
      }
    );
    revalidateTag('PAYMENT');
const data = await res.json()
    
  return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
