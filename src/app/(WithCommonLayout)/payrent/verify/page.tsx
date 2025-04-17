"use client"

import PaymentStatus from "@/components/modules/payment";
import { Button } from "@/components/ui/button";
import { getSinglePayment, verifyPayment } from "@/services/payment";
import { IPayment } from "@/types/payment";

import {  useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";


const PaymentVerifyPage = () => {
  const searchParams = useSearchParams();
  const order_id = searchParams.get('order_id') as string;
  const [paymentInfo ,setPaymentInfo] = useState<IPayment>()
  // const [loading,setLoading] = useState(true)
  console.log(order_id);
  //  const router = useRouter();
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

  const handlePayment = async() => {

    const verifyPaymentData = await verifyPayment(order_id)

    if(verifyPaymentData.success){
      setPaymentInfo(verifyPaymentData)
     
        toast.success('Payment verify succesfully')
        
    }
   
    toast.success('')
}
  return (
  <>
  {
    paymentInfo &&  <PaymentStatus data={paymentInfo}/>
  }
  {
    paymentInfo?.status =='Pending' && <div>
      <p>Verify payment for Rent this listing</p>
    <Button onClick={handlePayment}>Verify Payment</Button>
    </div>
  }
   
    
  </>
  )
}

export default PaymentVerifyPage




