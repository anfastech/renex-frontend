import React from 'react';

const TopCities: React.FC = () => {
  return (
    <div className="bg-white py-8">
      <div className="text-center mb-6">
        <h3 className="text-gray-500 uppercase font-bold tracking-wide">Top Cities</h3>
        <h2 className="text-3xl text-blue-900 font-bold">
          Explore Real Estate in Popular Indian Cities
        </h2>
      </div>

      {/* Cities Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {/* City 1: Delhi / NCR */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="./images/delhi.jpg" 
            alt="Delhi / NCR" 
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-blue-900 font-semibold">Delhi / NCR</p>
            <p className="text-gray-500 text-sm">170,000+ Properties</p>
          </div>
        </div>

        {/* City 2: Bangalore */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="./images/banglore.jpg" 
            alt="Bangalore" 
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-blue-900 font-semibold">Bangalore</p>
            <p className="text-gray-500 text-sm">42,000+ Properties</p>
          </div>
        </div>

        {/* City 3: Mumbai */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="./images/mumbai.jpg" 
            alt="Mumbai" 
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-blue-900 font-semibold">Mumbai</p>
            <p className="text-gray-500 text-sm">40,000+ Properties</p>
          </div>
        </div>

        {/* City 4: Pune */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="./images/pune.jpg" 
            alt="Pune" 
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-blue-900 font-semibold">Pune</p>
            <p className="text-gray-500 text-sm">42,000+ Properties</p>
          </div>
        </div>

        {/* City 5: Hyderabad */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="./images/hydrabad.jpg" 
            alt="Hyderabad" 
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-blue-900 font-semibold">Hyderabad</p>
            <p className="text-gray-500 text-sm">22,000+ Properties</p>
          </div>
        </div>

        {/* City 6: Kolkata */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="./images/kolkatta.jpg" 
            alt="Kolkata" 
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-blue-900 font-semibold">Kolkata</p>
            <p className="text-gray-500 text-sm">25,000+ Properties</p>
          </div>
        </div>

        {/* City 7: Chennai */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="./images/chennai.jpg" 
            alt="Chennai" 
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-blue-900 font-semibold">Chennai</p>
            <p className="text-gray-500 text-sm">30,000+ Properties</p>
          </div>
        </div>

        {/* City 8: Ahmedabad */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="./images/ahamadabad.jpg" 
            alt="Ahmedabad" 
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-blue-900 font-semibold">Ahmedabad</p>
            <p className="text-gray-500 text-sm">19,000+ Properties</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCities;
