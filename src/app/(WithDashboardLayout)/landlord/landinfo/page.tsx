"use client"
import PaymentCard from "@/components/modules/payment/LandPaymentInfo";
import { getLandPaymentInfo } from "@/services/payment";

import { useEffect, useState } from "react";


export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

//   const landlordId = "YOUR_LANDLORD_ID"; // Get from session/token ideally

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await getLandPaymentInfo();
       
        setPayments(res?.data);
      } catch (error) {
        console.error("Error fetching payments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);
  if(loading){
    return <p>loading....</p>
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🏦 Payment Information</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading payments...</p>
      ) : payments.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-xl font-semibold text-gray-600">No payment data found.</h2>
          <p className="text-gray-400">Once a tenant pays rent, it’ll show up here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {payments.map((payment: any) => (
            <PaymentCard key={payment._id} payment={payment} />
          ))}
        </div>
      )}
    </div>
  );
}
