// import Category from "@/components/modules/home/Category";
// import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
// import HeroSection from "@/components/modules/home/HeroSection";
// import { ListingCard } from "@/components/modules/home/FeaturedListing/ListingCard";

import CallToAction from "@/components/modules/home/CallToAction";
import FeaturedSection from "@/components/modules/home/FeaturedListing";
import HeroSection from "@/components/modules/home/HeroSection";
import { PropertyTypeSection } from "@/components/modules/home/PropertyTypeSection/PropertyTypeSection";
import Testimonials from "@/components/modules/home/Testimonials";
import WhyChooseUs from "@/components/modules/home/WhyChooseUs";

const HomePage = () => {
  return (
      <>
    
      <HeroSection/>
      <PropertyTypeSection/>
   
    
      <FeaturedSection/>
      <WhyChooseUs/>
      <Testimonials/>

      <CallToAction/>
      </>
 
  );
};

export default HomePage;