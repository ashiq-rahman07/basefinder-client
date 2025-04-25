import { useUser } from '@/context/UserContext';
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button';
import { logout } from '@/services/AuthService';
import { protectedRoutes } from '@/contants';

import { usePathname, useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

const MobileMenu = () => {
    const { user,setIsLoading} = useUser();
      const router = useRouter();
      const pathname = usePathname();
   const handleLogout = () => {
      logout();
      setIsLoading(true);
  
      if (protectedRoutes.some(route => pathname.match(route))) {
        router.push('/');
      }
    };
     
  return (
    <div>
     
        <div className="md:hidden bg-white">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link
              href="/listings"
              className="text-gray-700 hover:text-blue-600"
            >
              Listings
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            {/* <div className="flex flex-col space-y-2">
              <Link href="/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
              <Link
                href="/register"
                className="text-gray-700 hover:text-blue-600"
              >
                Register
              </Link>
            </div> */}
            {user ? (
           
            <div className="flex flex-col space-y-2">
              
                <Link href={`/${user?.role}/dashboard`} className="w-full">
                  Dashboard
                </Link>
            
             
                <Link href='/profile' className="w-full">
                  My Profile
                </Link>
             
              <Button onClick={() => handleLogout()}>
                <LogOut />
                Log Out
              </Button>
              </div>
           
                ) : (
                  <div className="flex flex-col space-y-2">
                  
                      <Link href="/login" className="w-full">
                        Login
                      </Link>
                
                  
                      <Link href="/register" className="w-full">
                        Register
                      </Link>
                
                
                  </div>
                )
            }
        
       </div>
        </div>
     
    </div>
  )
}

export default MobileMenu