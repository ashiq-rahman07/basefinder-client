export interface IUser {
  _id: string;
  name: string;
  email: string;
  isActive?: boolean;
  role: 'landlord' | 'admin' | 'tenant';
  iat?: number;
  exp?: number;
}
