import Link from 'next/link';
import { Home, Users, List, Settings } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-xl font-bold mb-6">HouseSolution</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              href="/admin"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/users"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <Users className="h-5 w-5" />
              <span>User Management</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/listings"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <List className="h-5 w-5" />
              <span>Rental Listings</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/settings"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
