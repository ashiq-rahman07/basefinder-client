// import { columns } from "@/components/UserColumns";
// import { DataTable } from "@/components/DataTable";
// import { User } from "@/types";

import ManageUsers from '@/components/modules/dashboard/admin/user';
import { getAllUser } from '@/services/AuthService';
// import { DataTable } from "@/components/modules/dashboard/admin/user/DataTable";
// import { columns } from "@/components/modules/dashboard/admin/user/UserColumns";
// import { IUser } from "@/types";

// type IUseresponse = {
//     data:
// }
// async function getUsers() {
//     // Fetch users from your API

//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/allusers`);
//     const data =  await res.json();
//     return data.data.result;

//   }
export default async function UserManagement() {
  const usersData = await getAllUser();
  const { result: users, meta } = usersData;
  console.log(meta);
  // console.log(users)
  // const users:Partial<IUser[]> = [
  //     {
  //         userId: "12345456667767",
  //         name: "Ask1",
  //         email: "ask@gmail.com",
  //         isActive: true,
  //         role: "landlord"
  //     },
  //     {
  //         userId: "12345456667dfhdfh5",
  //         name: "Tenant1",
  //         email: "ask@gmail.com",
  //         isActive: true,
  //         role: "tenant",
  //     },
  //     {
  //         userId: "1234545fgch556667dfhdfh5",
  //         name: "Tenant4",
  //         email: "ask@gmail.com",
  //         isActive: true,
  //         role: "tenant",
  //     }
  // ]

  return (
    <div>
      <ManageUsers users={users} />
      {/* <DataTable columns={columns} data={users} /> */}
    </div>
  );
}
