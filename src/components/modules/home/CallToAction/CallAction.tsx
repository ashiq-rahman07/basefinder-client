import React from 'react';

const CallAction = () => {
  return (
    <section className="bg-emerald-100 py-16 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Ready to Find Your Perfect Home?
      </h2>
      <p className="text-gray-600 mb-6">
        Join BasaFinder today and start your journey.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600">
          Sign Up as Tenant
        </button>
        <button className="bg-white text-emerald-600 border border-emerald-500 px-6 py-2 rounded-lg hover:bg-gray-100">
          List Your Property
        </button>
      </div>
    </section>
  );
};

export default CallAction;
