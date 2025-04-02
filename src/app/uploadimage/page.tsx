"use client";
import Gap from "@/components/Gap";
import React, { useState } from "react";
import Slider from "../slider/sliderMin";

export default function ImageUploadForm() {
  const [images, setImages] = useState<File[]>([]); // State to store selected images
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]); // State to store uploaded image URLs
  const [error, setError] = useState<string | null>(null); // State to store any error messages
  const [propertyType] = useState<string>("apartment"); // Example for property type input
  const [pincode] = useState<string>("676501"); // Example pincode

  // Function to handle image selection
  const handleImageSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages(Array.from(event.target.files)); // Convert FileList to array
      setUploadedUrls([]); // Reset uploaded URLs when selecting new images
      setError(null); // Reset errors
    }
  };

  // Function to create the file name in the required format
  const createFileName = (file: File) => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
  
    // Extract file extension from MIME type (e.g., image/jpeg => jpeg)
    const fileExtension = file.type.split('/')[1]; // Get the part after the slash
  
    // Generate the file name using the correct extension
    return `property-${propertyType}-${pincode}-${day}${month}${year}-${hours}${minutes}${seconds}.${fileExtension}`;
  };

  // Function to upload images to S3
  const uploadImagesToS3 = async () => {
    const imageUrls: string[] = [];
    for (const image of images) {
      try {
        const fileName = createFileName(image); // Generate file name

        // Get presigned URL from backend with the dynamically generated file name
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_HEAD}/api/s3/generate_presigned_url?file_name=${fileName}&file_type=${image.type}`
        );
        if (!res.ok) throw new Error("Failed to get presigned URL");

        let presignedUrl = await res.text();

        // Log the presigned URL to check it
        console.log("Received presigned URL:", presignedUrl);

        // Trim any unwanted quotes or extra characters from the URL
        presignedUrl = presignedUrl.replace(/["]/g, ''); // Remove any quotes around the URL

        // Upload image to S3
        const uploadRes = await fetch(presignedUrl, {
          method: "PUT",
          headers: { "Content-Type": image.type },
          body: image,
        });
        if (!uploadRes.ok) throw new Error("Failed to upload image to S3");

        // Assuming the URL returned is the S3 URL with the query string
        const imageUrl = presignedUrl.split("?")[0]; // Remove query string from the URL
        imageUrls.push(imageUrl); // Add the uploaded image URL to the array
      } catch (error) {
        console.error("Error uploading image:", error);
        setError("Image upload failed.");
        throw error; // re-throw error to handle in calling function
      }
    }
    return imageUrls; // Return the list of uploaded image URLs
  };

  // Form submit handler to manage the image upload
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null); // Reset any previous errors

    try {
      const urls = await uploadImagesToS3(); // Call the function to upload images to S3
      setUploadedUrls(urls); // Set the uploaded URLs in the state
      console.log("Uploaded Image URLs:", urls);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <Gap />
      <Gap />
      <Gap />
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="imageUpload">Upload Images:</label>
        <input id="imageUpload" type="file" multiple onChange={handleImageSelection} />
        <button className="px-4 py-2 border border-transparent rounded-md bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition" type="submit">Upload</button>
      </form>

      {error && <p className="error">{error}</p>} {/* Display any error messages */}

      <div>
        <h3>Uploaded Images:</h3>
        {uploadedUrls.length > 0 ? (
          uploadedUrls.map((url, index) => (
            <div key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </div>
          ))
        ) : (
          <p>No images uploaded yet.</p>
        )}
      </div>
      <Slider />
    </div>
  );
}
