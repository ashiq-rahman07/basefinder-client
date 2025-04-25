

import ManageCategories from '@/components/modules/dashboard/listing/category/ManageCategories';
import { getAllCategoriesUser } from '@/services/Category';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Category Management',
};
const ListingCategoryPage = async () => {
  
  const { data } = await getAllCategoriesUser();
const categories = data?.result || [];

  return (
    <div>
      <ManageCategories categories={categories} />
    </div>
  );
};

export default ListingCategoryPage;
