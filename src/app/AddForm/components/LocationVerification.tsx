import React from "react";

const LocationVerification: React.FC = () => {
  return (
    <div className="mb-6">
      <h4 className="text-xl font-medium mb-4">Confirm Your Location</h4>
      <input type="text" className="px-4 py-2 border border-gray-300 rounded-md w-full" placeholder="Enter location" />
    </div>
  );
};

export default LocationVerification;
