

"use client";
import Image from 'next/image';
import { BsFacebook,  BsLinkedin, BsTwitter } from 'react-icons/bs';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="bg-black text-white w-full h-screen flex items-center justify-center">
            <div className="flex flex-col md:flex-row w-full px-6 md:px-16 lg:px-24 py-8 md:py-0">
                {/* Left Section: Text Content */}
                <div className="text w-full md:w-[50%] text-center md:text-left p-9 md:p-12 mt-10 ">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif ">
                        Hello, It&apos;s Me <br /> Areeb Ahmed
                    </h1>
                    <p className="text-sm md:text-base text-gray-400 mb-6">
                        I am an expert in e-commerce and digital marketing, committed to helping businesses grow online. 
                        I focus on driving targeted traffic, optimizing campaigns, and delivering measurable results to ensure success in the competitive digital space.
                    </p>
                    
                    {/* Social Media Buttons */}
                    <div className="flex justify-center md:justify-start gap-6 mb-6">
                        <Link href="https://www.linkedin.com/in/areeb-ahmed-151775216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">
                            <BsLinkedin className="text-3xl hover:text-blue-600 transition duration-300" />
                        </Link>
                       
                        <Link href="/">
                            <BsTwitter className="text-3xl hover:text-blue-400 transition duration-300" />
                        </Link>
                        <Link href="/">
                            <BsFacebook className="text-3xl hover:text-blue-700 transition duration-300" />
                        </Link>
                    </div>

                    {/* Email Button */}
                    <Link href="mailto:areebahmedofficial@gmail.com">
                    <button className="bg-gray-700 text-white border-2 border-gray-600 rounded-3xl text-xl py-3 px-8 transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 active:scale-105 mb-8">
    Email Me
</button>

                    </Link>
                </div>

                {/* Right Section: Image */}
                <div className="w-full md:w-[50%] flex justify-center items-center relative bottom-[60px]">
                    <Image 
                        alt="Hero" 
                        src="/heroo.png" 
                        width={500} 
                        height={500} 
                        className="rounded-lg shadow-xl transform transition duration-500 hover:scale-105 "
                    />
                </div>
            </div>
        </div>
    );
}
