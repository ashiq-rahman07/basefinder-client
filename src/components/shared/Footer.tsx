// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/logo.svg" alt="BasaFinder Logo" width={40} height={40} />
            <h2 className="text-xl font-semibold text-white">House Solutions</h2>
          </div>
          <p>Your smart rental housing solution for easy property search and tenant connection.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-green-400">Home</Link></li>
            <li><Link href="/listings" className="hover:text-green-400">Listings</Link></li>
            <li><Link href="/about" className="hover:text-green-400">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>

        {/* Explore Types */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Property Types</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400">Condos</a></li>
            <li><a href="#" className="hover:text-green-400">Apartments</a></li>
            <li><a href="#" className="hover:text-green-400">Duplex</a></li>
            <li><a href="#" className="hover:text-green-400">Furnished</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: support@basafinder.com</p>
          <p className="text-sm mt-1">Phone: +1 (123) 456-7890</p>
          <div className="flex mt-4 space-x-4">
            <a href="#"><Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} /></a>
            <a href="#"><Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} /></a>
            <a href="#"><Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-center">
        © {new Date().getFullYear()} BasaFinder. All rights reserved.
      </div>
    </footer>
  );
}
