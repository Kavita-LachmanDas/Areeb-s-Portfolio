// import Image from 'next/image'
// import React from 'react'
// // import about from '../public/about.webp'
// import Link from 'next/link'

// export default function About() {
//   return (
//     <div>
//         <section className="sec text-gray-600 body-font bg-black">
//   <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
//     <Image className="abc rounded-[50%] lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" alt="hero" src="/about.jpg" width={300} height={300}/>
//     <div className="text-center lg:w-2/3 w-full">
//       <h1 className="fontt title-font sm:text-4xl text-3xl mb-4 font-medium text-white">About Me</h1>
//       <p className="mb-8 leading-relaxed text-white">
     
//       I have the expertise to help you succeed

// With years of experience in e-commerce and digital marketing, I specialize in creating tailored strategies that empower businesses to thrive in today’s competitive online landscape. My expertise lies in understanding your unique goals and crafting personalized approaches to achieve them.

// By leveraging data-driven insights and innovative solutions, I can help your business not only boost sales but also enhance visibility and build a strong online presence. Whether it's optimizing your marketing campaigns, streamlining your e-commerce operations, or driving meaningful engagement with your audience, I’m here to guide your business towards sustainable growth and long-term success.
// </p>
//       <div className="flex justify-center">
//      <Link href="https://drive.google.com/file/d/1j-iaIbyVHGhTCv8LVDFkk47CM75VBvmM/view?usp=sharing">  <button className="inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-400 rounded text-lg ">My Resume</button></Link>

//       </div>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white body-font">
        <div className="container mx-auto flex px-5 py-24 items-center flex-col">
          <div className="relative">
            <Image
              className="rounded-full shadow-lg hover:scale-105 transition-transform duration-500"
              alt="About"
              src="/about.jpg"
              width={300}
              height={300}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black opacity-40 hover:opacity-10 transition-opacity duration-500"></div>
          </div>
          <div className="text-center lg:w-2/3 w-full mt-10">
            <h1 className="text-4xl font-extrabold mb-6">
              About Me
            </h1>
            <p className="leading-relaxed text-lg text-gray-300">
              With years of experience in e-commerce and digital marketing, I specialize in creating tailored strategies that empower businesses to thrive in today&apos;s competitive online landscape. My expertise lies in understanding your unique goals and crafting personalized approaches to achieve them.
            </p>
            <p className="leading-relaxed text-lg text-gray-300 mt-4">
              By leveraging data-driven insights and innovative solutions, I can help your business not only boost sales but also enhance visibility and build a strong online presence. Whether it&apos;s optimizing your marketing campaigns, streamlining your e-commerce operations, or driving meaningful engagement with your audience, I&apos;m here to guide your business towards sustainable growth and long-term success.
            </p>
            <div className="flex justify-center mt-10">
              <Link href="https://drive.google.com/file/d/1j-iaIbyVHGhTCv8LVDFkk47CM75VBvmM/view?usp=sharing">
                <button className="inline-flex items-center px-8 py-3 border border-gray-600 text-lg rounded-lg hover:bg-gray-600 hover:border-gray-600 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15.75L15.75 12 8.25 8.25v7.5z"
                    />
                  </svg>
                  View My Resume
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
