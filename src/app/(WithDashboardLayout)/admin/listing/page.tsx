// app/(WithDashboardLayout)/admin/listing/page.tsx

import ListingClient from '@/components/modules/dashboard/listing/ListingUser';
import { Suspense } from 'react';

export default function ListingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListingClient />
    </Suspense>
  );
}