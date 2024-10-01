import React from 'react';
import Image from 'next/image';

export default function RealEstateOptions() {
  return (
    <div className="bg-white py-8 my-4 mb-10 pb-20">
      <h2 className="text-center text-gray-500 font-semibold mb-4">
        GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
      </h2>
      <div className="flex overflow-x-auto space-x-4  py-4 px-4">
        {/* Card 1: Buying a home */}
        <div className="min-w-[150px] sm:min-w-[200px] lg:min-w-[250px]">
          <div className="bg-white rounded-lg shadow-md">
            <Image               
              src="/images/home.webp" 
              alt="Buying a home" 
              className="w-full h-40 object-cover rounded-t-lg"
              width={190}
              height={90} 
            />
            <div className="p-4">
              <p className="text-center text-blue-900 font-semibold">Buying a home</p>
            </div>
          </div>
        </div>

        {/* Card 2: Renting a home */}
        <div className="min-w-[150px] sm:min-w-[200px] lg:min-w-[250px]">
          <div className="bg-white rounded-lg shadow-md">
            <img 
              src="/images/rentinghome.webp" 
              alt="Renting a home" 
              className="w-full h-40 object-cover rounded-t-lg" 
            />
            <div className="p-4">
              <p className="text-center text-blue-900 font-semibold">Renting a home</p>
            </div>
          </div>
        </div>

        {/* Card 3: Invest in Real Estate */}
        <div className="min-w-[150px] sm:min-w-[200px] lg:min-w-[250px]">
          <div className="bg-white rounded-lg shadow-md relative">
            <img 
              src="/images/investrealestate.png" 
              alt="Invest in Real Estate" 
              className="w-full h-40 object-cover rounded-t-lg" 
            />
            <div className="p-4">
              <p className="text-center text-blue-900 font-semibold">Invest in Real Estate</p>
            </div>
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
          </div>
        </div>

        {/* Card 4: Sell/Rent your property */}
        <div className="min-w-[150px] sm:min-w-[200px] lg:min-w-[250px]">
          <div className="bg-white rounded-lg shadow-md">
            <img 
              src="/images/sell.or.rent.webp" 
              alt="Sell/Rent your property" 
              className="w-full h-40 object-cover rounded-t-lg" 
            />
            <div className="p-4">
              <p className="text-center text-blue-900 font-semibold">Sell/Rent your property</p>
            </div>
          </div>
        </div>

        {/* Card 5: Plots/Land */}
        {/* <div className="min-w-[150px] sm:min-w-[200px] lg:min-w-[250px]">
          <div className="bg-white rounded-lg shadow-md">
            <img 
              src="/images/plot.land.webp" 
              alt="Plots/Land" 
              className="w-full h-40 object-cover rounded-t-lg" 
            />
            <div className="p-4">
              <p className="text-center text-blue-900 font-semibold">Plots/Land</p>
            </div>
          </div>
        </div> */}

        {/* Card 6: Explore Insights */}
        {/* <div className="min-w-[150px] sm:min-w-[200px] lg:min-w-[250px]">
          <div className="bg-white rounded-lg shadow-md relative">
            <img 
              src="/images/commercial.webp" 
              alt="Explore Insights" 
              className="w-full h-40 object-cover rounded-t-lg" 
            />
            <div className="p-4">
              <p className="text-center text-blue-900 font-semibold">Buying Commercial spaces</p>
            </div>
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
