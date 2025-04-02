// app/room-details/page.tsx
"use client";
import React, { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import react-slick with no SSR
const Slider = dynamic(() => import('react-slick'), { ssr: false });

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'boxicons/css/boxicons.min.css';

const RoomDetailsPage: React.FC = () => {
  const mainSliderRef = useRef<Slider | null>(null);  // Create reference for the main slider
  const [sliderInitialized, setSliderInitialized] = useState(false);

  useEffect(() => {
    // Wait until both sliders are initialized to avoid asNavFor reference issues
    if (mainSliderRef.current) {
      setSliderInitialized(true);
    }
  }, []);

  const mainSliderSettings = {
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: sliderInitialized ? mainSliderRef.current : undefined,  // Check if slider is initialized
  };

  const thumbnailSliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: sliderInitialized ? mainSliderRef.current : undefined,  // Check if slider is initialized
  };

  return (
    <section className="wrapper p-4 md:p-8 bg-gray-50">
      <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-4 text-gray-800">Large Family House</h3>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Carousel Section */}
        <div className="md:w-3/5">
          <div className="flex justify-between items-center mb-4 text-gray-600 bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="flex items-center gap-3">
              <img src="/images/Group (4).png" alt="Location Icon" className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity duration-200" />
              <h4 className="text-lg font-semibold text-gray-700 transition-colors duration-200 hover:text-blue-600">London, Oxford St.</h4>
            </div>
            <h3 className="text-xl font-bold text-green-600 transition-transform duration-200 hover:text-green-700">290,000 $</h3>
          </div>

          <Slider
            {...mainSliderSettings}
            ref={mainSliderRef}  // Set reference for the main slider
            className="mainSlider rounded-lg overflow-hidden h-64 md:h-80 shadow-lg"
          >
            <div><img src="/images/Rectangle 47.png" alt="Property Image 1" /></div>
            <div><img src="/images/MP0bgaS_d1c.png" alt="Property Image 2" /></div>
            <div><img src="/images/Wp7t4cWN-68.png" alt="Property Image 3" /></div>
          </Slider>

          <Slider
            {...thumbnailSliderSettings}
            className="thumbnailSlider mt-4 h-24 overflow-hidden rounded-lg"
          >
            <div><img src="/images/Rectangle 47.png" alt="Thumbnail 1" /></div>
            <div><img src="/images/MP0bgaS_d1c.png" alt="Thumbnail 2" /></div>
            <div><img src="/images/Wp7t4cWN-68.png" alt="Thumbnail 3" /></div>
          </Slider>
        </div>

        {/* Contact Agent Section */}
        <div className="shadow-md bg-white rounded-lg p-6 w-full md:w-1/3 hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="text-center">
            <img src="/images/Ellipse 2.png" alt="Agent" className="mx-auto mb-4 w-20 h-20 rounded-full border-4 border-blue-200 transition-transform duration-300 ease-in-out transform hover:scale-110" />
            <h3 className="py-2 text-lg font-semibold text-gray-800 fade-in">Micheal James</h3>
            <h4 className="text-gray-500 mb-4 fade-in delay-100">Real Estate Specialist</h4>
            <a href="#" className="py-2 px-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-200 inline-flex items-center gap-2 transform hover:scale-105">
              <i className='bx bx-phone'></i> VIEW PHONE
            </a>
            <a href="/send-message" className="py-2 px-5 mt-4 border border-blue-600 text-blue-600 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-200 inline-flex items-center gap-2 transform hover:scale-105">
              <i className='bx bx-envelope'></i> SEND MESSAGE
            </a>
          </div>
        </div>
      </div>

      {/* General Information Section */}
      <div className="mt-8">
        <h1 className="text-xl font-semibold mb-4 text-gray-800">General Information</h1>
        <div className="flex flex-col md:flex-row gap-8 bg-white shadow-md p-4 rounded-lg">
          <div className="w-full md:w-1/2">
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between"><span className="font-medium text-gray-500">Advertise No</span><span className="text-red-600 font-semibold">0-1234</span></li>
              <li className="flex justify-between"><span className="font-medium text-gray-500">Published Date</span><span>20 November 2020</span></li>
              <li className="flex justify-between"><span className="font-medium text-gray-500">Advertise Status</span><span>Daily Rental</span></li>
              <li className="flex justify-between"><span className="font-medium text-gray-500">Housing Shape</span><span>Apartment</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Explanation Section */}
      <div className="shadow-md bg-white w-full mt-8 py-6 px-6 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Explanation</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac convallis tellus pellentesque non odio consectetur bibendum.</p>
      </div>

      {/* Location Information Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Location Information</h2>
        <div className="shadow-md bg-white mt-4 py-4 px-4 rounded-lg">
          <img src="/images/Mapsicle Map.png" alt="Map Location" className="w-full rounded-lg shadow-md" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeIn 0.6s ease-in-out both; }
        .fade-in.delay-100 { animation-delay: 0.1s; }
      `}</style>
    </section>
  );
};

export default RoomDetailsPage;
