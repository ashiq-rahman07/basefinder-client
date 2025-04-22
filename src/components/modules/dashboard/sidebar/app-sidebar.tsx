"use client";

import * as React from "react";


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {  Home, Users, Settings, PlusCircle, LucideIcon ,FileText,Tags,LayoutDashboard ,ClipboardList} from "lucide-react";
import { NavUser } from "./nav-user";
import Link from "next/link";
import Logo from '@/assets/logonew.png'
import { NavMain2 } from "./sidebar-menuitem";
import { useUser } from "@/context/UserContext";
import Image from "next/image";



interface INavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
  items?:{
    title: string;
    icon: LucideIcon ;
    url: string
  }[],
  roles?: ("admin" | "landlord" | "tenant")[]; // Roles allowed to see this item
}

export const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
   const { user } = useUser();
  
  const navItems: INavItem[] = [
    {
      title: "Dashboard",
      url: `/${user?.role}/dashboard`,
      icon: LayoutDashboard,
      isActive: true,
      roles: ["admin", "landlord", "tenant"], // All roles can see this
    },
    {
      title: "User Management",
      url: "/admin/users",
      icon: Users,
      roles: ["admin"], // Only admin can see this
    },
    {
      title: "Category Management",
      url: '/category',
      icon: Tags,
      roles: ["admin","landlord"], // Only admin can see this
    },
    {
      title: "Listings Management",
      url: '/listing',
      icon: Home,
      roles: ["landlord","admin"], // Admin and landlord can see this
      items: [
        {
          title: "Add Listing",
          icon: PlusCircle,
          url: "/listing/add-listing",
        },
       
      ],
    },
    {
      title: "Request Management",
      url: '/landlord/my-listing-request',
      icon: ClipboardList,
      roles: ["landlord"], 
     
    },
    {
      title: "My Request",
      url: "/tenant/my-request",
      icon: FileText,
      roles: ["tenant"], // Only tenant can see this
      
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      roles: ["admin", "landlord", "tenant"],
      items: [
        {
          title: "Profile",
          icon: FileText,
          url: "/profile",
        },
      ],
     
    },
   
  ]

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
               
                    <Image src={Logo} alt="house" width={100} height={100} className=""/>
            
       
               
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain2 items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
};