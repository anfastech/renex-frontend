import React from "react";

const DetailsSection: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">Include Some Details</h1>
        
        <h4 className="text-lg font-medium mb-2">Type *</h4>
        <ul className="flex flex-wrap gap-4 mb-6">
          <li><a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-blue-600 hover:border-blue-600 hover:text-blue-600 transition">Apartments</a></li>
          <li><a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:border-blue-600 hover:text-blue-600 transition">Builder Floors</a></li>
          <li><a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:border-blue-600 hover:text-blue-600 transition">Farm Houses</a></li>
          <li><a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:border-blue-600 hover:text-blue-600 transition">PG</a></li>
        </ul>
        
        <h4 className="text-lg font-medium mb-2">Bedrooms</h4>
        <ul className="flex flex-wrap gap-4 mb-6">
          <li><a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:border-blue-600 hover:text-blue-600 transition">1</a></li>
          <li><a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:border-blue-600 hover:text-blue-600 transition">2</a></li>
          {/* Add more options */}
        </ul>
        {/* Add more similar sections for Bathrooms, Furnishing, etc. */}
      </div>
    </div>
  );
};

export default DetailsSection;
