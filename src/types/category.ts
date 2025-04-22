export interface ICategory {
  _id: string;
  name: string;
  description: string;
  createdBy: {
    _id: string;
    name: string;
  };
  icon: string;

  createdAt: string;
  updatedAt: string;
}
