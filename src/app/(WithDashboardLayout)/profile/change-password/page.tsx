'use client';
import { useState } from 'react';

import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { changePassword, logout } from '@/services/AuthService';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ChangePasswordPage() {
  //   const [currentPassword, setCurrentPassword] = useState('');
  //   const [newPassword, setNewPassword] = useState('');
  //   const [confirmPassword, setConfirmPassword] = useState('');
  //   const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  //   if (success) {
  //     redirect('/login');
  //   }

  const form = useForm();

  const {
    formState: { isSubmitting },
  } = form;

  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();

  //     if (newPassword !== confirmPassword) {
  //       setError("Passwords don't match");
  //       return;
  //     }

  //     try {
  //       const response = await fetch('/api/auth/change-password', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ currentPassword, newPassword }),
  //       });

  //       const data = await response.json();

  //       if (response.ok) {
  //         setSuccess(true);
  //         setError('');
  //       } else {
  //         setError(data.message || 'Password change failed');
  //       }
  //     } catch (err) {
  //       setError('An error occurred');
  //     }
  //   };

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
        setSuccess(true);
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
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Change Password</h1>

      {success ? (
        <div className="bg-green-100 text-green-800 p-4 rounded">
          Password changed successfully!
        </div>
      ) : (
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
              {isSubmitting ? 'Registering....' : 'Register'}
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}
