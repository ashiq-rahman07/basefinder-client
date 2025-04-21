// import { ContactForm } from "@/components/modules/contact/ContactForm";
// import { ContactHero } from "@/components/modules/contact/ContactHero";
// import { ContactInfo } from "@/components/modules/contact/ContactInfo";
// import { MapSection } from "@/components/modules/contact/MapSection";


// export default function ContactPage() {
//   return (
//     <div>
//       <ContactHero/>
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <ContactForm />
//           <ContactInfo />
//         </div>
//       </div>
//       <MapSection />
//     </div>
//   );
// }


// pages/contact.tsx



const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="relative bg-[url('/house1.png')] bg-cover bg-center h-[50vh] flex items-center justify-center">
        <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0" />
        <div className="z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="mt-2 text-lg">We&rsquo;d love to hear from you!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-400"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring focus:ring-green-400"
                placeholder="Type your message..."
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-700 font-medium">Address</p>
              <p>123 Property Street, City Name, Country</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Phone</p>
              <p>+1 (123) 456-7890</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Email</p>
              <p>support@yourdomain.com</p>
            </div>
          </div>

          {/* Optional: Embed Google Map */}
          <div className="mt-6">
            <iframe
              src="https://maps.google.com/maps?q=Dhaka%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              className="rounded-lg border"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
