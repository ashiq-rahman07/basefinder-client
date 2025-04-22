import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider'; // For price range
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'; // For dropdowns

export default function HeroSection() {
  return (
    <div className="relative h-[550px] flex items-center justify-center">
      {/* Background Image with Blur and Low Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.britannica.com/05/157305-004-53D5D212.jpg')", // Replace with your image path
          filter: 'blur(1px)', // Apply blur
          opacity: '0.6', // Apply low opacity
        }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl text-gray-800 font-bold mb-4">
          Find Your Perfect Rental Home
        </h1>
        <p className="text-lg mb-8">
          Smart housing solutions for landlords and tenants.
        </p>

        {/* Search Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Location Input */}
            <div>
              <Input placeholder="Location" className="w-full" />
            </div>

            {/* Price Range Slider */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Price Range
              </label>
              <Slider defaultValue={[500, 2000]} max={5000} step={100} />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>$500</span>
                <span>$2000</span>
              </div>
            </div>

            {/* Number of Bedrooms Dropdown */}
            <div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Bedroom</SelectItem>
                  <SelectItem value="2">2 Bedrooms</SelectItem>
                  <SelectItem value="3">3 Bedrooms</SelectItem>
                  <SelectItem value="4+">4+ Bedrooms</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <div>
              <Button type="submit" className="w-full">
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
