import { ContactForm } from "@/components/modules/contact/ContactForm";
import { ContactHero } from "@/components/modules/contact/ContactHero";
import { ContactInfo } from "@/components/modules/contact/ContactInfo";
import { MapSection } from "@/components/modules/contact/MapSection";


export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <ContactHero/>

      {/* Contact Form and Information */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>

      {/* Map Section */}
      <MapSection />
    </div>
  );
}