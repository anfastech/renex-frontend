"use client"
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch, faPlus, faStar, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Set a delay for 1.5 seconds to simulate icons loading time
        const timer = setTimeout(() => {
            setIsReady(true);
        }, 150); // 150ms = 0.15 seconds

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    // Return null to hide the footer until the delay completes
    if (!isReady) return (
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-200 px-8 py-0 shadow-lg" style={{ zIndex: "5" }}>
            <p className='py-6 text-gray-400 grid place-items-center'>Processing...</p>
        </footer>
    );

    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-200 px-8 py-0 shadow-lg" style={{ zIndex: "5" }}>
            <div className="flex justify-between items-center py-2">
                {/* Home Icon */}
                <a href="/">
                    <button className="focus:outline-none hover:text-blue-600">
                        <FontAwesomeIcon icon={faHouse} fixedWidth className="w-8 h-10" />
                    </button>
                </a>

                {/* Search Icon */}
                <a href="/SearchPage">
                    <button className="focus:outline-none hover:text-blue-600">
                        <FontAwesomeIcon icon={faSearch} fixedWidth className="w-10 h-10" />
                    </button>
                </a>

                {/* Plus Icon */}
                <a href="/AddForm">
                    <button className="bg-blue-500 text-white rounded-full focus:outline-none w-14 h-14 grid place-items-center">
                        <FontAwesomeIcon icon={faPlus} fixedWidth className="w-10 h-10" />
                    </button>
                </a>

                {/* Star Icon */}
                <button className="focus:outline-none hover:text-blue-600">
                    <FontAwesomeIcon icon={faStar} fixedWidth className="w-9 h-9" />
                </button>

                {/* User Icon */}
                <button className="focus:outline-none hover:text-blue-600">
                    <FontAwesomeIcon icon={faUser} fixedWidth className="w-5 h-5" />
                </button>
            </div>
        </footer>
    );
}
