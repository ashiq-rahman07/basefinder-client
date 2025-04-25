import Image from "next/image";
import React from "react";

interface Transaction {
  id: string;
  transactionStatus?: string;
  bank_status?: string;
  sp_code?: string;
  sp_message?: string;
  method?: string;
  date_time?: string;
}

export interface PaymentData {
  _id: string;
  listing: string;
  tenant: string;
  rentAmount: number;
  status: "Paid" | "Pending" | "Cancelled";
  createdAt: string;
  transaction: Transaction;
  listingName: string;
  listingLocation: string;
  listingImages: string[];
}

const PaymentCard = ({ payment }: { payment: PaymentData }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden">
      <Image
        src={payment.listingImages?.[0]}
        alt={payment.listingName}
        width={300}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold">{payment.listingName}</h3>
        <p className="text-gray-500">{payment.listingLocation}</p>
        <p className="text-gray-700 font-medium">৳ {payment.rentAmount}</p>
        <span
          className={`inline-block px-3 py-1 text-sm rounded-full ${
            payment.status === "Paid"
              ? "bg-green-100 text-green-700"
              : payment.status === "Pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {payment.status}
        </span>
        {payment.transaction?.method && (
          <div className="text-sm text-gray-600 mt-2">
            <p><strong>Method:</strong> {payment.transaction.method}</p>
            <p><strong>Date:</strong> {payment.transaction.date_time}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
