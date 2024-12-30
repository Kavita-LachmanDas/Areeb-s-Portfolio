import Image from 'next/image';

const Service = () => {
  return (
    <div className="bg-gray-200 p-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 my-8">
        <div className="flex flex-col items-center justify-center text-center md:text-left">
          <h1 className="text-4xl font-bold mb-6">WHAT CAN I DO FOR YOU?</h1>
          <Image
            src="/service.png" // Replace with the correct image path
            alt="Presentation"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Digital Marketing Services</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Digital Marketing (SEO, PPC, Social Media)</li>
              <li>Social Media Strategy & Content Creation</li>
              <li>Brand Development & Reputation Management</li>
              <li>Influencer Marketing & Partnerships</li>
              <li>Analytics & Performance Tracking</li>
              <li>Targeted Advertising & Paid Campaigns</li>
            </ul>
          </div>
          <hr className="border-gray-300 my-4" />
          <div>
            <h2 className="text-2xl font-bold mb-4">E-commerce Services</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>E-commerce Strategy & Optimization</li>
              <li>Product Listing Optimization</li>
              <li>E-commerce Store Setup & Management</li>
              <li>Keyword Research & SEO Optimization</li>
              <li>Product Hunting & Market Research</li>
              <li>Product Sourcing & Supplier Management</li>
              <li>Inventory Management & Fulfillment Solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service
