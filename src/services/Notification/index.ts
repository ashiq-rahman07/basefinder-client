'use server';

import { getValidToken } from '@/lib/verifyToken';
import { revalidateTag } from 'next/cache';



// export const createNotification = async (paymentData: IPayment) => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API}/rent-pay/create-payment`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: (await cookies()).get('accessToken')!.value,
//         },
//         body: JSON.stringify(paymentData),
//       }
//     );

//     revalidateTag('PAYMENT');
//     return res.json();
//   } catch (error: any) {
//     return Error(error);
//   }
// };
export const getMyNotification = async () => {
    const token = await getValidToken()
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/notification`,
      {
        method: 'GET',
        headers: {
          Authorization:token,
        },
      }
    );
   
  
    const data =await res.json(); 
    
   return data;
  } catch (error: any) {
    return Error(error);
  }
};
export const readNotification = async (id:string) => {
    const token = await getValidToken()
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/${id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization:token,
        },
      }
    );

    revalidateTag('NOTIFICATION');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const markAllAsRead = async () => {
    const token = await getValidToken()
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/notification/mark-all-as-read`,
      {
        method: 'PATCH',
        headers: {
          Authorization:token,
        },
      }
    );

  const data = res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteNotification = async (id: string) => {
  const token = await getValidToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/notification/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  return res.json();
};

export const deleteAllNotification = async () => {
  const token = await getValidToken();
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/notification/delete-all`,
      {
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      }
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};


