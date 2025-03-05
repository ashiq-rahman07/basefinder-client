import ManageBrands from "@/components/modules/shop/brand";
import { getAllBrands } from "@/services/Brand";

const ProductBrandPage = async () => {
//   const { data, meta } = await getAllBrands();
  const { data } = await getAllBrands();
  return (
    <div>
      <ManageBrands brands={data} />
    </div>
  );
};

export default ProductBrandPage;