import { IListing } from "@/types/listing"
import Image from "next/image"


const RequestListingDetails = ({ listing }: { listing: IListing }) => {
  return (
   
  
      
          <div className="bg-white hidden md:block p-6 rounded-lg h-[400px] md:h-[600px] shadow-md">
                <h2 className="text-2xl font-semibold mb-4">{listing?.name}</h2>
                <p className="text-gray-600 mb-4">{listing?.location}</p>
                <p className="text-lg font-bold mb-4">${listing?.rentAmount}/month</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {listing?.images?.map((image, index) => (
                    
                    <Image

                      key={index}
                      src={image}
                      width={300}
                      height={150}
                      alt={`Listing Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>

          </div>
        
 
  )
}

export default RequestListingDetails