'use client';
import {  DollarSign } from 'lucide-react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const dummyRevenueData = [
    { month: 'Jan', revenue: 40000 },
    { month: 'Feb', revenue: 30000 },
    { month: 'Mar', revenue: 50000 },
    { month: 'Apr', revenue: 65000 },
    { month: 'May', revenue: 60000 },
  ];
const IndexSection = () => {
  return (
   <div>
     <section className="bg-white rounded-2xl shadow-md p-6">
    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
      <DollarSign className="text-green-600" />
      Monthly Rental Revenue
    </h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={dummyRevenueData}>
        <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} />
        <CartesianGrid stroke="#f0f0f0" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  </section>

  {/* Summary / CTA Section */}
  <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-2xl p-6 shadow-md">
      <h3 className="text-lg font-semibold mb-2">💡 Tip</h3>
      <p className="text-gray-700">
        Stay on top of requests and monitor payment status for smooth operations. Consider reviewing the tenant list weekly.
      </p>
    </div>
    <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-center items-start">
      <h3 className="text-xl font-bold mb-2">💼 Admin Tasks Summary</h3>
      <ul className="text-gray-600 space-y-1 list-disc list-inside">
        <li>Verify recent listing submissions</li>
        <li>Approve or reject rental requests</li>
        <li>Respond to tenant inquiries</li>
      </ul>
    </div>
  </section>
   </div>
  )
}

export default IndexSection