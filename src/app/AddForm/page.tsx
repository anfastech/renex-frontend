"use client";
import React, { useState } from "react";
import CategorySection from "./components/CategorySection";
import InputField from "./components/InputField";
import Footer from "@/components/Footer";
import Gap from "@/components/Gap";

const DEFAULT_IMAGE_URL = "project-1.png"; // Default image URL

export default function AddForm() {
  // Manage state for each input
  const [adTitle, setAdTitle] = useState("Good");
  const [description, setDescription] = useState("Anything");
  const [price, setPrice] = useState("5000.0");
  const [superBuiltUpArea, setSuperBuiltUpArea] = useState("6");
  const [carpetArea, setCarpetArea] = useState("6");
  const [city, setCity] = useState("Kuttipala");
  const [address, setAddress] = useState("Kuttipala");
  const [isModalVisible, setModalVisible] = useState(false); // Modal state
  const [errorMessage, setErrorMessage] = useState(""); // Error state
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset error message
    setErrorMessage("");

    // Basic validation
    if (!adTitle || !price || !city || isNaN(parseFloat(price))) {
      setErrorMessage("Please fill out required fields and enter a valid price.");
      return;
    }

    // Prepare data to match your MongoDB schema
    const formData = {
      paid_ad: false,
      location: {
        city,
        address,
      },
      transactionType: "rent",
      propertyType: "Building",
      image: {
        url: DEFAULT_IMAGE_URL,
        alt: `Building in ${city}`,
      },
      price: parseFloat(price),
      features: ["Balcony", "Parking", "Garden"],
      available: true,
      adTitle,
      description,
      superBuiltUpArea: parseFloat(superBuiltUpArea),
      carpetArea: parseFloat(carpetArea),
    };

    // Log form data to console for now
    console.log("Form Data:", formData);

    // Here, you would typically send this data to your backend (MongoDB)
    try {
      setIsSubmitting(true); // Start loading state

      const response = await fetch("http://127.0.0.1:8000/insert_property", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If the post is successful, show the success modal
        setModalVisible(true);
      } else {
        // Handle any errors from the backend
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Failed to post property.");
      }
    } catch (error) {
      // Catch network or unexpected errors
      setErrorMessage("An error occurred. Please try again later.");
      console.log(error);
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  return (
    <section className="pt-8">
      <Gap />
      <div className="wrapper mx-auto max-w-7xl px-4">
        <h1 className="text-3xl font-semibold text-center mb-6">Post Your Ad</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md border border-gray-300"
        >
          {/* Category Section */}
          <CategorySection />

          {/* Input Fields */}
          <InputField
            label="Ad Title"
            placeholder="Enter title"
            value={adTitle}
            onChange={(e) => setAdTitle(e.target.value)}
          />
          <InputField
            label="Description"
            type="textarea"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <InputField
            label="Set a Price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <InputField
            label="Super Built-up Area (ft²)"
            placeholder="Enter area"
            value={superBuiltUpArea}
            onChange={(e) => setSuperBuiltUpArea(e.target.value)}
          />
          <InputField
            label="Carpet Area (ft²)"
            placeholder="Enter area"
            value={carpetArea}
            onChange={(e) => setCarpetArea(e.target.value)}
          />
          <InputField
            label="City"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <InputField
            label="Address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`block text-center px-4 py-2 border border-transparent rounded-md bg-blue-600 text-white font-semibold text-lg ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
              } transition`}
            >
              {isSubmitting ? "Posting..." : "Post Now"}
            </button>
          </div>
        </form>

        {/* Modal for Success */}
        {isModalVisible && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-green-600 mb-4">Success!</h2>
              <p>Your property has been posted successfully.</p>
              <button
                onClick={() => setModalVisible(false)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
      </div>
      <div className="h-24" />
      <Footer />
    </section>
  );
}
