"use client"; // Ensure this component is a client component

import { useParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import Gap from "@/components/Gap";
import { useSession, signIn } from "next-auth/react"; // Import useSession and signIn
import Slider from "react-slick"; // Assuming you are using react-slick for sliders

// Slider settings (adjust as per your requirement)
const mainSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const thumbnailSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

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

  if (!property) {
    return <div>Property not found</div>; // Display message if property is not found
  }

  return (
    <section className="wrapper p-4 md:p-8 bg-gray-50">
      <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-4 text-gray-800">
        {property.propertyType} for {property.transactionType}
      </h3>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Carousel Section */}
        <div className="md:w-3/5">
          <div className="flex justify-between items-center mb-4 text-gray-600 bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="flex items-center gap-3">
              <img
                src="/images/Group (4).png"
                alt="Location Icon"
                className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity duration-200"
              />
              <h4 className="text-lg font-semibold text-gray-700 transition-colors duration-200 hover:text-blue-600">
                {property.location.city}, {property.location.address}
              </h4>
            </div>
            <h3 className="text-xl font-bold text-green-600 transition-transform duration-200 hover:text-green-700">
              ${property.price}
            </h3>
          </div>

          <Slider {...mainSliderSettings} className="mainSlider rounded-lg overflow-hidden h-64 md:h-80 shadow-lg">
            {property.images?.map((img, index) => (
              <div key={index}>
                <img src={`/images/${img.url}`} alt={img.alt} />
              </div>
            ))}
          </Slider>

          <Slider {...thumbnailSliderSettings} className="thumbnailSlider mt-4 h-24 overflow-hidden rounded-lg">
            {property.images?.map((img, index) => (
              <div key={index}>
                <img src={`/images/${img.url}`} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Contact Agent Section */}
        <div className="shadow-md bg-white rounded-lg p-6 w-full md:w-1/3 hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="text-center">
            <img
              src="/images/Ellipse 2.png"
              alt="Agent"
              className="mx-auto mb-4 w-20 h-20 rounded-full border-4 border-blue-200 transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            <h3 className="py-2 text-lg font-semibold text-gray-800 fade-in">Micheal James</h3>
            <h4 className="text-gray-500 mb-4 fade-in delay-100">Real Estate Specialist</h4>
            <a
              href="#"
              className="py-2 px-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-200 inline-flex items-center gap-2 transform hover:scale-105"
            >
              <i className="bx bx-phone"></i> VIEW PHONE
            </a>
            <a
              href="/send-message"
              className="py-2 px-5 mt-4 border border-blue-600 text-blue-600 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-200 inline-flex items-center gap-2 transform hover:scale-105"
            >
              <i className="bx bx-envelope"></i> SEND MESSAGE
            </a>
          </div>
        </div>
      </div>

      {/* General Information Section */}
      <div className="mt-8">
        <h1 className="text-xl font-semibold mb-4 text-gray-800">General Information</h1>
        <div className="flex flex-col md:flex-row gap-8 bg-white shadow-md p-4 rounded-lg">
          <div className="w-full md:w-1/2">
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between">
                <span className="font-medium text-gray-500">Advertise No</span>
                <span className="text-red-600 font-semibold">0-1234</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-gray-500">Published Date</span>
                <span>20 November 2020</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-gray-500">Advertise Status</span>
                <span>Daily Rental</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-gray-500">Housing Shape</span>
                <span>Apartment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Explanation Section */}
      <div className="shadow-md bg-white w-full mt-8 py-6 px-6 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Explanation</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac convallis tellus pellentesque non odio consectetur bibendum.</p>
      </div>

      {/* Location Information Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Location Information</h2>
        <div className="shadow-md bg-white mt-4 py-4 px-4 rounded-lg">
          <img
            src="/images/Mapsicle Map.png"
            alt="Map Location"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeIn 0.6s ease-in-out both; }
        .fade-in.delay-100 { animation-delay: 0.1s; }
      `}</style>
    </section>
  );
};

export default PropertyPage;
