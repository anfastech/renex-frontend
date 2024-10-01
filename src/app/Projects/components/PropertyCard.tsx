// components/PropertyCard.tsx
'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

interface PropertyCardProps {
  property: {
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
  };
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="shadow-lg rounded-lg p-5 bg-white">
      {/* Image */}
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded-lg" />

      {/* Favorited Icon */}
      <div className="absolute top-3 right-3 text-red-500">
        <FontAwesomeIcon icon={property.favorited ? solidHeart : regularHeart} />
      </div>

      {/* Property Info */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{property.price} <span className="text-sm text-gray-500">{property.perMonth}</span></h3>
        <p className="text-sm text-gray-500">{property.location}</p>

        {/* Icons for Bed, Bath, and Sqft */}
        <div className="flex items-center mt-3 text-sm text-gray-600">
          <span>{property.bed} Beds</span>
          <span className="mx-2">|</span>
          <span>{property.bath} Baths</span>
          <span className="mx-2">|</span>
          <span>{property.sqft}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
