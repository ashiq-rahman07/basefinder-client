import AddListingsForm from '@/components/modules/dashboard/listing/AddListingsForm';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Add listing',
};
const AddListingPage = () => {
  return (
    <div className="flex items-center justify-center">
      <AddListingsForm />
    </div>
  );
};

export default AddListingPage;
