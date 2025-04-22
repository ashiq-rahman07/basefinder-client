'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useUser } from '@/context/UserContext';
import { updateProfile } from '@/services/AuthService';

import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function ProfilePage() {
  const { user } = useUser();

  const [editMode, setEditMode] = useState(false);

  const form = useForm({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    console.log(data);
    try {
      const res = await updateProfile(data);
      console.log(res, 'result');
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Profile</h1>

      {editMode ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex justify-between items-center border-t border-b py-3 my-5">
              <p className="text-primary font-bold text-xl">
                Update Profile Information
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ''} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        value={field.value || ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="mt-5 w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Updating Profile ' : 'Update Profile'}
            </Button>
          </form>
          <Button onClick={() => setEditMode(false)}>View Profile</Button>
        </Form>
      ) : (
        <div className="space-y-4">
          <div>
            <h2 className="font-medium">Name</h2>
            <p>{user?.name}</p>
          </div>

          <div>
            <h2 className="font-medium">Email</h2>
            <p>{user?.email}</p>
          </div>

          <div className="flex gap-2 mt-6">
            <button
              onClick={() => setEditMode(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Edit Profile
            </button>
            <a
              href="/profile/change-password"
              className="px-4 py-2 border rounded"
            >
              Change Password
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
