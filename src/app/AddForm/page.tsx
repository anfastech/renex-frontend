"use client";
import React, { useState } from "react";
import CategorySection from "./components/CategorySection";
import InputField from "./components/InputField";
import Footer from "@/components/Footer";
import Gap from "@/components/Gap";

const DEFAULT_IMAGE_URL = "project-1.png";

export default function AddForm() {
  const [adTitle, setAdTitle] = useState("Good");
  const [description, setDescription] = useState("Anything");
  const [price, setPrice] = useState("5000.0");
  const [superBuiltUpArea, setSuperBuiltUpArea] = useState("6");
  const [carpetArea, setCarpetArea] = useState("6");
  const [city, setCity] = useState("Kuttipala");
  const [address, setAddress] = useState("Kuttipala");
  const [images, setImages] = useState<File[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length > 2) {
      setErrorMessage("You can upload a maximum of 2 images.");
      return;
    }
    setImages(selectedFiles);
  };

  // Upload images to S3 and get URLs
  const uploadImagesToS3 = async () => {
    const imageUrls = [];
    for (const image of images) {
      try {
        // Get presigned URL from backend
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HEAD}/api/s3/generate_presigned_url?file_name=${image.name}&file_type=${image.type}`);
        const presignedUrl = await res.text();

        // Upload image to S3
        await fetch(presignedUrl, {
          method: "PUT",
          headers: { "Content-Type": image.type },
          body: image,
        });

        imageUrls.push(presignedUrl.split("?")[0]); // Extract the image URL
      } catch (error) {
        console.error("Error uploading image:", error);
        throw new Error("Image upload failed.");
      }
    }
    return imageUrls;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!adTitle || !price || !city || isNaN(parseFloat(price))) {
      setErrorMessage("Please fill out required fields and enter a valid price.");
      return;
    }

    try {
      setIsSubmitting(true);
      const imageUrls = await uploadImagesToS3();

      const formData = {
        paid_ad: false,
        location: { city, address },
        transactionType: "rent",
        propertyType: "Building",
        images: imageUrls.map((url) => ({ url, alt: `Building in ${city}` })),
        price: parseFloat(price),
        features: ["Balcony", "Parking", "Garden"],
        available: true,
        adTitle,
        description,
        superBuiltUpArea: parseFloat(superBuiltUpArea),
        carpetArea: parseFloat(carpetArea),
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HEAD}/insert_property`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModalVisible(true);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Failed to post property.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-8">
      <Gap />
      <div className="wrapper mx-auto max-w-7xl px-4">
        <h1 className="text-3xl font-semibold text-center mb-6">Post Your Ad</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <CategorySection />
          <InputField label="Ad Title" placeholder="Enter title" value={adTitle} onChange={(e) => setAdTitle(e.target.value)} />
          <InputField label="Description" type="textarea" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <InputField label="Set a Price" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} />
          <InputField label="Super Built-up Area (ft²)" placeholder="Enter area" value={superBuiltUpArea} onChange={(e) => setSuperBuiltUpArea(e.target.value)} />
          <InputField label="Carpet Area (ft²)" placeholder="Enter area" value={carpetArea} onChange={(e) => setCarpetArea(e.target.value)} />
          <InputField label="City" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
          <InputField label="Address" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />

          {/* Image Upload Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Upload Image(s)</label>
            <input type="file" accept="image/*" multiple onChange={handleImageChange} />
            <p className="text-gray-500 text-sm">You can upload up to 2 images.</p>
          </div>

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

        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
      </div>
      <div className="h-24" />
      <div className="h-24" />
      <Footer />
    </section>
  );
}
