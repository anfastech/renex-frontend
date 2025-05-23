"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSearch,
  faPlus,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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
  if (!isReady)
    return (
      <footer
        className="fixed bottom-0 left-0 right-0 bg-gray-100 px-8 py-0 shadow-lg"
        style={{ zIndex: "5" }}
      >
        <p className="py-6 text-gray-400 grid place-items-center">
          Processing...
        </p>
      </footer>
    );

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 w-full flex justify-center"
      style={{ zIndex: "5" }}
    >
      <div className="bg-white bg-opacity-20 backdrop-blur-md px-6 lg:px-10 md:px-10 lg:py-3 py-0 w-full lg:w-1/2 shadow-lg rounded-lg mb-3">
        <div className="flex justify-between items-center py-2">
          {/* Home Icon */}
          <a href="/" className="flex-col flex justify-center">
        <button className="focus:outline-none hover:text-blue-600" title="Search">
          <FontAwesomeIcon icon={faHouse} fixedWidth className="w-5 h-5" />
        </button>
        <h1 className="invisiblex md:visible lg:visible">Home</h1>
          </a>

          {/* Search Icon */}
          <a href="/SearchPage" className="flex-col flex justify-center">
        <button className="focus:outline-none hover:text-blue-600 " title="Search">
          <FontAwesomeIcon
            icon={faSearch}
            fixedWidth
            className="w-5 h-5"
          />
        </button>
        <h1 className="invisiblex md:visible lg:visible">Search</h1>
          </a>

          {/* Plus Icon */}
          <a href="/AddForm" className="flex-col flex justify-center">
        <button className="bg-blue-500 text-white rounded-full focus:outline-none w-20 h-20 grid place-items-center" title="Add">
          <FontAwesomeIcon icon={faPlus} fixedWidth className="w-10 h-10" />
        </button>
          </a>

          <a href="/Recent" className="flex-col flex justify-center">
        {/* Star Icon */}
        <button className="focus:outline-none hover:text-blue-600" title="Recent">
          <FontAwesomeIcon icon={faStar} fixedWidth className="w-5 h-5" />
        </button>
        <h1 className="invisiblex md:visible lg:visible">Recent</h1>
          </a>

          <a href="/ProfilePage" className="flex-col flex justify-center">
        {/* User Icon */}
        <button className="focus:outline-none hover:text-blue-600" title="user">
          <FontAwesomeIcon icon={faUser} fixedWidth className="w-5 h-5" />
        </button>
        <h1 className="invisiblex md:visible lg:visible">Profile</h1>
          </a>
        </div>
      </div>
    </footer>
  );
}
