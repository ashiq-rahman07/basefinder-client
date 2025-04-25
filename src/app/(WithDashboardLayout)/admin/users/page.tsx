
import ManageUsers from '@/components/modules/dashboard/admin/user';
import { getAllUser } from '@/services/AuthService';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin User Management',
};
export const dynamic = 'force-dynamic';
export default async function UserManagement() {
  const usersData = await getAllUser();
  const { result: users } = usersData;



  return (
    <div>
      <ManageUsers users={users} />
      {/* <DataTable columns={columns} data={users} /> */}
    </div>
  );
}
