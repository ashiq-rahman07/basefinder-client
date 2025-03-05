import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import styles from "./HeroSection.module.css";
// import Image from "next/image";
// import cupImage from "@/assets/cup-with-headphone.png";

const HeroSection = () => {
  return (
    <div className="relative h-[550px] flex items-center justify-center">
    {/* Background Image with Blur and Low Opacity */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://cdn.britannica.com/05/157305-004-53D5D212.jpg')", // Replace with your image path
        filter: "blur(4px)", // Apply blur
        opacity: "0.4", // Apply low opacity
      }}
    ></div>

    {/* Hero Content */}
    <div className="relative z-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Find Your Perfect Rental Home</h1>
      <p className="text-lg mb-8">Smart housing solutions for landlords and tenants.</p>
      <div className="flex justify-center gap-4">
        <Input placeholder="Search for properties..." className="w-96" />
        <Button>Search</Button>
      </div>
    </div>
  </div>
  );
};

export default HeroSection;