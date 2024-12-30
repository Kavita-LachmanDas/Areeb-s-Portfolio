// export default function Home() {
//     return (
//       <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center text-center">
//         <div className="w-full max-w-4xl px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* E-commerce Platforms */}
//             <div>
//               <h2 className="text-xl font-bold mb-2">E-commerce Platforms I’ve Worked On</h2>
//               <div className="flex items-center mb-4">
//                 <div className="flex-grow border-t border-black"></div>
//                 <div className="mx-2 h-3 w-3 rounded-full bg-black"></div>
//                 <div className="flex-grow border-t border-black"></div>
//               </div>
//               <ul className="list-disc list-inside space-y-2 text-left">
//                 <li>Amazon</li>
//                 <li>Walmart</li>
//                 <li>eBay</li>
//                 <li>Etsy</li>
//                 <li>Shopify</li>
//                 <li>TikTok Shop</li>
//                 <li>Bonanza</li>
//                 <li>Faire</li>
//               </ul>
//             </div>
  
//             {/* Digital Marketing Platforms */}
//             <div>
//               <h2 className="text-xl font-bold mb-2">Digital Marketing Platforms I’ve Worked On</h2>
//               <div className="flex items-center mb-4">
//                 <div className="flex-grow border-t border-black"></div>
//                 <div className="mx-2 h-3 w-3 rounded-full bg-black"></div>
//                 <div className="flex-grow border-t border-black"></div>
//               </div>
//               <ul className="list-disc list-inside space-y-2 text-left">
//                 <li>Facebook Ads</li>
//                 <li>Instagram Ads</li>
//                 <li>Google Ads</li>
//                 <li>Etsy Ads</li>
//                 <li>PPC on Google</li>
//                 <li>PPC on Amazon</li>
//                 <li>PPC on Walmart</li>
//                 <li>PPC on eBay</li>
//               </ul>
//             </div>
//           </div>
//           <p className="mt-8 text-lg font-semibold">Your Challenges, My Solutions</p>
//         </div>
//       </div>
//     );
//   }
export default function Home() {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-4xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* E-commerce Platforms */}
            <div className="group">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-gray-600 transition-colors duration-300">
                E-commerce Platforms I’ve Worked On
              </h2>
              <div className="flex items-center mb-4">
                <div className="flex-grow border-t border-gray-600 group-hover:border-gray-600 transition-all duration-300"></div>
                <div className="mx-2 h-4 w-4 rounded-full bg-gray-600 group-hover:bg-gray-600 transition-all duration-300"></div>
                <div className="flex-grow border-t border-gray-600 group-hover:border-gray-600 transition-all duration-300"></div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-left text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                <li className="hover:text-gray-600 transition-colors duration-200">Amazon</li>
                <li className="hover:text-gray-600 transition-colors duration-200">Walmart</li>
                <li className="hover:text-gray-600 transition-colors duration-200">eBay</li>
                <li className="hover:text-gray-600 transition-colors duration-200">Etsy</li>
                <li className="hover:text-gray-600 transition-colors duration-200">Shopify</li>
                <li className="hover:text-gray-600 transition-colors duration-200">TikTok Shop</li>
                <li className="hover:text-gray-600 transition-colors duration-200">Bonanza</li>
                <li className="hover:text-gray-600 transition-colors duration-200">Faire</li>
              </ul>
            </div>
  
            {/* Digital Marketing Platforms */}
            <div className="group">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-gray-600 transition-colors duration-300">
                Digital Marketing Platforms I’ve Worked On
              </h2>
              <div className="flex items-center mb-4">
                <div className="flex-grow border-t border-gray-600 group-hover:border-gray-600 transition-all duration-300"></div>
                <div className="mx-2 h-4 w-4 rounded-full bg-gray-600 group-hover:text-gray-600 transition-all duration-300"></div>
                <div className="flex-grow border-t border-gray-600 group-hover:border-gray-600 transition-all duration-300"></div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-left text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                <li className="hover:text-gray-600 transition-colors duration-200">Facebook Ads</li>
                <li className="hover:text-gray-600 transition-colors duration-200">Instagram Ads</li>
                <li className="hover:text-gray-600 transition-colors duration-200">Google Ads</li>
                <li className="hover:text-gray-600 transition-colors duration-200">Etsy Ads</li>
                <li className="hover:text-gray-600 transition-colors duration-200">PPC on Google</li>
                <li className="hover:text-gray-600 transition-colors duration-200">PPC on Amazon</li>
                <li className="hover:text-gray-600 transition-colors duration-200">PPC on Walmart</li>
                <li className="hover:text-gray-600 transition-colors duration-200">PPC on eBay</li>
              </ul>
            </div>
          </div>
          <p className="mt-12 text-lg font-semibold group-hover:text-indigo-400 transition-colors duration-300">
            Your Challenges, My Solutions
          </p>
        </div>
      </div>
    );
  }
  