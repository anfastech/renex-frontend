"use client"

import { useEffect } from "react";

export default function ContSearch() {
    useEffect(() => {
        const slider = document.getElementById('slider');
        const scrollLeft = document.getElementById('scrollLeft');
        const scrollRight = document.getElementById('scrollRight');
        
        // Function to scroll left
        const handleScrollLeft = () => {
          slider?.scrollBy({ left: -200, behavior: 'smooth' });
        };

        // Function to scroll right
        const handleScrollRight = () => {
          slider?.scrollBy({ left: 200, behavior: 'smooth' });
        };

        // Add event listeners
        scrollLeft?.addEventListener('click', handleScrollLeft);
        scrollRight?.addEventListener('click', handleScrollRight);

        // Clean up event listeners when the component unmounts
        return () => {
            scrollLeft?.removeEventListener('click', handleScrollLeft);
            scrollRight?.removeEventListener('click', handleScrollRight);
        };
    }, []);

    return (
        <>
            {/* Continue Browsing Section */}
            <section className="container mx-auto mt-6">
                <div id="slider" className="flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide">
                    <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-full w-auto hover:bg-blue-500 hover:text-white transition-colors whitespace-nowrap">
                        Rent in Tirur
                    </button>
                    <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-full w-auto hover:bg-blue-500 hover:text-white transition-colors whitespace-nowrap">
                        Buy in Central Delhi
                    </button>
                    <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-full w-auto hover:bg-blue-500 hover:text-white transition-colors whitespace-nowrap">
                        Buy in Malappuram
                    </button>
                    <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-full w-auto hover:bg-blue-500 hover:text-white transition-colors whitespace-nowrap">
                        Rent in Kerala
                    </button>
                    <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-full w-auto hover:bg-blue-500 hover:text-white transition-colors whitespace-nowrap">
                        Rent in Hyderabad
                    </button>
                </div>
                <div className="flex justify-between mt-4">
                    <button id="scrollLeft" className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-400">
                        ←
                    </button>
                    <button id="scrollRight" className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-400">
                        →
                    </button>
                </div>
            </section>
        </>
    )
}
