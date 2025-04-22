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
import {
  FieldValues,
  //   SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';

// import { Plus } from "lucide-react";
import Logo from '@/assets/logonew.png';

// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// import { useUser } from "@/context/UserContext";
import Image from 'next/image';
import { IUser } from '@/types';
// import { toast } from "sonner";
// import { submitListing } from "@/services/Rental Request";
// interface IRentalRequest{
//   name:string;
//   email:string;
//   message: string
// }
interface RentalRequestFormProps {
  onSubmit: (data: FieldValues) => Promise<void>;
  userInfo: {
    user: IUser | null;
    isLoading: boolean;
  };
}

const RentalRequestForm: React.FC<RentalRequestFormProps> = ({
  onSubmit,
  userInfo,
}) => {
  //   const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: userInfo.user?.name || '',
      email: userInfo.user?.email || '',
      message: '',
    },
  });

  if (userInfo.isLoading) {
    return <div>Loading.....</div>;
  }

  const {
    formState: { isSubmitting },
  } = form;

  //   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  // // console.log(data)
  // const requestData = {
  //     listingId,
  //     message:data.message
  // }


  return (
    <div className="border-2 border-gray-300 rounded-xl h-[600px] flex-grow max-w-2xl p-5 ">
      <div className="flex items-center space-x-4 mb-5 ">
        <Image src={Logo} width={100} height={100} alt="logo" />

        <h1 className="text-xl font-bold">Request Submit</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center border-t border-b py-3 my-5">
            <p className="text-primary font-bold text-xl">
              Request Information
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
                    <Input {...field} value={field.value || ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="my-5">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-36 resize-none"
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="mt-2 md:mt-16  w-full">
            {isSubmitting ? 'Submit Requesting.....' : 'Submit Request'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RentalRequestForm;
