// "use client"

// import PaymentStatus from "@/components/modules/payment";
// import { Button } from "@/components/ui/button";
// import { getSinglePayment, verifyPayment } from "@/services/payment";
// import { IPayment } from "@/types/payment";

// import {  useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { toast } from "sonner";


// const PaymentVerifyPage = () => {
//   const searchParams = useSearchParams();
//   const order_id = searchParams.get('order_id') as string;
//   const [paymentInfo ,setPaymentInfo] = useState<IPayment>()
  
//   console.log(order_id);

// console.log(paymentInfo);
//   useEffect(()=>{
//       const fetchData = async () => {
//         const [paymentData] = await Promise.all([
//           getSinglePayment(order_id),
         
//         ]);
  
//         setPaymentInfo(paymentData?.data);
       
       
//       };
  
//       fetchData();
//   }, [])

//   const handlePayment = async() => {

//     const verifyPaymentData = await verifyPayment(order_id)

//     if(verifyPaymentData.success){
//       setPaymentInfo(verifyPaymentData)
     
//         toast.success('Payment verify succesfully')
        
//     }
   
//     toast.success('')
// }
//   return (
//   <div className="mt-20">
//   {
//     paymentInfo &&  <PaymentStatus data={paymentInfo}/>
//   }
//   {
//     paymentInfo?.status =='Pending' && <div>
//       <p>Verify payment for Rent this listing</p>
//     <Button onClick={handlePayment}>Verify Payment</Button>
//     </div>
//   }
   
    
//   </div>
//   )
// }

// export default PaymentVerifyPage




'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter, useSearchParams } from 'next/navigation'
import { getSinglePayment, verifyPayment } from '@/services/payment'
import { IPayment } from '@/types'

const PaymentSuccessPage = () => {
    const searchParams = useSearchParams();
  const order_id = searchParams.get('order_id') as string;

  const [paymentInfo ,setPaymentInfo] = useState<IPayment>()
  const [verifying, setVerifying] = useState(false)
  const router = useRouter()
  const [status, setStatus] = useState<string | null>(null)
console.log(paymentInfo);

    useEffect(()=>{
      const fetchData = async () => {
        const [paymentData] = await Promise.all([
          getSinglePayment(order_id),
         
        ]);
  
        setPaymentInfo(paymentData?.data);
       
       
      };
  
      fetchData();
  }, [])
  const handleVerify = async () => {
    try {
      setVerifying(true)
      // Replace with your API call to verify payment
      const verifyPaymentData = await verifyPayment(order_id)

     

      if (verifyPaymentData.success) {
        setStatus('Payment Verified ✅')
        toast.success('Payment verified successfully!')
        router.refresh()
      } else {
        // setStatus('Payment Failed ❌')
        toast.error('Payment verification failed')
      }
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong')
    } finally {
      setVerifying(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center px-4">
      <CheckCircle className="w-20 h-20 text-green-600 mb-4" />
      <h1 className="text-3xl font-bold text-green-700 mb-2">Payment Successful</h1>
      <p className="text-gray-700 mb-6">
        Thank you! Your payment was processed successfully.
      </p>

    
{
  paymentInfo?.transaction?.bank_status || status ?(
    <>
    <p className=' mt-4 text-lg font-semibold text-gray-800'>Transiction ID: {order_id}</p>
    <p className="mt-2 text-lg font-semibold text-gray-800">{status}</p>
  </>
  ):  <Button
  onClick={handleVerify}
  disabled={verifying}
  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl shadow-lg"
>
  {verifying ? 'Verifying...' : 'Verify Payment'}
</Button>
}
      {/* {status && (
        <>
          <p className=' mt-4 text-lg font-semibold text-gray-800'>Transiction ID: {order_id}</p>
          <p className="mt-2 text-lg font-semibold text-gray-800">{status}</p>
        </>
      )} */}
    </div>
  )
}

export default PaymentSuccessPage
