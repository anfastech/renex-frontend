// SearchComponent.tsx
import React from 'react';

const SearchComponent: React.FC = () => {
  return (
    <section className="container mx-auto mt-6 bg-white rounded-lg shadow-md p-6">
      {/* Filters Tabs */}
      <div className="flex flex-wrap space-x-4 mb-6 overflow-x-auto scrollbar-hide">
        <ul className="flex w-full space-x-4">
          <li className="text-gray-500 border-b-2 border-transparent pb-2 hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">Buy</li>
          <li className="text-gray-500 border-b-2 border-transparent pb-2 hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">Rent</li>
          <li className="text-gray-500 border-b-2 border-transparent pb-2 hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">New Launch</li>
          <li className="text-gray-500 border-b-2 border-transparent pb-2 hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">PG / Co-living</li>
          <li className="text-gray-500 border-b-2 border-transparent pb-2 hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">Commercial</li>
          <li className="text-gray-500 border-b-2 border-transparent pb-2 hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">Plots/Land</li>
          <li className="text-gray-500 border-b-2 border-transparent pb-2 hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">Projects</li>
        </ul>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
        <div className="relative flex-1">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none transition"
            placeholder="Search 'Tirur'"
          />
          <svg
            className="absolute top-3 left-3 w-6 h-6 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 6a5 5 0 100 10 5 5 0 000-10zM21 21l-4.35-4.35"
            />
          </svg>
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full sm:w-auto transition-colors"
          aria-label="Search"
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchComponent;
