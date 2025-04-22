import React from 'react'

const TenantPage = () => {
  const activeRental = {
    title: "Modern Loft in City Center",
    address: "123 Main Street, NY",
    status: "Active",
    rent: "$1,200/month",
  };

  const requests = [
    { type: "Maintenance", status: "Pending", date: "Apr 10, 2025" },
    { type: "Move-out Notice", status: "Reviewed", date: "Mar 25, 2025" },
  ];

  return (
    <main className="flex-1 p-6">
    <header className="mb-6">
      <h1 className="text-3xl font-bold text-gray-800">Welcome, Tenant!</h1>
      <p className="text-gray-500">Here’s a quick summary of your rental activity.</p>
    </header>

    {/* Active Rental */}
    <section className="bg-white rounded-xl shadow p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Active Rental</h2>
      <div className="space-y-2 text-gray-600">
        <p><strong>Property:</strong> {activeRental.title}</p>
        <p><strong>Address:</strong> {activeRental.address}</p>
        <p><strong>Status:</strong> <span className="text-green-600">{activeRental.status}</span></p>
        <p><strong>Rent:</strong> {activeRental.rent}</p>
      </div>
    </section>

    {/* My Requests */}
    <section>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">My Requests</h2>
      <div className="space-y-4">
        {requests.map((req, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-xl shadow flex items-center justify-between"
          >
            <div>
              <p className="font-medium text-gray-800">{req.type}</p>
              <p className="text-sm text-gray-500">{req.date}</p>
            </div>
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full ${
                req.status === "Pending"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {req.status}
            </span>
          </div>
        ))}
      </div>
    </section>

    {/* Browse CTA */}
    <section className="mt-10">
      <div className="bg-gradient-to-r from-green-500 to-green-800 text-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">Looking for another place?</h3>
          <p className="text-sm text-white/80">Explore new listings in your area now!</p>
        </div>
        <a
          href="#"
          className="mt-4 md:mt-0 bg-white text-purple-600 font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-100"
        >
          Browse Listings
        </a>
      </div>
    </section>
  </main>
  )
}

export default TenantPage;