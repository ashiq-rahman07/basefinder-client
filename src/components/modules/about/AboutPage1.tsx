// app/about/page.tsx
import Image from "next/image";

export default function AboutPage1() {
  return (
    <main className="min-h-screen pt-20">
      {/* Section 1: Intro */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 space-y-10 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-green-700 mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              BasaFinder is a smart rental solution platform helping people find their perfect home or list their property with ease.
              Whether you&apos;re a tenant looking for a cozy apartment or a landlord looking to rent out, we bridge the gap.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/about.avif" // Save image in public folder
              alt="About us"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Our Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-loose">
            We aim to simplify the rental process by providing a seamless experience through transparent listings,
            direct communication, and secure transactions. Our mission is to empower tenants and landlords with tools and trust.
          </p>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">1. Search Listings</h3>
              <p className="text-gray-600">Browse through a wide range of available rental properties with filters that match your needs.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">2. Connect Directly</h3>
              <p className="text-gray-600">Message property owners directly. No middlemen. No confusion.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">3. Secure Transactions</h3>
              <p className="text-gray-600">Choose properties, pay securely, and start living. We make renting simple.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Meet the Team (Optional) */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {/* Replace with dynamic team data if needed */}
            <div>
              <Image src="/ask.jpg" width={100} height={100} alt="Team Member" className="mx-auto rounded-full" />
              <h4 className="mt-4 text-xl font-medium">Ashiqur Rahman</h4>
              <p className="text-sm text-gray-500">Founder & Developer</p>
            </div>
            <div>
              <Image src="/ask.jpg" width={100} height={100} alt="Team Member" className="mx-auto rounded-full" />
              <h4 className="mt-4 text-xl font-medium">Jane Doe</h4>
              <p className="text-sm text-gray-500">Marketing Lead</p>
            </div>
            <div>
              <Image src="/ask.jpg" width={100} height={100} alt="Team Member" className="mx-auto rounded-full" />
              <h4 className="mt-4 text-xl font-medium">John Smith</h4>
              <p className="text-sm text-gray-500">Customer Success</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
