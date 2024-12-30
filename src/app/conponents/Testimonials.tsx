

// const Testimonials = () => {
//     const cards = [
//       {
//         title: "Digital Marketing",
//         image: "/pak.png", // Replace with your image path
//         description:
//           `Supporting Pakistani
// businesses in expanding
// their digital presence and
// optimizing e-commerce
// strategies for growth`,
//       },
//       {
//         title: "Social Media Strategy",
//         image: "/usa.png", // Replace with your image path
//         description:
//           `Helping businesses thrive
// in the dynamic USA market
// with data-driven strategies
// and digital marketing
// expertise
// `,
//       },
//       {
//         title: "E-commerce Solutions",
//         image: "/uk.png", // Replace with your image path
//         description:
//           `Empowering UK-based
// businesses with tailored e-
// commerce solutions and
// innovative digital marketing
// campaigns`,
//       },
//       {
//         title: "Brand Development",
//         image: "/uae.png", // Replace with your image path
//         description:
//           `Driving success for brands in
// the UAE with cutting-edge e-
// commerce strategies and
// targeted digital marketing`,
//       },
//     ];

import Image from "next/image";

  
//     return (
//       <div className="bg-gray-100 py-16">
//         {/* Heading Section */}
//         <div className="container mx-auto mb-12">
//           <div className="text-center">
//             <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide mb-4">
//               Countries Where I’ve Delivered Success
//             </h1>
//             <p className="text-gray-600 text-lg">
//               Discover the impact of our services around the globe.
//             </p>
//           </div>
//         </div>
  
//         {/* Cards Section */}
//         <div className="max-w-7xl mx-auto flex flex-row flex-wrap justify-between gap-6">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-[23%] flex flex-col hover:shadow-2xl transition-shadow duration-300"
//             >
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="h-54 "
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-4 text-gray-800">
//                   {card.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{card.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default Testimonials;
const Testimonials = () => {
    const cards = [
      {
        title: "Digital Marketing",
        image: "/pak.png", // Replace with your image path
        description: `Supporting Pakistani businesses in expanding their digital presence and optimizing e-commerce strategies for growth.`,
      },
      {
        title: "Social Media Strategy",
        image: "/usa.png", // Replace with your image path
        description: `Helping businesses thrive in the dynamic USA market with data-driven strategies and digital marketing expertise.`,
      },
      {
        title: "E-commerce Solutions",
        image: "/uk.png", // Replace with your image path
        description: `Empowering UK-based businesses with tailored e-commerce solutions and innovative digital marketing campaigns.`,
      },
      {
        title: "Brand Development",
        image: "/uae.png", // Replace with your image path
        description: `Driving success for brands in the UAE with cutting-edge e-commerce strategies and targeted digital marketing.`,
      },
    ];
  
    return (
      <div className="bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 py-16">
        {/* Heading Section */}
        <div className="container mx-auto mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Countries Where I’ve Delivered Success
          </h1>
          <p className="text-gray-700 text-lg">
            Discover the impact of our services around the globe.
          </p>
        </div>
  
        {/* Cards Section */}
        <div className="max-w-7xl mx-auto flex flex-row flex-wrap justify-center gap-8 p-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-3xl p-6 w-full sm:w-[23%] transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative flex justify-center mb-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={300}
                  className="h-24 w-24 rounded-full object-cover border-4 border-gray-200 shadow-md hover:border-gray-600 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 hover:text-gray-600 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mt-4 text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  