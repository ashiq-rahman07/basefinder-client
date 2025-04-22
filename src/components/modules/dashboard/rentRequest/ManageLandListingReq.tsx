'use client';

import { NMTable } from '@/components/ui/core/NMTable/index';
import { ColumnDef } from '@tanstack/react-table';
import { Eye, Trash } from 'lucide-react';

// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";

import EmptyItems from '@/components/shared/EmptyItems';
import { IRentalRequest } from '@/types';

const ManageLandListingReq = ({ requests }: { requests: IRentalRequest[] }) => {
  // const router = useRouter();
 

  const handleView = (id: string) => {
    console.log('Viewing product:', id);
  };

  const handleDelete = (productId: string) => {
    console.log('Deleting product with ID:', productId);
  };

  const columns: ColumnDef<IRentalRequest>[] = [
    {
      accessorKey: 'location',
      header: 'Location',
      cell: ({ row }) => <span>{row.original.listingId.location}</span>,
    },
    {
      accessorKey: 'name',
      header: 'Listing Name',
      cell: ({ row }) => <span>{row.original.listingId.name}</span>,
    },
    {
      accessorKey: 'status',
      header: 'Request Status',
      cell: ({ row }) => <span>{row.original.status}</span>,
    },
    {
      accessorKey: 'rentAmount',
      header: 'Rent Amount',
      cell: ({ row }) => <span>{row.original.listingId.rentAmount}</span>,
    },

    {
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <button
            className="text-gray-500 hover:text-blue-500"
            title="View"
            onClick={() => handleView(row.original._id)}
          >
            <Eye className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-red-500"
            title="Delete"
            onClick={() => handleDelete(row.original._id)}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold mb-4">My Rent Request</h1>

        {requests?.length === 0 && <EmptyItems title="Rent Request" />}
      </div>
      <NMTable columns={columns} data={requests || []} />
    </div>
  );
};

export default ManageLandListingReq;
