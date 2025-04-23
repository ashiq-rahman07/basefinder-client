
import ManageUsers from '@/components/modules/dashboard/admin/user';
import { getAllUser } from '@/services/AuthService';

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
