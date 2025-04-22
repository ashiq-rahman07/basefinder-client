"use client";
import Link from "next/link";
import {  DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
     } from "../ui/dropdown-menu";
import { useUser } from "@/context/UserContext";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { LogOut, User } from "lucide-react";
import { logout } from "@/services/AuthService";
import { protectedRoutes } from "@/contants";
import { usePathname, useRouter } from "next/navigation";

const DropDown = () => {
    const { user,isLoading,setIsLoading } = useUser();
      const router = useRouter();
      const pathname = usePathname();
      const handleLogout = () => {
        logout();
        setIsLoading(true);
    
        if (protectedRoutes.some((route) => pathname.match(route))) {
          router.push("/");
        }
      };
    if(isLoading){
        return <div>Loading.....</div>
      }
  return (
   
    <div className="hidden md:flex items-center space-x-4">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition">
       {user &&    <User className="h-5 w-5" /> }
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
        <DropdownMenuItem onClick={() => handleLogout()}>
         
          <LogOut />
            Log Out
          
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
  </div>
  )
}

export default DropDown