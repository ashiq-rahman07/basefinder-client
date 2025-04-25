'use client'; // Required for interactivity (e.g., useState)

import { useState } from 'react';
import Link from 'next/link';

import {  Menu } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/assets/logonew.png';

import DropDown from './DropDown';
import NotificationDropdown from './notification/Notification';
import MobileMenu from './MobileMenu';
// import { useUser } from '@/context/UserContext';
// import { Button } from '../ui/button';
// import { logout } from '@/services/AuthService';


export default function Navbar() {
  // const { user, isLoading} = useUser();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* <nav className=""> */}
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center   py-2 ">
        {/* Logo */}

        <Link href="/" className="">
          <Image src={Logo} alt="house" width={100} height={100} className="" />
        </Link>
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-slate-700 hover:text-emerald-500">
            Home
          </Link>
          <Link
            href="/listings"
            className="text-slate-700 hover:text-emerald-500"
          >
            Listings
          </Link>
          <Link href="/about" className="text-slate-700 hover:text-emerald-500">
            About
          </Link>
          <Link
            href="/contact"
            className="text-slate-700 hover:text-emerald-500"
          >
            Contact
          </Link>
        </div>

        {/* Authentication Menu */}
      <div className='flex gap-2 justify-center items-center'>
      <DropDown />
      {<NotificationDropdown/>}
      <button onClick={toggleMenu} className="md:hidden p-2">
          <Menu className="h-6 w-6" />
        </button>
      </div>
       

        {/* Mobile Menu Toggle */}
      
      </div>
      { isMenuOpen &&
        <MobileMenu/>
        }
      {/* </nav> */}
    </header>
  );
}
