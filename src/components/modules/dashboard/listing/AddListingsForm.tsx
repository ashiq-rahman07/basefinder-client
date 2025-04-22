"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  FieldValues,
  SubmitHandler,
   useFieldArray,
   useForm,
} from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import {  useEffect, useState } from "react";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
// import { Plus } from "lucide-react";
import Logo from '@/assets/logonew.png'


import {  ICategory } from "@/types";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getAllCategories } from "@/services/Category";
import { addListing } from "@/services/listing";
import { Plus } from "lucide-react";
import Image from "next/image";

export default function AddListingsForm() {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const [categories, setCategories] = useState<ICategory[] | []>([]);

  const router = useRouter();

  const form = useForm({
    defaultValues: {
      name:"",
      location: "",
      description: "",
      rentAmount: "",
      category: "",
      bedrooms: "",
      bathrooms: "",
      amenities: [{ value: "" }],
    },
  });

  const {
    formState: { isSubmitting },
  } = form;
  const { append: appendAmenities, fields: featureFields } = useFieldArray({
    control: form.control,
    name: "amenities",
  });

  const addAmenities = () => {
    appendAmenities({ value: "" });
  };

  useEffect(() => {
    const fetchData = async () => {
      const [categoriesData] = await Promise.all([
        getAllCategories(),
      
      ]);

      setCategories(categoriesData?.data);
      
    };

    fetchData();
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const addAmenities = data.amenities.map(
      (amenity: { value: string }) => amenity.value
    );

    const modifiedData = {
      ...data,
      amenities:addAmenities,
      rentAmount: parseInt(data.rentAmount),
      bedrooms: parseInt(data.bedrooms),
      bathrooms: parseInt(data.bathrooms),
    
    };
console.log(modifiedData);
    const formData = new FormData();
    formData.append("data", JSON.stringify(modifiedData));

    for (const file of imageFiles) {
      formData.append("images", file);
    }
    try {
      const res = await addListing(formData);


      if (res.success) {
        toast.success(res.message);
        router.push("/listing");
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };
  

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-2xl p-5 ">
      <div className="flex items-center space-x-4 mb-5 ">
      <Image src={Logo} alt="house" width={100} height={100} className=""/>

        <h1 className="text-xl font-bold">Add Listing</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center border-t border-b py-3 my-5">
            <p className="text-primary font-bold text-xl">House Information</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Listing Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category?._id} value={category?._id}>
                          {category?.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rentAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rent Amount</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bedrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Bedrooms</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bathrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Bathrooms</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
          </div>
          <div>
            <div className="flex justify-between items-center border-t border-b py-3 my-5">
              <p className="text-primary font-bold text-xl"> Add Amenities</p>
              <Button
                onClick={addAmenities}
                variant="outline"
                className="size-10"
                type="button"
              >
                <Plus className="text-primary" />
              </Button>
            </div>

            <div className="my-5">
              {featureFields.map((featureField, index) => (
                <div key={featureField.id}>
                  <FormField
                    control={form.control}
                    name={`amenities.${index}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Key Feature {index + 1}</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="my-5">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-36 resize-none"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <div className="flex justify-between items-center border-t border-b py-3 my-5">
              <p className="text-primary font-bold text-xl">Images</p>
            </div>
            <div className="flex gap-4 ">
              <NMImageUploader
                setImageFiles={setImageFiles}
                setImagePreview={setImagePreview}
                label="Upload Image"
                className="w-fit mt-0"
              />
              <ImagePreviewer
                className="flex flex-wrap gap-4"
                setImageFiles={setImageFiles}
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
              />
            </div>
          </div>

          <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
            {isSubmitting ? "Adding Listing....." : "Add Listing"}
          </Button>

        </form>
      </Form>
    </div>
  );
}