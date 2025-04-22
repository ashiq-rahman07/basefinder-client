// import ManageCategories from "@/components/modules/shop/category";

import ManageCategories from '@/components/modules/dashboard/listing/category/ManageCategories';
import { getAllCategoriesUser } from '@/services/Category';

const ListingCategoryPage = async () => {
  //   const { data, meta } = await getAllCategories();
  const { data } = await getAllCategoriesUser();
  // const categories = data?.result

  return (
    <div>
      <ManageCategories categories={data?.result} />
    </div>
  );
};

export default ListingCategoryPage;
