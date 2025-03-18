'use client'

import EmptyItems from "@/components/shared/EmptyItems";


import { Button } from "@/components/ui/button";
import { NMTable } from "@/components/ui/core/NMTable";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import {  updateRequestData } from "@/services/Rental Request";
import { IRentalRequest } from "@/types";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import {  useState } from "react";
import { toast } from "sonner";

const ManageLandReq =({ requests }: { requests: IRentalRequest[] }) => {
  
    const [phoneNumber, setPhoneNumber] = useState(''); 
    const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<'Pending' | 'Approved' | 'Rejected' | null>(null);

    const updateStatus = async (requestId: string, status: 'Pending' | 'Approved' | 'Rejected') => {
      try {
        const updateData: { status: string; landlordPhone?: string } = { status };
  
      
        if (status === 'Approved' && phoneNumber) {
          updateData.landlordPhone = phoneNumber;
        }
  
    console.log(updateData);
  
  const updateResult = await updateRequestData(requestId,updateData)
        const {  data:updatedData } = updateResult;
        const {success} = updatedData
  
        if (success) {
         
          toast.success('Status updated successfully!');
          setPhoneNumber(''); 
          setSelectedRequestId(null); 
        } else {
          toast.error('Failed to update status.');
        }
      } catch (error) {
        console.error('Error updating status:', error);
        toast.error('An error occurred while updating the status.');
      }

      
    };

 const columns: ColumnDef<IRentalRequest>[] = [
 
  {
    accessorKey: "Tenant name",
    header: "Tenant Name",
    cell: ({ row }) => <span>{row.original.tenantId.name}</span>,
  },
  {
    accessorKey: "Listing name",
    header: "Listing Name",
    cell: ({ row }) => <span>{row.original.listingId.name}</span>,
  },

  {
    accessorKey: "status",
    header: "Request Status",
    cell: ({ row }) => <span>{row.original.status}</span>,
  },

 
  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => {
      const request = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Update Status</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-200 px-4">
            <DropdownMenuItem className="w-full"     onClick={() => {
                        setSelectedRequestId(request._id);
                        setSelectedStatus('Pending');
                        updateStatus(request._id, 'Pending'); // Update status immediately
                      }}>
              Pending
            </DropdownMenuItem>
            <DropdownMenuItem className="w-full"   onClick={() => {
                        setSelectedRequestId(request._id);
                        setSelectedStatus('Approved');
                      }}>
              Approved
            </DropdownMenuItem>
            <DropdownMenuItem className="w-full"   onClick={() => {
                        setSelectedRequestId(request._id);
                        setSelectedStatus('Rejected');
                        updateStatus(request._id, 'Rejected'); // Update status immediately
                      }}>
              Rejected
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  }
];

 
 
 
 
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="p-6">
    
    <div className="flex items-center justify-between">
   
        <h1 className="text-xl font-bold">MRental Requests</h1>
    
         
       { 
        requests.length === 0 && <EmptyItems title="Listings"/>
       }
    
   
        
      
      </div>
<NMTable columns={columns} data={requests || []} />
    {/* Phone Number Input for Approved Status */}
    {selectedRequestId && selectedStatus === 'Approved' && (
      <div className="mt-4">
        <Input
          type="text"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          
        />
        <Button
          className="mt-2"
          onClick={() => updateStatus(selectedRequestId, 'Approved')}
        >
          Submit
        </Button>
      </div>
    )}
  </div>
  );
};

export default ManageLandReq;