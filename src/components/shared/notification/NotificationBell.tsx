'use client';

import { Bell } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useUser } from '@/context/UserContext';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { getMyNotification } from '@/services/Notification';

const NotificationBell = () => {
  const { user } = useUser();
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  const unreadCount = notifications.filter((n: any) => !n.isRead).length;

  useEffect(() => {
    const fetchNotifications = async () => {
      if (!user) return;
      const data = await getMyNotification()
      setNotifications(data || []);
    };
    fetchNotifications();
  }, [user]);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 hover:bg-gray-100 rounded-full"
      >
        <Bell className="w-6 h-6 text-gray-700" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg z-50">
          <div className="p-4 border-b font-semibold text-gray-800">
            Notifications
          </div>
          <ul className="max-h-60 overflow-y-auto">
            {notifications.length === 0 && (
              <li className="p-4 text-sm text-gray-500 text-center">
                No notifications.
              </li>
            )}
            {notifications.map((notif: any) => (
              <li
                key={notif._id}
                className={`px-4 py-2 text-sm border-b hover:bg-gray-50 ${
                  notif.isRead ? 'text-gray-600' : 'text-gray-800 font-semibold'
                }`}
              >
                <div>{notif.message}</div>
                <div className="text-xs text-gray-400">
                  {formatDistanceToNow(new Date(notif.createdAt), {
                    addSuffix: true,
                  })}
                </div>
              </li>
            ))}
          </ul>
          <div className="p-2 text-center">
            <Link
              href="/notification"
              className="text-sm text-primary hover:underline"
            >
              View All Notifications
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
