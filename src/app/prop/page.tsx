import React from "react";
import Gap from "@/components/Gap";
import PropertyList from "./list";

const PropertyPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Gap />
      <Gap />
      <Gap />
      <Gap />
      <h1 className="text-2xl font-bold text-center mb-6">Property Listings</h1>
      <PropertyList />
    </div>
  );
};

export default PropertyPage;
