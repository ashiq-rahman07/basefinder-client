import { Button } from "@/components/ui/button";

export default function CallToAction() {
    return (
      <section className="bg-transparent py-12">
        <div className="container  mx-auto px-4 text-center">
          <div className="bg-green-500/20 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-green-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Home?</h2>
          <p className="text-lg text-white mb-8">Join BasaFinder today and start your journey.</p>
          <div className="flex justify-center gap-4">
            <Button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">Sign Up as Tenant</Button>
            <Button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">List Your Property</Button>
          </div>
          </div>
        
        </div>
      </section>
    );
  }