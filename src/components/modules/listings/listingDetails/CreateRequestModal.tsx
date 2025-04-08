"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { addDays, format } from "date-fns"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

// import { submitListing } from "@/services/Rental Request";
import { CalendarIcon } from "lucide-react";


import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { submitListing } from "@/services/Rental Request";
import { toast } from "sonner";
// import { toast } from "sonner";

type modalProps={
    listingId:string
}

const CreateRequestModal: React.FC<modalProps> = ({listingId}) => {
  
  console.log(listingId);

  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;

    // Disable all dates before tomorrow
    const isDateDisabled = (date: Date) => {
        const today = new Date();
        const tomorrow = addDays(today, 1); // Tomorrow's date
        return date < tomorrow; // Disable if date is before tomorrow
      };
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
// console.log(data);
const requestFormData = {
  status:"Pending",
  listingId:listingId,
  moveDate:data.moveDate,
  rentDuration:data.rentDuration,
  message:data.message 
}
console.log(requestFormData);
try {
  const res = await submitListing(requestFormData);

  if (res.success) {
   
    toast.success(res.message);
    
    
  } else {
    console.log(res)
    toast.error(res.message);
  }
} catch (err: any) {
  console.error(err);
}
  };

  return (
    <Dialog>
      <DialogTrigger asChild  >
        <Button>Rent Request</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request For Rent</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
           
            <FormField
          control={form.control}
          name="moveDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Move in date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'MMMM d, yyyy')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={isDateDisabled} 
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            
              <FormMessage />
            </FormItem>
          )}
        />
            <FormField
              control={form.control}
              name="rentDuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rent Duration</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
           
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-36 w-72"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

           
          

            <Button type="submit" className="mt-5 w-full">
              {isSubmitting ? "Requesting...." : "Request"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRequestModal;