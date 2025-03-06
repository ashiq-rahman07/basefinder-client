"use client";
import { ColumnDef } from "@tanstack/react-table";
// import { User } from "@/types";
import { Button } from "@/components/ui/button";
// import { ArrowUpDown } from "lucide-react";
import { IUser } from "@/types";

// type TColum = Partial<IUser>
export const columns: ColumnDef<IUser>[] = [
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
];