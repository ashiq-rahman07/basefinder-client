import { Eye } from 'lucide-react';

const LandlordPage = () => {
  const listings = [
    { title: 'Luxury Apartment', status: 'Available', requests: 3 },
    { title: 'Modern Condo', status: 'Occupied', requests: 1 },
    { title: 'Cozy Studio', status: 'Available', requests: 0 },
  ];
  return (
    <main className="flex-1 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome Back, Landlord!
        </h1>
        <p className="text-gray-500">
          Manage your properties and view tenant requests.
        </p>
      </header>

      {/* Properties Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Your Listings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {listing.title}
              </h3>
              <p className="text-sm text-gray-500">Status: {listing.status}</p>
              <p className="text-sm text-gray-500">
                Requests: {listing.requests}
              </p>
              <button className="mt-4 flex items-center gap-2 text-sm text-blue-600 hover:underline">
                <Eye size={18} /> View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Add Listing CTA */}
      <section className="mt-10">
        <div className="bg-gradient-to-r from-green-500 to-green-900 text-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Want to add a new property?</h3>
            <p className="text-sm text-white/80">
              List your new apartment, house, or studio now!
            </p>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 bg-white text-blue-600 font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-100"
          >
            + Add Listing
          </a>
        </div>
      </section>
    </main>
  );
};

export default LandlordPage;
