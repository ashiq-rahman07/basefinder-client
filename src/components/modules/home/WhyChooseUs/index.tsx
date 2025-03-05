export default function WhyChooseUs() {
    const features = [
      {
        icon: "🏠",
        title: "Wide Range of Listings",
        description: "Find properties that match your needs and budget.",
      },
      {
        icon: "🔒",
        title: "Secure Transactions",
        description: "Safe and reliable payment options for tenants.",
      },
      {
        icon: "📞",
        title: "Direct Communication",
        description: "Connect directly with landlords for inquiries.",
      },
    ];
  
    return (
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose BasaFinder?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }