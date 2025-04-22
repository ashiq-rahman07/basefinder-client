export default function WhyChooseUs() {
  // const features = [
  //   {
  //     icon: "🏠",
  //     title: "Wide Range of Listings",
  //     description: "Find properties that match your needs and budget.",
  //   },
  //   {
  //     icon: "🔒",
  //     title: "Secure Transactions",
  //     description: "Safe and reliable payment options for tenants.",
  //   },
  //   {
  //     icon: "📞",
  //     title: "Direct Communication",
  //     description: "Connect directly with landlords for inquiries.",
  //   },
  // ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">
          Why Choose BasaFinder?
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              icon: '🏘️',
              title: 'Wide Range of Listings',
              desc: 'Find properties that match your budget.',
            },
            {
              icon: '🔒',
              title: 'Secure Transactions',
              desc: 'Safe and reliable payments.',
            },
            {
              icon: '📞',
              title: 'Direct Communication',
              desc: 'Contact landlords instantly.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-medium text-gray-800">
                {item.title}
              </h4>
              <p className="text-gray-500 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
