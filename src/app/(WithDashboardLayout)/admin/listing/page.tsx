// app/(WithDashboardLayout)/admin/listing/page.tsx

import ListingClient from '@/components/modules/dashboard/listing/ListingUser';
import { Suspense } from 'react';


export const dynamic = 'force-dynamic';
 const ListingPage =() =>{
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListingClient />
    </Suspense>
  );
}

export default ListingPage