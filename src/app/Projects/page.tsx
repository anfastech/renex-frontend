"use client";
import React, { useState, FormEvent } from 'react';

const DEFAULT_IMAGE = {
    url: "project-2.png",
    alt: "Default image"
};

const DEFAULT_LOCATION = {
    city: "Sample City",
    address: "789 Lake View"
};

const DEFAULT_PRICE = {
    amount: 1000.00 // Example price
};

const DEFAULT_PROPERTY = {
    paid_ad: true,
    location: DEFAULT_LOCATION,
    transactionType: "rent",
    propertyType: "Building",
    image: DEFAULT_IMAGE,
    price: DEFAULT_PRICE,
    features: ["Feature 1", "Feature 2"],
    available: true
};

const PropertyForm: React.FC = () => {
    const [property, setProperty] = useState(DEFAULT_PROPERTY);
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProperty({
            ...property,
            [name]: value
        });
    };

    console.log(handleChange);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitting Property:", property); // Log the property data

        try {
            const response = await fetch('http://127.0.0.1:8000/insert_property', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(property)
            });
            const result = await response.json();
            if (response.ok) {
                setMessage(`Property added successfully! ID: ${result.id}`);
            } else {
                setMessage(`Error: ${result.detail}`);
            }
        } catch (error: unknown) {
            // Type assertion to extract the error message
            if (error instanceof Error) {
                setMessage(`Network error: ${error.message}`);
            } else {
                setMessage(`Unknown error occurred`);
            }
        }
    };

    return (
        <div>
            <h2>Add Property</h2>
            <form onSubmit={handleSubmit}>
                <button className='block text-center px-4 py-2 border border-transparent rounded-md bg-blue-600 text-white font-semibold text-lg ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
              } transition' type="submit">Add Property</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default PropertyForm;
