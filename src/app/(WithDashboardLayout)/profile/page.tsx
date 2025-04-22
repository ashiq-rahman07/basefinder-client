'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { User2Icon } from 'lucide-react';
import UserUpdateModal from '@/components/modules/auth/UserUpdateModal';
// import { useUser } from '@/context/UserContext';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { changePassword, getProfile, logout } from '@/services/AuthService';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IUser } from '@/types';

const ProfilePage = () => {
  // const {user}= useUser()
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<IUser | undefined>();
  const router = useRouter();
  const form = useForm();

  const loadUser = async () => {
    try {
      const userData = await getProfile();
      const data = userData?.data;
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadUser();
  }, []);

  console.log(userData);
  const {
    formState: { isSubmitting },
  } = form;
  const newPassword = form.watch('newPassword');
  const passwordConfirm = form.watch('passwordConfirm');

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    // console.log(data)
    const modifyPass = {
      oldPassword: data.currentPassword,
      newPassword: data.passwordConfirm,
    };
    try {
      const res = await changePassword(modifyPass);
      console.log(res, 'result');
      if (res?.success) {
        toast.success(res?.message);
        await logout();
        router.push('/login');
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };
  if (loading) return <div>Loading...</div>;
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Profile Info */}
      <Card className="p-6 shadow-xl rounded-2xl">
        <CardContent className="flex flex-col md:flex-row items-center gap-6">
          <User2Icon />
          <div className="text-center md:text-left space-y-1">
            <h2 className="text-2xl font-bold">{userData?.name}</h2>
            <p className="text-gray-500">{userData?.email}</p>
            <p className="text-sm text-gray-600">Role: {userData?.role}</p>
            <p className="text-sm text-gray-600">Phone: +880170000000</p>
            {/* <Button className="mt-2">Edit Profile</Button> */}
            <UserUpdateModal data={userData} />
          </div>
        </CardContent>
      </Card>

      {/* Change Password */}
      <Card className="p-6 shadow-xl rounded-2xl">
        <h3 className="text-xl font-semibold mb-4">Change Password</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>

                  {passwordConfirm && newPassword !== passwordConfirm ? (
                    <FormMessage> Password does not match </FormMessage>
                  ) : (
                    <FormMessage />
                  )}
                </FormItem>
              )}
            />

            <Button
              disabled={!!(passwordConfirm && newPassword !== passwordConfirm)}
              type="submit"
              className="mt-5 w-full"
            >
              {isSubmitting ? 'Password Updating....' : 'Updagte'}
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default ProfilePage;
