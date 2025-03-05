export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">BasaFinder</h3>
            <p className="text-gray-400">Your smart rental housing solution.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Listings</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: support@basafinder.com</p>
            <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
}