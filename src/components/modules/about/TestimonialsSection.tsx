export const TestimonialsSection = () => {
    const testimonials = [
      {
        name: "Sarah Johnson",
        comment: "BasaFinder helped me find my dream apartment quickly and easily!",
        image: "/testimonials/sarah-johnson.jpg",
      },
      {
        name: "Michael Brown",
        comment: "The platform is user-friendly, and the support team is amazing.",
        image: "/testimonials/michael-brown.jpg",
      },
      {
        name: "Emily Davis",
        comment: "I highly recommend BasaFinder to anyone looking for a rental home.",
        image: "/testimonials/emily-davis.jpg",
      },
    ];
  
    return (
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };