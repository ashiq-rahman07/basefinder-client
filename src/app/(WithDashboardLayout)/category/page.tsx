

import ManageCategories from '@/components/modules/dashboard/listing/category/ManageCategories';
import { getAllCategoriesUser } from '@/services/Category';

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
