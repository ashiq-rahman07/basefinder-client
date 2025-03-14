"use client"; // Required for interactivity (e.g., useState)

import { useState } from "react";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import Logo from '@/assets/logonew.png'
// import logoSvg from '@/assets/logo.svg'
// import { useUser } from "@/context/UserContext";
import DropDown from "./DropDown";
// import Logo2 from "@/assets/svgs/Logo2";

export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
//  const { user,isLoading } = useUser();
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 


  return (
    <header className="bg-white border-b w-full">
      {/* <nav className=""> */}
        <div className="flex justify-between items-center container shadow-md mx-auto h-16 px-6">
          {/* Logo */}
          <div className="flex justify-center items-center gap-4">
          <Link href="/" className="">
            <Image src={Logo} alt="house" width={100} height={100} className=""/>
            
          </Link>
           {/* Desktop Navigation Links */}
           <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/listings" className="text-gray-700 hover:text-blue-600">
              Listings
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>
          </div>
         

        
          {/* Authentication Menu */}
          <DropDown/>
          {/* <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">

                { user?  <>
                  <DropdownMenuItem>
                  <Link href={`/${user?.role}/dashboard`} className="w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={`/${user?.role}/dashboard`} className="w-full">
                    Log Out
                  </Link>
                </DropdownMenuItem>
                </> :       <>
                <DropdownMenuItem>
                  <Link href="/login" className="w-full">
                    Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/register" className="w-full">
                    Register
                  </Link>
                </DropdownMenuItem>
                </>
                }
          
              </DropdownMenuContent>
            </DropdownMenu>
          </div> */}

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden p-2">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="flex flex-col space-y-4 p-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/listings" className="text-gray-700 hover:text-blue-600">
                Listings
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
              <div className="flex flex-col space-y-2">
                <Link href="/login" className="text-gray-700 hover:text-blue-600">
                  Login
                </Link>
                <Link href="/register" className="text-gray-700 hover:text-blue-600">
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      {/* </nav> */}
    </header>
  );
}