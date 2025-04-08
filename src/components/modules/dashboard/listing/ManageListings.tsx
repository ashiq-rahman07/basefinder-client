"use client";

import { NMTable } from "@/components/ui/core/NMTable/index";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IListing } from "@/types/listing";
import EmptyItems from "@/components/shared/EmptyItems";
import { deleteListing } from "@/services/listing";

const ManageListings = ({ listings }: { listings: IListing[] }) => {
  const router = useRouter();

  const handleView = (id:string) => {
    console.log("Viewing product:", id);
  };

  const handleDelete = async(productId: string) => {
    console.log("Deleting product with ID:", productId);
    try {
      const{data} = await deleteListing(productId)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns: ColumnDef<IListing>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.images[0]}
            alt={row.original.location}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }) => <span>{row.original.location}</span>,
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => <span>{row.original.category.name}</span>,
    },
    {
      accessorKey: "landlordUser",
      header: "Landlord User",
      cell: ({ row }) => <span>{row.original.landlordUser.name}</span>,
    },
    {
      accessorKey: "rentAmount",
      header: "Rent Amount",
      cell: ({ row }) => <span>{row.original.rentAmount}</span>,
    },
    {
      accessorKey: "bedrooms",
      header: "Total Bedrooms",
      cell: ({ row }) => <span>{row.original.bedrooms}</span>,
    },
  
    {
      accessorKey: "isAvailable",
      header: () => <div>Available</div>,
      cell: ({ row }) => (
        <div>
          {row.original.isAvailable? (
            <p className="text-green-500 border bg-green-100 w-14 text-center px-1 rounded">
              True
            </p>
          ) : (
            <p className="text-red-500 border bg-red-100 w-14 text-center px-1 rounded">
              False
            </p>
          )}
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: "Action",
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
            className="text-gray-500 hover:text-green-500"
            title="Edit"
            onClick={() =>
              router.push(
                `/listing/update-listing/${row.original._id}`
              )
            }
          >
            <Edit className="w-5 h-5" />
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
   
        <h1 className="text-xl font-bold">Manage Listing</h1>
    
         
       { 
        listings.length === 0 && <EmptyItems title="Listings"/>
       }
    
   
        
        <div className="flex items-center gap-2 pb-2">
          <Button
            onClick={() => router.push("/listing/add-listing")}
            size="sm"
          >
            Add Listing <Plus />
          </Button>
        </div>
      </div>
      <NMTable columns={columns} data={listings || []} />
    </div>
  );
};

export default ManageListings;