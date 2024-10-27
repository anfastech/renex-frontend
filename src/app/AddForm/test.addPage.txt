// AddForm.tsx
"use client";
import React, { useState } from "react";
import CategorySection from "./components/CategorySection";
import InputField from "./components/InputField";

export default function AddForm() {
  // Manage state for each input
  const [adTitle, setAdTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [superBuiltUpArea, setSuperBuiltUpArea] = useState("");
  const [carpetArea, setCarpetArea] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Error state
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset error message
    setErrorMessage("");

    // Basic validation
    if (!adTitle || !price || !city || isNaN(parseFloat(price))) {
      setErrorMessage("Please fill out required fields and enter a valid price.");
      return;
    }

    // Collect form data
    const formData = {
      adTitle,
      description,
      price: parseFloat(price),
      superBuiltUpArea,
      carpetArea,
      location: {
        city,
        address,
      },
      image: {
        url: "project-2.png", // Default image placeholder
        alt: `Property in ${city}`,
      },
    };

    // Log form data to console
    console.log("Form Data:", formData);

    // Optionally reset the form fields after submission
    setAdTitle("");
    setDescription("");
    setPrice("");
    setSuperBuiltUpArea("");
    setCarpetArea("");
    setCity("");
    setAddress("");
  };

  return (
    <section className="pt-8">
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

        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
      </div>
      <div className="h-24" />
    </section>
  );
}
