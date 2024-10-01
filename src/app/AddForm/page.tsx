import React from "react";
import CategorySection from "./components/CategorySection";
import DetailsSection from "./components/DetailsSection";
import InputField from "./components/InputField";
import FileUpload from "./components/FileUpload";
import LocationVerification from "./components/LocationVerification";
import ReviewDetails from "./components/ReviewDetails";

// const AddForm: React.FC = () => {
  export default function AddForm()  {
  return (
    <section className="pt-8">
      <div className="wrapper mx-auto max-w-7xl px-4">
        <h1 className="text-3xl font-semibold text-center mb-6">Post Your Ad</h1>
        <section className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <CategorySection />
          <DetailsSection />
          
          <InputField label="Super Built-up Area (ft)" placeholder="Enter area" />
          <InputField label="Carpet Area (ft)" placeholder="Enter area" />
          <InputField label="Maintenance (Monthly)" placeholder="Enter amount" />
          <InputField label="Total Floors" placeholder="Enter number" />
          <InputField label="Floor No" placeholder="Enter number" />
          <InputField label="Facing" placeholder="Enter direction" />
          <InputField label="Number of Projects" placeholder="Enter number" />
          <InputField label="Ad Title" placeholder="Enter title" />
          <InputField label="Description" type="textarea" placeholder="Enter description" />
          <InputField label="Set a Price" placeholder="Enter price" />

          <FileUpload label="Upload Up to 20 Photos" />
          <LocationVerification />

          <ReviewDetails />

          <div className="mb-6">
            <a href="#" className="block text-center px-4 py-2 border border-transparent rounded-md bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition">
              Post Now
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

// export default AddForm;
