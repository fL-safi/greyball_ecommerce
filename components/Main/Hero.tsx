'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gray-100 py-8 md:py-12">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between">
        
        <div className="max-w-lg text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900">Collections</h1>
          <p className="text-gray-600 mt-3 leading-relaxed text-sm md:text-base">
            You can explore and shop many different collections from various brands here.
          </p>
          
          <div className="flex justify-center md:justify-start">
            <button className="mt-4 bg-blue-500 text-white py-2 px-5 rounded-lg flex items-center gap-2 shadow-md hover:bg-blue-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13l-1.2 6M7 13h10M17 13l1.2 6M9 21h6M10 9h4"
                />
              </svg>
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-[240px] h-[300px] sm:w-[280px] sm:h-[330px] md:w-[350px] md:h-[400px] lg:w-[380px] lg:h-[450px] rounded-[20px] overflow-hidden shadow-lg">
            <Image
              src="/hero.png"
              alt="Hero Image"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-2 -right-2 w-full h-full border-4 border-gray-300 rounded-[20px] -z-10"></div>
        </div>
      </div>
    </section>
  );
}
