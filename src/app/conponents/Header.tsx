
'use client'
import Link from 'next/link';
import React, { useState } from 'react';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="text-white body-font bg-black">
        <div className="container mx-auto flex p-5 items-center justify-between">
          {/* Logo */}
          <a className="title-font font-medium items-center text-gray-900 flex">
            <span className="ml-3 text-2xl text-white font-serif">Areeb Ahmed</span>
          </a>

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white inline-flex items-center justify-center p-2 rounded-md md:hidden focus:outline-none"
          >
            {/* Icon */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        
          <nav className="hidden md:flex space-x-5 text-xl">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/routes/about" className="hover:text-gray-300">About</Link>
            <Link href="/routes/services" className="hover:text-gray-300">Services</Link>
            <Link href="/routes/testimonials" className="hover:text-gray-300">Testimonials</Link>
            <Link href="/routes/contact" className="hover:text-gray-300">Contact</Link>

          </nav>
        </div>

        {isOpen && (
          <nav className="flex flex-col items-center space-y-4 mt-4 md:hidden text-xl">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/routes/about" className="hover:text-gray-300">About</Link>
            <Link href="/routes/services" className="hover:text-gray-300">Services</Link>
            <Link href="/routes/testimonials" className="hover:text-gray-300">Testimonials</Link>
            <Link href="/routes/contact" className="hover:text-gray-300">Contact</Link>

        
          </nav>
        )}
      </header>
    </div>
  );
}