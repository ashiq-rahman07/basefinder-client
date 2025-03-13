export const ContactInfo = () => {
    return (
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600">support@basafinder.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-gray-600">123 Main St, New York, NY 10001</p>
          </div>
        </div>
      </div>
    );
  };