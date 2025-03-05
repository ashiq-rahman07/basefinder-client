import { Button } from "@/components/ui/button";

export default function CallToAction() {
    return (
      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Home?</h2>
          <p className="text-lg text-white mb-8">Join BasaFinder today and start your journey.</p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary">Sign Up as Tenant</Button>
            <Button variant="secondary">List Your Property</Button>
          </div>
        </div>
      </section>
    );
  }