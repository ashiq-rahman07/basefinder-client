// import Image from "next/image";

export default function Testimonials() {
  // const testimonials = [
  //   {
  //     name: "John Doe",
  //     role: "Tenant",
  //     comment: "BasaFinder helped me find my dream apartment quickly and easily!",
  //     avatar: "/avatar-1.jpg",
  //   },
  //   {
  //     name: "Jane Smith",
  //     role: "Landlord",
  //     comment: "Listing my property was straightforward, and I found great tenants.",
  //     avatar: "/avatar-2.jpg",
  //   },
  // ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">
          What Our Users Say
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="text-gray-600">
              BasaFinder helped me find my dream apartment quickly and easily!
            </p>
            <p className="text-gray-800 font-medium mt-4">— John Doe, Tenant</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="text-gray-600">
              Listing my property was easy and I found great tenants fast.
            </p>
            <p className="text-gray-800 font-medium mt-4">
              — Jane Smith, Landlord
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
