import { AppSidebar } from '@/components/modules/dashboard/sidebar/app-sidebar';


export const metadata: Metadata = {
  title: {
    default: 'Dashboard - House Solution 🛠️',
    template: '%s | Dashboard - House Solution',
  },
  icons: {
    icon: '/favicon.png',
  },
};
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

import { Metadata } from 'next';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 ">
            <SidebarTrigger className="-ml-1 " />
          </div>
        </header>
        <div className="p-4 pt-0 min-h-screen">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
