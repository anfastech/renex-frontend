"use client"
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faHome,
    faSearch,
    faPlus,
    faStar,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

interface PropertyData {
    location: {
        city: string;
    };
    transactionType: string;
    propertyType: string;
    price: number;
    image: {
        url: string;
        alt: string;
    };
    features: string[];
    paid_ad: boolean; // Property to check for paid ads
}

const RenexApp: React.FC = () => {
    const [properties, setProperties] = useState<PropertyData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [locationOptions, setLocationOptions] = useState<string[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<string>('');

    useEffect(() => {
        const loadProperties = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/properties');
                const data = await response.json();
                console.log("Full API Response:", data); // Log full response

                if (Array.isArray(data.properties)) {
                    // Filter properties with paid_ad === true
                    const paidAdProperties = data.properties.filter((property: PropertyData) => {
                        console.log("Inspecting property:", property); // Log each property
                        return property.paid_ad === true;
                    });

                    setProperties(paidAdProperties);
                    console.log("Filtered properties with paid ads:", paidAdProperties); // Log filtered properties

                    // Extract unique locations
                    const uniqueLocations = Array.from(new Set(paidAdProperties.map(property => property.location.city)));
                    setLocationOptions(uniqueLocations); // Set unique locations
                } else {
                    console.error("Invalid response format. Expected 'properties' to be an array.");
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadProperties();
    }, []);

    // Render loading state or property cards
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Properties</h1>
            {loading ? (
                <p>Loading properties...</p>
            ) : (
                <>
                    <select 
                        id="locationDropdown" 
                        onChange={(e) => setSelectedLocation(e.target.value)} 
                        className="mb-4"
                    >
                        <option value="" disabled selected>Select Location</option>
                        {locationOptions.map(location => (
                            <option key={location} value={location}>
                                {location}
                            </option>
                        ))}
                    </select>
                    <div id="productGrid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {properties.map(item => (
                            <div key={item.image.url} className="relative bg-gray-300 flex-col rounded-lg justify-between border border-gray-400">
                                <div className="left-0 bg-black h-20 w-full flex items-center justify-center rounded-md">
                                    <img src={item.image.url} alt={item.image.alt} className="h-full w-full object-cover rounded-md" />
                                </div>
                                <div className="flex-1 p-3">
                                    <h2 className="text-xl font-bold">{item.location.city}</h2>
                                    <p className="text-lg">{item.propertyType}</p>
                                    <p className="text-green-600 font-semibold">${item.price.toLocaleString()}</p>
                                    <ul>
                                        {item.features.map(feature => (
                                            <li key={feature} className="flex items-center space-x-2">
                                                <FontAwesomeIcon icon={faStar} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default RenexApp;
