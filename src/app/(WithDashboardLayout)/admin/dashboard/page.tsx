import { getAllUser } from '@/services/AuthService';
import {  getAllListings } from '@/services/listing';
import { getAllRequest } from '@/services/Rental Request';
import { FileText, Home, User } from 'lucide-react';

const AdminHomePage = async () => {
  const usersData = await getAllUser();
  const userMeta = usersData?.meta || {};
  const listingsData = await getAllListings();
const listingList = listingsData?.data || [];
const requestData = await getAllRequest();
const requestMeta = requestData?.data?.meta || {};
  

  const stats = [
    {
      title: 'Total Users',
      count: userMeta?.total,
      icon: <User className="text-green-600" />,
    },
    {
      title: 'Listings',
      count: listingList.meta?.total,
      icon: <Home className="text-blue-600" />,
    },
    {
      title: 'Requests',
      count: requestMeta?.total,
      icon: <FileText className="text-purple-600" />,
    },
  ];
  return (
    <main className="flex-1 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-500">
          Welcome, Admin! Here&apos;s what&apos;s happening today.
        </p>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 transition hover:shadow-lg"
          >
            <div className="p-3 bg-gray-100 rounded-full">{item.icon}</div>
            <div>
              <h4 className="text-xl font-bold">{item.count}</h4>
              <p className="text-sm text-gray-600">{item.title}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default AdminHomePage;
