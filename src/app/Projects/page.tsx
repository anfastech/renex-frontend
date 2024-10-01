// pages/projects.tsx
'use client';
import { useState, useEffect } from 'react';
import PropertyCard from './components/PropertyCard';

interface Property {
  id: number;
  name: string;
  price: string;
  perMonth: string;
  location: string;
  image: string;
  bed: number;
  bath: number;
  sqft: string;
  favorited: boolean;
}

const ProjectPage = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    // Fetching data from JSON file
    const fetchProperties = async () => {
      const response = await fetch('/data/properties.json');
      const data = await response.json();
      setProperties(data);
    };
    
    fetchProperties();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
