// import Link from 'next/link'
// import React from 'react'

// export default function Contact() {
//   return (
//     <div>
//         <section className="text-gray-600 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="flex flex-col text-center w-full mb-12">
//       <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Let's work together!</h1>
//       <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Contact me and let's schedule a chat.</p>
//     </div>
//     <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
//       <div className="relative flex-grow w-full">
//         <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
//        <h1>Areeb Ahmed</h1>
//       </div>
//       <div className="relative flex-grow w-full">
//         <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
//         <h1 className='text-black'>areebahmedofficial@gmail.com</h1>
//       </div>
      
//      <Link href={'tel:+92 3108770729'}> <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact</button></Link>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }
import Link from 'next/link';
import React from 'react';

export default function Contact() {
  return (
    <div>
      <section className="bg-black text-gray-100 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
              Let’s Work Together!
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
              I’m excited to collaborate! Contact me and let’s schedule a chat.
            </p>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-400"
              >
                Full Name
              </label>
              <h1 className="text-lg font-medium text-white">Areeb Ahmed</h1>
            </div>
            <div className="relative flex-grow w-full">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <h1 className="text-lg font-medium text-white">
                areebahmedofficial@gmail.com
              </h1>
            </div>
            <Link href={'tel:+92 3108770729'}>
              <button className="text-white bg-gray-700 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
