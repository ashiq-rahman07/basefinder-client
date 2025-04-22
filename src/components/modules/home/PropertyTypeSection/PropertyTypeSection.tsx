import { getAllCategories } from '@/services/Category';
import { ICategory } from '@/types';

export const PropertyTypeSection = async () => {
  const { data: categories } = await getAllCategories();

  return (
    <div className="container  mx-auto px-4 pt-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        Explore Property Types
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {categories?.map((category: ICategory) => (
          <div
            key={category.name}
            className="relative h-32 rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${category?.icon})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{category?.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
