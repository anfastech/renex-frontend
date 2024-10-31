"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCar,
  faTree,
  faWarehouse,
  faSwimmer,
  faHome as faHomeIcon,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";

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

const FeacturedAds: React.FC = () => {
  const [properties, setProperties] = useState<PropertyData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTransactionType, setActiveTransactionType] =
    useState<string>("rent");

  useEffect(() => {
    fetch("https://renex-backend.onrender.com/properties") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log("Full API Response:", data); // Log full response

        if (Array.isArray(data.properties)) {
          // Filter properties with paid_ad === true
          const paidAdProperties = data.properties.filter(
            (property: PropertyData) => {
              console.log("Inspecting property:", property); // Log each property
              return property.paid_ad === true;
            }
          );

          setProperties(paidAdProperties);
          console.log("Filtered properties with paid ads:", paidAdProperties); // Log filtered properties
        } else {
          console.error(
            "Invalid response format. Expected 'properties' to be an array."
          );
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const loadProperties = () => {
    if (loading) return [];

    const filteredData = properties.filter(
      (item) => item.transactionType === activeTransactionType
    );

    return filteredData.map((item, index) => (
      <div
        key={item._id}
        className="relative bg-gray-300 flex-col rounded-lg justify-between border border-gray-400 cursor-pointer"
      >
        <div className="left-0 bg-black h-20 w-full flex items-center justify-center rounded-md">
          <img
            src={"/images/" + item.image.url}
            alt={item.image.alt}
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="flex-1 p-3">
          <h2 className="text-xl font-bold">{item.location.city}</h2>
          <p className="text-gray-700 text-xs">
            For{" "}
            {item.transactionType.charAt(0).toUpperCase() +
              item.transactionType.slice(1)}{" "}
            • {item.propertyType}
          </p>
          <p className="font-bold mt-2 text-green-600">
            Price: ${item.price.toLocaleString()}
          </p>
          <ul className="mt-2 space-y-1 text-gray-600 text-xs">
            {item.features.map((feature) => (
              <li className="flex items-center space-x-2" key={feature}>
                <FontAwesomeIcon icon={getFeatureIcon(feature)} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Example usage of index */}
        <p className="text-gray-500 text-xs">Index: {index}</p>{" "}
        {/* Display index */}
      </div>
    ));
  };

  const getFeatureIcon = (feature: string) => {
    if (feature.toLowerCase().includes("balcony")) return faHomeIcon;
    if (feature.toLowerCase().includes("parking")) return faCar;
    if (feature.toLowerCase().includes("garden")) return faTree;
    if (feature.toLowerCase().includes("garage")) return faWarehouse;
    if (feature.toLowerCase().includes("swimming pool")) return faSwimmer;
    if (feature.toLowerCase().includes("terrace")) return faHomeIcon;
    if (feature.toLowerCase().includes("near school")) return faSchool;
    return faHome; // Default icon
  };

  const handleTransactionChange = (type: string) => {
    setActiveTransactionType(type);
  };

  return (
    <main className="px-4 py-2 md:px-6 lg:px-10">
      {/* Rent, Buy, Sell Buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-4">
        {["rent", "buy", "sell"].map((type) => (
          <button
            key={type}
            className={`property-button ${
              activeTransactionType === type
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            } py-2 px-6 md:px-8 lg:px-10 rounded-lg border border-gray-400`}
            onClick={() => handleTransactionChange(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Breadcrumb Section */}
      <p className="text-gray-500 mb-4 text-sm md:text-base lg:text-lg">
        renex &gt; Featured &gt;{" "}
        <span id="activeLabel">
          {activeTransactionType.charAt(0).toUpperCase() +
            activeTransactionType.slice(1)}
        </span>
      </p>

      {/* Product Grid */}
      <section
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        id="productGrid"
      >
        {loadProperties()} {/* Render properties here */}
      </section>
    </main>
  );
};

export default FeacturedAds;
