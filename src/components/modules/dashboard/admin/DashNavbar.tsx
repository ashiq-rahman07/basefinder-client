import { User } from "lucide-react";

export function DashNav() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <User className="h-6 w-6" />
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
}