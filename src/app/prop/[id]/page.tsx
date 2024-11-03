"use client"; // Ensure this component is a client component

import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import Gap from "@/components/Gap";
import { useSession, signIn } from "next-auth/react"; // Import useSession and signIn

interface Image {
  url: string; // Assuming the image has a URL
  alt: string; // Assuming the image has an alt text
}

interface Property {
  id: string;
  propertyType: string;
  transactionType: string;
  location: {
    city: string;
    address: string;
  };
  price: number;
  features: string[];
  available: boolean;
  images: Image[]; // Change here: define images as an array
}

const PropertyPage = () => {
  const { id } = useParams(); // Use useParams to get the id from the URL
  const [property, setProperty] = useState<Property | null>(null);
  const { data: session, status } = useSession(); // Get session data and status
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Wait for the session to load

    // If there is no session, redirect to sign-in page
    if (!session) {
      signIn(); // Redirects to sign-in page
      return; // Prevent further execution
    }

    const fetchProperty = async () => {
      if (typeof id === "string") { // Ensure id is a string
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_HEAD}/properties/properties/${id}`
          );
          setProperty(response.data);
          addToRecentViews(id); // Now this is safe as id is a string
        } catch (error) {
          console.error("Error fetching property:", error);
          alert("Failed to fetch property details. Please try again later.");
          setProperty(null);
        }
      } else {
        console.error("Invalid property ID:", id);
      }
    };
    fetchProperty();
  }, [id, session, status]);

  // Function to add the property ID to recent views in local storage
  const addToRecentViews = (id: string) => {
    // Retrieve the current list of recent views, default to an empty array if null
    const recentViewsString = localStorage.getItem('recentViews');
    const recentViews = recentViewsString ? JSON.parse(recentViewsString) : []; // Handle null case
    console.log("Current Recent Views:", recentViews);
  
    // Check if the property ID is already in the list
    if (!recentViews.includes(id)) {
      // Add the property ID to the start of the array
      recentViews.unshift(id);
      console.log(`Added property ID ${id} to recent views.`);
    } else {
      console.log(`Property ID ${id} is already in the recent views.`);
    }
  
    // Limit to the last 10 property IDs
    if (recentViews.length > 10) {
      recentViews.pop(); // Remove the oldest entry
      console.log("Removed the oldest property ID to maintain a limit of 10.");
    }
  
    // Save back to local storage
    localStorage.setItem('recentViews', JSON.stringify(recentViews));
    console.log("Updated Recent Views in Local Storage:", recentViews);
  };
  
  if (!property) {
    return <div>Property not found</div>; // Display message if property is not found
  }

  return (
    <div className="container mx-auto p-6">
    <Gap />
    <Gap />
    <h1 className="text-3xl font-bold mb-4">
      {property.propertyType} for {property.transactionType}
    </h1>
    <p className="text-gray-600">
      {property.location.city}, {property.location.address}
    </p>

    <div className="flex flex-col md:flex-row justify-center items-center mt-4 mb-4">
      {property.images.map((img: Image, index: number) => (
        <img
          key={index} // Use a unique key
          src={`/images/${img.url}`} // Assuming img has a url property
          alt={img.alt} // Assuming img has an alt property
          className="w-full md:w-1/2 h-64 object-cover p-2"
        />
      ))}
    </div>

    <p className="text-lg mb-2">Price: ${property.price}</p>
    <p className="text-md mb-2">Features:</p>
    <ul className="list-disc list-inside">
      {property.features.map((feature: string, index: number) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className="text-md mt-4 bg-blue-500 text-white py-2 px-4 rounded border border-gray-400">
      Contact: {property.available ? "963358582" : "785515111"}
    </button>
    <p className="text-md mt-4">
      Availability: {property.available ? "Available" : "Not Available"}
    </p>
    <Gap />
    <Gap />
  </div>
  );
};

export default PropertyPage;
