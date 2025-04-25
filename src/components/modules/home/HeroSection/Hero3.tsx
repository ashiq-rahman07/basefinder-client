import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Link from 'next/link';
import React from 'react';

const Hero3 = () => {
  return (
    <section
      className="flex flex-col items-center justify-center text-center py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/house1.png')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Find Your Perfect Rental Home
        </h2>
        <p className="text-lg text-center md:text-xl text-gray-200 mb-6 ">
          Smart housing solutions for landlords and tenants.
        </p>
        <div className="bg-gray-600 bg-opacity-40 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Location Input */}
            <div>
              <Input placeholder="Location" className="w-full" />
            </div>

            {/* Price Range Slider */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Price Range
              </label>
              <Slider defaultValue={[500, 2000]} max={5000} step={100} />
              <div className="flex justify-between text-sm text-gray-300 mt-2">
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
              <Link href='/listings'>
              <Button type="submit" className="w-full">
                Search
              </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
