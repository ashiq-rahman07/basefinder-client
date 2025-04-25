import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'House Solution 🏡',
  description: 'Smart Rental & Housing Solution',
  icons: {
    icon: '/favicon.png',
  },
}
const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
