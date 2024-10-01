"use client";
import { useEffect } from 'react';
import Image from 'next/image';

export default function TopFeaturesSection() {
  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');

    const observerOptions = {
      threshold: 0.1, // When 10% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Element in view:', entry.target); // Check if element is detected
          entry.target.classList.add('animate-scrollIn');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);

    projectCards.forEach((card) => {
      observer.observe(card);
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="wrapper mb-[8%] mt-[3%] py-10">
      <h6 className="text-[13px] text-gray-500 text-center">Best Projects of the Year</h6>
      <h2 className="text-[40px] font-semibold text-center mb-[16px]">Top Features</h2>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* First Project */}
        <div className="rounded-lg project-card opacity-0 shadow-md transform transition duration-500 col-span-1">
          <a href="http://127.0.0.1:5501/apartments.html">
            <Image
              src="/images/apartment2.jpg"
              alt="Commercial Building"
              className="rounded-lg w-full h-[250px] object-cover mb-[12px]"
              width={500}
              height={250}
            />
          </a>
          <h3 className="font-semibold text-[18px] pl-[8px]">Commercial Building</h3>
          <p className="mt-[10px] pl-[8px] text-gray-500">Rent, Buy, and Sell properties with ease. Discover the best deals.</p>
        </div>
      
        {/* Second Project */}
        <div className="rounded-lg project-card opacity-0 shadow-md transform transition duration-500 col-span-1">
          <a href="http://127.0.0.1:5501/commercial.html">
            <Image
              src="/images/mbr-52.jpg"
              alt="Sobha Heartland II Villas"
              className="rounded-lg w-full h-[250px] object-cover mb-[12px]"
              width={500}
              height={250}
            />
          </a>
          <h3 className="font-semibold text-[18px] pl-[8px]">Sobha Heartland II Villas</h3>
          <p className="mt-[10px] pl-[8px] text-gray-500">Rent, Buy, and Sell properties with ease. Discover the best deals.</p>
        </div>
      
        {/* Third Project */}
        <div className="rounded-lg project-card opacity-0 shadow-md transform transition duration-500 col-span-1">
          <Image
            src="/images/building.png"
            alt="Modern Building"
            className="rounded-lg w-full h-[250px] object-cover mb-[12px]"
            width={500}
            height={250}
          />
          <h3 className="font-semibold text-[18px] pl-[8px]">Modern Building</h3>
          <p className="mt-[10px] pl-[8px] text-gray-500">Rent, Buy, and Sell properties with ease. Discover the best deals.</p>
        </div>

      </div>

      <style jsx>{`
        @keyframes scrollIn {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-scrollIn {
          animation: scrollIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
