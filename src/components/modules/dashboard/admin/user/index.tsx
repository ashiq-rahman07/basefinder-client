"use client";

import { Button } from '@/components/ui/button'
import { NMTable } from '@/components/ui/core/NMTable'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { deletedUser, updateUserStatus } from '@/services/AuthService';
import { IUser } from '@/types'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontalIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'sonner';


type TUsersProps = {
  users: IUser[];
}
const ManageUsers = ({ users }: TUsersProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
 const handleDelete = async(userId:string) => {
    try {
      const confirm = window.confirm("Are you sure? This will delete the user, their listings, and requests.");
      if (!confirm) return;
      const res = await deletedUser(userId);
      if(res.success){
        toast.success('User Deleted Succesfully')
        router.refresh()
      }
    } catch (error:any) {
      toast.error(error.message)
    }
  };

  const handleStatusChange = async (userId: string, newStatus: boolean) => {
   
    try {
      setLoading(true);
      const res = await updateUserStatus(userId);
      if (res.success) {
        toast.success(`User is now ${newStatus ? 'Active' : 'Inactive'}`);
        router.refresh()
      } else {
        toast.error('Failed to update user status');
      }
    } catch (err:any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };


    //  const columns: ColumnDef<IUser>[] = [
    //     {
    //       accessorKey: "name",
    //       header: "Name",
    //     },
    //     {
    //       accessorKey: "email",
    //       header: "Email",
    //     },
    //     {
    //       accessorKey: "role",
    //       header: "Role",
    //     },
    //     {
    //       accessorKey: "isActive",
    //       header: "Status",
    //       cell: ({ row }) => (row.getValue("isActive") ? "Active" : "Inactive"),
    //     },
    //     {
    //       id: "actions",
    //       cell: ({ row }) => (
    //         <Button variant="ghost" onClick={() => console.log(row.original._id)}>
    //           Edit
    //         </Button>
    //       ),
    //     },
    //     {
    //         accessorKey: "action",
    //         header: () => <div>Action</div>,
    //         cell: ({ row }) => (
    //           <button
    //             className="text-red-500"
    //             title="Delete"
    //             onClick={() => handleDelete(row.original._id)}
    //           >
    //             <Trash className="w-5 h-5" />
    //           </button>
    //         ),
    //       },
    //   ]

    const columns: ColumnDef<IUser>[] = [
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'role',
        header: 'Role',
      },
      {
        accessorKey: 'isActive',
        header: 'Status',
        cell: ({ row }) => (
          <span className={`text-sm font-medium ${row.getValue('isActive') ? 'text-green-600' : 'text-red-500'}`}>
            {row.getValue('isActive') ? 'Active' : 'Inactive'}
          </span>
        ),
      },
      {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => {
          const user = row.original;
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-1 h-auto">
                  <MoreHorizontalIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white rounded shadow-sm">
                <DropdownMenuItem onClick={() => handleStatusChange(user._id, !user.isActive)}>
                  {user.isActive ? 'Deactivate' : 'Activate'}
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-500" onClick={() => handleDelete(user._id)}>
                  Delete User
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ];
  if(loading) <p>loding....</p>
  return (
    <div>
      <div className="">
        <h1 className="text-xl font-bold">Manage Users</h1>
      </div>
      <NMTable data={users} columns={columns} />
    </div>
  )
}

export default ManageUsers