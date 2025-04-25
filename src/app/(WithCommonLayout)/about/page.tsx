import AboutPageSection from '@/components/modules/about/AboutPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
};
const AboutPage = () => {
  return (
    <>
      <AboutPageSection />
    </>
  );
};

export default AboutPage;
