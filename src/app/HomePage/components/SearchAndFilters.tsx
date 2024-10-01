import ContinueBrowsing from "./ContinueBrowsing";

export default function SearchAndFilters() {
  return (
    <section className="container mx-auto mt-6 bg-white rounded-lg shadow-md p-4">
      {/* Filters Tabs */}
      <div className="flex flex-wrap space-x-4 mb-4">
        <ul className="flex w-full space-x-4 overflow-x-auto">
          {['Buy', 'Rent', 'New Launch', 'PG / Co-living', 'Commercial', 'Plots/Land', 'Projects'].map((filter) => (
            <li
              key={filter}
              className="text-gray-500 border-b-2 border-transparent pb-2 hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              {filter}
            </li>
          ))}
        </ul>
      </div>

      {/* Search Bar */}
      <div className="flex space-x-2 mb-4">
        <div className="relative flex-1">
          <input
            type="text"
            className="w-full border rounded-lg p-2 pl-8"
            placeholder="Search 'Tirur'"
          />
          <svg
            className="absolute top-2 left-2 w-6 h-6 text-gray-400"
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
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          aria-label="Search"
        >
          Search
        </button>
      </div>

      <ContinueBrowsing />
    </section>
  );
}
