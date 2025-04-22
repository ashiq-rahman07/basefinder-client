import { IListing } from '@/types/listing';
import Image from 'next/image';
import Link from 'next/link';

export function ListingCard({ listing }: { listing: IListing }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
      <Image
        src={`/house4.jpeg`}
        alt="house"
        width={400}
        height={250}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800"> {listing?.name}</h3>
      <p className="text-gray-500 text-sm">{listing?.location}</p>
      <p className="text-emerald-600 font-bold mt-2">
        ৳{listing?.rentAmount}/month
      </p>
      <div className="flex gap-4 mt-2 text-gray-500 text-sm">
        <span>🛏 3</span>
        <span>🛁 2</span>
      </div>
      <Link href={`/listings/${listing?._id}`}>
        <button className="mt-4 w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600">
          View Details
        </button>
      </Link>
    </div>
  );
}
