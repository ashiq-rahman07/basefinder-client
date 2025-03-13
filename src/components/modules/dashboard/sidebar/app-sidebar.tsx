"use client";

import * as React from "react";
// import {
//   Bot,
//   Frame,
//   LifeBuoy,
//   Map,
//   PieChart,
//   Send,
//   Settings,
//   SquareTerminal,
// } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
// import { NavMain } from "./nav-main";
import {  Home, Users, List, Settings, MessageSquare, LucideIcon } from "lucide-react";
import { NavUser } from "./nav-user";
import Link from "next/link";
import Logo from "@/assets/svgs/Logo";
import { NavMain2 } from "./sitebar-menuitem";
import { useUser } from "@/context/UserContext";
// import { toast } from "sonner";

interface INavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
  items?:{
    title: string
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
      icon: Home,
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
      icon: Users,
      roles: ["admin","landlord"], // Only admin can see this
    },
    {
      title: "Listings Management",
      url: '/listing',
      icon: List,
      roles: ["landlord","admin"], // Admin and landlord can see this
      items: [
        {
          title: "Add Listing",
          url: "/listing/add-listing",
        },
       
      ],
    },
    {
      title: "My Request",
      url: "/tenant/my-request",
      icon: MessageSquare,
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
                <div className="flex items-center justify-center">
                  <Logo />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">NextMart</h2>
                </div>
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