// app/(WithDashboardLayout)/listing/ListingClient.tsx
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ManageListings from '@/components/modules/dashboard/listing/ManageListings';

import { getAllListingByUser } from '@/services/listing';

export default function ListingClient() {
  const searchParams = useSearchParams();
  const [listings, setListings] = useState<any[]>([]);
  const [meta, setMeta] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
     
    
        //   `${process.env.NEXT_PUBLIC_BASE_API}/rental-house/listings?limit=3&page=${page}`,
        //   {
        //     method: 'GET',
        //     headers: {
        //       // Authorization: String(token), // Just the token without "Bearer"
        //       Authorization: token, // Just the token without "Bearer"
        //       'Content-Type': 'application/json',
        //     },
        //     credentials: 'include'
        //   }
        // );
        const data = await getAllListingByUser()

        setListings(data.result || []);
        setMeta(data.meta);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  if (loading) return <div className="p-4">Loading listings...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (!listings.length) return <div className="p-4">No listings found</div>;

  return <ManageListings listings={listings} meta={meta} />;
}