import { PropertyTypeSection } from '@/components/modules/home/PropertyTypeSection/PropertyTypeSection';
import Testimonials from '@/components/modules/home/Testimonials';
import WhyChooseUs from '@/components/modules/home/WhyChooseUs';
import CallAction from '@/components/modules/home/CallToAction/CallAction';
import Hero3 from '@/components/modules/home/HeroSection/Hero3';
import FeaturedListing from '@/components/modules/home/FeaturedListing/FeaturedListing';

const HomePage = () => {
  return (
    <>
      <Hero3 />
      <PropertyTypeSection />
      <FeaturedListing />
      <WhyChooseUs />
      <Testimonials />
      <CallAction />
    </>
  );
};

export default HomePage;
