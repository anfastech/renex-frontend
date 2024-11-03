"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
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

const RecentViews: React.FC = () => {
  const [properties, setProperties] = useState<PropertyData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const recentViews = JSON.parse(localStorage.getItem("recentViews") || "[]");
    if (recentViews.length > 0) {
      // Fetch properties based on the recent views
      const fetchProperties = async () => {
        const propertyPromises = recentViews.map((id: string) =>
          fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_HEAD}/properties/properties/${id}`
          ).then((response) => response.json())
        );

        try {
          const propertiesData = await Promise.all(propertyPromises);
          setProperties(propertiesData);
          console.log("Fetched Recent Properties:", propertiesData);
        } catch (error) {
          console.error("Error fetching properties:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProperties();
    } else {
      setLoading(false); // No recent views found
    }
  }, []);

  const loadProperties = () => {
    if (loading) return <p>Loading...</p>;

    return properties.map((item) => (
      <div
        key={item._id}
        className="relative bg-gray-300 flex-col rounded-lg justify-between border border-gray-400 cursor-pointer"
      >
        <Link href={`/prop/${item._id}`} passHref>
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
              Price: ₹{item.price.toLocaleString()}
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
        </Link>
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

  return (
    <main className="px-4 py-2 md:px-6 lg:px-10">
      <Gap />
      <h1 className="text-2xl font-bold mb-4">Recently Viewed Properties</h1>
      <section
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        id="productGrid"
      >
        {loadProperties()} {/* Render properties here */}
      </section>
      <Gap />
      <Gap />
    </main>
  );
};

export default RecentViews;
