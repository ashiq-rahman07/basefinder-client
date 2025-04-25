import { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { getMyNotification } from '@/services/Notification';

interface Notification {
  _id: string;
  message: string;
  role: 'admin' | 'landlord' | 'tenant';
  type: string;
  isRead: boolean;
  createdAt: string;
}

const NotificationDropdown = () => {
  const { user } = useUser();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data =await getMyNotification()
        
        if (data.success) {
          setNotifications(data.data);
        }
      } catch (err) {
        console.error('Failed to load notifications:', err);
      }
    };

    if (user) fetchNotifications();
  }, [user]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
     {user && <button
        onClick={toggleDropdown}
        className="relative p-2 rounded-full hover:bg-gray-100"
      >
        <Bell className="w-7 h-7  text-orange-500" />
        {notifications.filter((n) => !n.isRead).length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            {notifications.filter((n) => !n.isRead).length}
          </span>
        )}
      </button>}

      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white border border-gray-200 shadow-xl rounded-md z-50 max-h-96 overflow-y-auto">
          <div className="p-4 font-semibold border-b">Notifications</div>
          {notifications.length === 0 ? (
            <div className="p-4 text-gray-500">No notifications found.</div>
          ) : (
            <ul className="divide-y">
              {notifications.map((n) => (
                <li key={n._id} className="p-3 hover:bg-gray-50 text-sm">
                  <div className="font-medium text-gray-800">{n.message}</div>
                  <div className="text-xs text-gray-500">
                    {formatDistanceToNow(new Date(n.createdAt), { addSuffix: true })}
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="p-2 border-t text-center">
            <Link href="/notification" className="text-blue-600 text-sm hover:underline">
              View all
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
