"use client";

import { LucideIcon, Home, Users, List, Settings, Bookmark, MessageSquare, ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { useUser } from "@/context/UserContext";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";


interface NavItem {
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

export const NavMain2 = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Not logged in</div>;
  }

  // Define menu items for each role
  const navItems: NavItem[] = [
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
    // {
    //   title: "Listing Management",
    //   url: "/admin/listing",
    //   icon: Users,
    //   roles: ["admin"], // Only admin can see this
    // },
    {
      title: "Listings Management",
      url: '/admin/listing',
      icon: List,
      roles: ["admin"], // Admin and landlord can see this
    },
    {
      title: "My Listings",
      url: `/${user?.role}/listing`,
      icon: List,
      roles: ["landlord"], // Admin and landlord can see this
      items: [
        {
          title: "Add Listing",
          url: "/landlord/add-listing",
        },
        {
          title: "Update Listing",
          url: "/update-listing",
        },
      ],
    },
    {
      title: "My Properties",
      url: "/my-properties",
      icon: Bookmark,
      roles: ["landlord"], // Only landlord can see this
    
    },
    {
      title: "My Request",
      url: "/tenant/my-request",
      icon: MessageSquare,
      roles: ["tenant"], // Only tenant can see this
      
    },
    // {
    //   title: "Settings",
    //   url: "/settings",
    //   icon: Settings,
    //   roles: ["admin", "landlord", "tenant"], // All roles can see this
    // },
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
   
  ];

  // Filter menu items based on the user's role
  const filteredNavItems = navItems.filter((item) => item.roles?.includes(user.role));

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarMenu>
        {filteredNavItems.map((item) => (
             <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild tooltip={item.title}>
              <Link href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
            {item.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link href={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
          </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};