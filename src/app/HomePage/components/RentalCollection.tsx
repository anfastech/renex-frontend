import React from 'react';

const RentalCollection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1 mb-4 md:mb-0">
            <img 
              src="./images/three.webp" 
              alt="Rental Collection Image 1" 
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <img 
              src="./images/two.webp" 
              alt="Rental Collection Image 2" 
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalCollection;
