"use client";
import CreateCategoryModal from '@/components/modules/shop/category/CreateCategoryModal'
import { Button } from '@/components/ui/button'
import { NMTable } from '@/components/ui/core/NMTable'
import { IUser } from '@/types'
import { ColumnDef } from '@tanstack/react-table'
import { Trash } from 'lucide-react';
import React from 'react'


type TUsersProps = {
  users: IUser[];
}
const ManageUsers = ({ users }: TUsersProps) => {
 const handleDelete = (data: IUser) => {
    console.log(data);
  };
     const columns: ColumnDef<IUser>[] = [
        {
          accessorKey: "name",
          header: "Name",
        },
        {
          accessorKey: "email",
          header: "Email",
        },
        {
          accessorKey: "role",
          header: "Role",
        },
        {
          accessorKey: "isActive",
          header: "Status",
          cell: ({ row }) => (row.getValue("isActive") ? "Active" : "Inactive"),
        },
        {
          id: "actions",
          cell: ({ row }) => (
            <Button variant="ghost" onClick={() => console.log(row.original)}>
              Edit
            </Button>
          ),
        },
        {
            accessorKey: "action",
            header: () => <div>Action</div>,
            cell: ({ row }) => (
              <button
                className="text-red-500"
                title="Delete"
                onClick={() => handleDelete(row.original)}
              >
                <Trash className="w-5 h-5" />
              </button>
            ),
          },
      ]
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage Categories</h1>
        <CreateCategoryModal />
      </div>
      <NMTable data={users} columns={columns} />
    </div>
  )
}

export default ManageUsers