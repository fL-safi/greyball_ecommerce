import React from "react";

function Banner() {
  return (
    <div className="bg-white px-8 py-12 my-10 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Clean and <br /> fragrant soy wax
        </h2>
        <p className="text-blue-500 mt-2 text-lg">
          Made for your home and for your wellness
        </p>
        
        <ul className="mt-4 space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-lg mr-2">✔</span>
            All recyclable materials, 0% CO2 emissions
          </li>
          <li className="flex items-start">
            <span className="text-lg mr-2">✔</span>
            100% natural, human-friendly ingredients
          </li>
          <li className="flex items-start">
            <span className="text-lg mr-2">✔</span>
            All candles are crafted with love.
          </li>
          <li className="flex items-start">
            <span className="text-lg mr-2">✔</span>
            No more waste. Created to last long.
          </li>
        </ul>

        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition">
          Learn more
        </button>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="/banner.png"
          alt="Soy Wax Candles"
          className="max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default Banner;
