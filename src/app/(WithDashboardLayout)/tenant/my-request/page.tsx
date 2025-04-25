// import ManageTenantRequest from '@/components/modules/dashboard/rentRequest/ManageTenantRequest';

// import { getAllReqTenant } from '@/services/Rental Request';

// const MyRequestPage = async () => {
//   //   const { data, meta } = await getAllProducts();
//   const { data } = await getAllReqTenant();

//   return (
//     <div>
//       <ManageTenantRequest requests={data?.result} />
//     </div>
//   );
// };

// export default MyRequestPage;
"use client"
import RequestCard from "@/components/modules/request/RequestCard";
import { getAllReqTenant } from "@/services/Rental Request";
import { useEffect, useState } from "react";


export default function MyRequestsPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const { data } = await getAllReqTenant();
        setRequests(data?.result);
      } catch (error) {
        console.error("Error fetching requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">📋 My Rental Requests</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading requests...</p>
      ) : requests.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-xl font-semibold text-gray-600">No requests found.</h2>
          <p className="text-gray-400">Your submitted rental requests will appear here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((request: any) => (
            <RequestCard key={request._id} request={request} />
          ))}
        </div>
      )}
    </div>
  );
}

