"use client"

import { useEffect, useState } from 'react';
import { BellRing } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useUser } from '@/context/UserContext';
import Spinner from '@/components/shared/Spinner';
import { deleteAllNotification, deleteNotification, getMyNotification, markAllAsRead} from '@/services/Notification';
import { toast } from 'sonner';
import Link from 'next/link';




interface INotification {
    _id: string;
  senderId: string;
  recipientId: string;
  role: 'admin' | 'landlord' | 'tenant';
  type: 'REQUEST_SUBMITTED' | 'REQUEST_APPROVED' | 'PAYMENT_COMPLETED';
  message: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;


}
const NotificationPage = () => {
  const { user } = useUser();
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const [loading, setLoading] = useState(true);

console.log(notifications);

const fetchNotifications = async () => {
  try {
    const  data = await getMyNotification();
    if(data.success){
      setNotifications(data.data);
      setLoading(false)
    }
    
  } catch (error) {
    console.error('Failed to fetch notifications', error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
   
    fetchNotifications()

  }, []);


  const handleMarkAllAsRead = async () => {
    try {
      const res = await markAllAsRead(); // your API call
      if (res.success) {
        toast.success('update Notification')
        fetchNotifications(); // refresh notifications
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

const handleDeleteNotification = async (id:string) => {
  if (window.confirm('Are you sure you want to delete all notifications?')){
    try {
      const res = await deleteNotification(id);
      if (res.success) {
        setNotifications((prev) => prev.filter((n) => n._id !== id));
        toast.success('Deleted Notification Succesfully')
      }
    } catch (err:any) {
      toast.error('Something Wrong,Delete failed ',err.message)
      console.error('Delete failed', err);
    }
  }
  
}

const handleDeleteAllNotifications = async () => {
  if (window.confirm('Are you sure you want to delete all notifications?')){
    try {
      const res = await deleteAllNotification(); // new service
      if (res.success) {
        toast.success('All notifications deleted');
        setNotifications([]); 
      }
    } catch (error: any) {
      toast.error('Failed to delete notifications');
      console.error(error.message);
    }
  }

};
  if (loading) return <Spinner />;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <BellRing className="text-orange-500" /> Notifications
        </h2>
        {notifications.length > 0 && (
          <div className='flex gap-4 items-center'>
               <Button onClick={handleMarkAllAsRead} variant="outline" className="text-sm">
                  Mark All as Read
                </Button>

                    <Button
                      onClick={handleDeleteAllNotifications}
                      variant="destructive"
                      className="text-sm"
                      size={'sm'}
                    >
                      Delete All
                    </Button>
          </div>
         
        )}
      </div>

      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications to display.</p>
      ) : (
        <div className="space-y-4">
          {notifications.map((notif) => (
            <Card key={notif._id} className={`${notif.isRead ? 'bg-white' : 'bg-yellow-50'} border border-gray-200`}>
              <CardContent className="p-4 space-y-1">
                <div className="text-gray-800 font-medium">{notif.message}</div>
                <div className="text-xs text-gray-500">
                  {formatDistanceToNow(new Date(notif.createdAt), { addSuffix: true })}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between items-center">
                {user?.role === 'landlord' && (
                  <Link href="/landlord/my-listing-request">
                    <Button variant="link">View Request</Button>
                  </Link>
                )}
                {user?.role === 'tenant' && (
                  <Link href="/tenant/my-request">
                    <Button variant="link">View Request</Button>
                  </Link>
                )}
                {user?.role === 'admin' && (
                  <Link href="/admin/dashboard">
                    <Button variant="link">Go to Dashboard</Button>
                  </Link>
                )}
                <Button
                  variant="destructive"
                  onClick={()=>handleDeleteNotification(notif._id)}
                >
                  Delete
                </Button>
              </CardFooter>

            </Card>
          ))}

        </div>
      )}
    </div>
  );
};

export default NotificationPage;
