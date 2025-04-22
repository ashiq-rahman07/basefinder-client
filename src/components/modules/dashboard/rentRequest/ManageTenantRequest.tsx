"use client";

import { NMTable } from "@/components/ui/core/NMTable/index";
import { ColumnDef } from "@tanstack/react-table";
import {  Eye} from "lucide-react";




import EmptyItems from "@/components/shared/EmptyItems";
import { IRentalRequest } from "@/types";
import Link from "next/link";
import Image from "next/image";

const ManageTenantRequest = ({ requests }: { requests: IRentalRequest[] }) => {

const columns: ColumnDef<IRentalRequest>[] = [
  
    {
       accessorKey: "Listing",
       header: "Listing",
       cell: ({ row }) => (
         <div className="flex items-center space-x-3">
           <Image
             src={row.original.listingId.images[0]}
             alt={row.original.listingId.location}
             width={40}
             height={40}
             className="w-8 h-8 rounded-full"
           />
           <span className="truncate">{row.original.listingId.name}</span>
         </div>
       ),
     },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }) => <span>{row.original.listingId.location}</span>,
    },
    {
      accessorKey: "requestStatus",
      header: "Request Status",
      cell: ({ row }) => <span>{row.original.status}</span>,
    },
    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
      cell: ({ row }) => <span>{row.original.paymentStatus}</span>,
    },
    {
      accessorKey: "rentAmount",
      header: "Rent Amount",
      cell: ({ row }) => <span>{row.original.listingId.rentAmount}</span>,
    },
    
  
    
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Link
          href={`/listings/${row.original.listingId._id}`}
            className="text-gray-500 hover:text-blue-500"
            title="View"
          
          >
            <Eye className="w-5 h-5" />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
   
        <h1 className="text-xl font-bold mb-4">My Rent Request</h1>
    
         
       { 
        requests?.length === 0 && <EmptyItems title="Rent Request"/>
       }
    
   
        
      
      </div>
      <NMTable columns={columns} data={requests || []} />
    </div>
  );
};

export default ManageTenantRequest;