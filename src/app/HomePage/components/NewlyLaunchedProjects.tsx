import React from 'react';

const projects = [
  {
    title: 'Trifecta Vanto',
    location: 'Sarjapur Road, Bangalore East',
    price: '₹ 1.02 - 1.34 Cr',
    size: '2, 3 BHK Apartments',
    priceIncrease: '10.9% price increase in last 3 months',
    image: './images/apartment2.jpg',
  },
  {
    title: 'Sun Siri Green Delight',
    location: 'Kankipadu, Vijayawada',
    price: '₹ 23.38 - 69.16 L',
    size: '2, 3 BHK Apartments',
    priceIncrease: '19.2% price increase in last 3 months',
    image: './images/apartment3.jpg',
  },
  {
    title: 'Raamah Ellemen',
    location: 'Sevasi, Vadodara',
    price: '₹ 1.94 - 4.45 Cr',
    size: '2, 3 BHK Apartments',
    priceIncrease: '25.9% price increase in last 3 months',
    image: './images/apartment4.jpg',
  },
  {
    title: 'Green Hills Residency',
    location: 'New Alipore, Kolkata',
    price: '₹ 75.00 L - 1.20 Cr',
    size: '2, 3 BHK Apartments',
    priceIncrease: '12.5% price increase in last 3 months',
    image: './images/apartment5.jpg',
  },
];

const NewlyLaunchedProjects: React.FC = () => {
  return (
    <div className="bg-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-blue-900">Newly Launched Projects</h2>
          <p className="text-gray-500">Limited launch offers available</p>
        </div>

        {/* Cards Container */}
        <div className="flex space-x-4 overflow-x-auto no-scrollbar">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md w-80 flex-shrink-0">
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded">NEW LAUNCH</span>
                  <span className="text-xs text-blue-700 font-semibold">RERA</span>
                </div>
                <img src={project.image} alt="project image" className="rounded-lg mb-4 w-full h-auto" />
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.location}</p>
                <p className="text-lg font-semibold text-blue-900">{project.price}</p>
                <p className="text-sm text-gray-600">{project.size}</p>
                <p className="text-sm text-green-600 font-semibold">{project.priceIncrease}</p>
              </div>
              <div className="p-4 bg-blue-50 flex justify-between items-center">
                <span className="text-sm text-gray-500">@zero brokerage</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  View Number
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewlyLaunchedProjects;
