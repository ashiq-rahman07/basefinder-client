// app/(WithDashboardLayout)/listing/ListingClient.tsx
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ManageListings from '@/components/modules/dashboard/listing/ManageListings';
import Cookies from 'js-cookie';

export default function ListingClient() {
  const searchParams = useSearchParams();
  const [listings, setListings] = useState<any[]>([]);
  const [meta, setMeta] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const page = searchParams.get('page') || '1';
        const token = Cookies.get('accessToken');
        
        if (!token) {
          window.location.href = '/login';
          return;
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/rental-house/listings?limit=3&page=${page}`,
          {
            method: 'GET',
            headers: {
              Authorization: String(token), // Just the token without "Bearer"
              'Content-Type': 'application/json',
            },
            credentials: 'include'
          }
        );

        if (!response.ok) {
          if (response.status === 401) {
            document.cookie = 'accessToken=; Max-Age=0; path=/';
            window.location.href = '/login';
            return;
          }
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
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