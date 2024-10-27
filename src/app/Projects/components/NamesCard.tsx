'use client';
import React, { useEffect, useState } from 'react';

interface LocationData {
  city: string;
  address: string;
}

interface PropertyData {
  paid_ad: boolean;
  location: LocationData;
  transactionType: string;
  propertyType: string;
  image: {
    url: string;
    alt: string;
  };
  price: number;
  features: string[];
  available: boolean;
}

const NamesComponent: React.FC = () => {
  const [properties, setProperties] = useState<PropertyData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://renex-backend.onrender.com/properties') // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log("Full API Response:", data); // Log full response

        if (Array.isArray(data.properties)) {
          // Filter properties with paid_ad === true
          const paidAdProperties = data.properties.filter((property: PropertyData) => {
            console.log("Inspecting property:", property); // Log each property
            return property.paid_ad === true;
          });

          setProperties(paidAdProperties);
          console.log("Filtered properties with paid ads:", paidAdProperties); // Log filtered properties
        } else {
          console.error("Invalid response format. Expected 'properties' to be an array.");
        }
        
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='bg-blue-400' style={{ minHeight: "200px", fontSize: "40px" }}>
      <center>
        <h1>Properties with Paid Ads (Locations)</h1>
        {
          loading ? (
            <h2>Loading...</h2>
          ) : (
            <ul className="list-disc px-2 space-y-4">
              {
                properties.length > 0 ? properties.map((property, index) => (
                  <li className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md text-lg font-medium text-gray-800 hover:bg-blue-100 hover:border-blue-400 hover:text-blue-600 transition-all duration-300 flex flex-col justify-center align-center space-x-3" key={index}>
                    <div><strong>City:</strong> {property.location.city}</div>
                    {/* <div><strong>Address:</strong> {property.location.address}</div> */}
                  </li>
                )) : (
                  <h2>No properties with paid ads found.</h2>
                )
              }
            </ul>
          )
        }
      </center>
      <br />
    </div>
  );
};

export default NamesComponent;

