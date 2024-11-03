"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link from next/link
import Gap from "@/components/Gap";

interface LocationData {
  city: string;
  address: string;
}

interface PropertyData {
  _id: string;
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

const PropertyList: React.FC = () => {
  const [properties, setProperties] = useState<PropertyData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTransactionType, setActiveTransactionType] = useState<string>("rent");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/properties") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.properties)) {
          const paidAdProperties = data.properties.filter(
            (property: PropertyData) => property.paid_ad === true
          );
          setProperties(paidAdProperties);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const loadProperties = () => {
    if (loading) return <p>Loading properties...</p>; // Display loading message

    const filteredData = properties.filter(
      (item) => item.transactionType === activeTransactionType
    );

    return filteredData.map((item) => (
      <div key={item._id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Gap />
        <Gap />
        <Gap />
        <Gap />
        <Link href={`/prop/${item._id}`} passHref>
          <div className="relative bg-gray-300 flex-col rounded-lg justify-between border border-gray-400 cursor-pointer p-4">
            <h2 className="text-lg font-semibold">{item.propertyType}</h2>
            <p>{item.location.city}</p>
            <p>${item.price}</p>
            {/* You can add more property info here, like images or features */}
          </div>
        </Link>
      </div>
    ));
  };

  return (
    <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {loadProperties()}
    </section>
  );
};

export default PropertyList;
