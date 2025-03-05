import Image from "next/image";

export default function Testimonials() {
    const testimonials = [
      {
        name: "John Doe",
        role: "Tenant",
        comment: "BasaFinder helped me find my dream apartment quickly and easily!",
        avatar: "/avatar-1.jpg",
      },
      {
        name: "Jane Smith",
        role: "Landlord",
        comment: "Listing my property was straightforward, and I found great tenants.",
        avatar: "/avatar-2.jpg",
      },
    ];
  
    return (
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image src={testimonial.avatar} alt={testimonial.name} width={100} height={100} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }