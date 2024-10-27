"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faSearch,
    faPlus,
    faStar,
    faUser,
    faDoorOpen,
    faCar,
    faTree,
    faWarehouse,
    faSwimmer,
    faHome as faHomeIcon,
    faSchool,
} from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gap from "@/components/Gap";

interface Property {
    _id: string;
    location: { city: string };
    transactionType: string;
    propertyType: string;
    price: number;
    image: { url: string; alt: string };
    features: string[];
}

const SearchPage = () => {
    const [data, setData] = useState<Property[]>([]);
    const [activeTransactionType, setActiveTransactionType] = useState<string>(
        "rent"
    );
    const [selectedLocation, setSelectedLocation] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [locationOptions, setLocationOptions] = useState<string[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/properties"); // Updated API endpoint
            if (!response.ok) throw new Error("Network response was not ok");

            //   const jsonData: Property[] = await response.json(); // changing this 
            const jsonData = await response.json();

            //     setData(jsonData);
            //     populateLocationDropdown(jsonData);
            // } catch (error) {
            //     console.error("Error fetching data:", error);
            // } finally {
            //     setLoading(false);
            // }
            // Check if data is an array or nested inside an object
            const propertiesArray = Array.isArray(jsonData) ? jsonData : jsonData.properties;

            if (!Array.isArray(propertiesArray)) {
                throw new Error("Expected an array of properties but received: " + typeof propertiesArray);
            }

            setData(propertiesArray); // Now set the array to state
            populateLocationDropdown(propertiesArray); // Populate location dropdown with valid data
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const populateLocationDropdown = (data: Property[]) => {
        const uniqueLocations = [
            ...new Set(data.map((item) => item.location.city)),
        ];
        setLocationOptions(uniqueLocations);
    };

    const loadProperties = () => {
        if (!Array.isArray(data)) {
            console.error("Data is not an array:", data);
            return [];
        }

        const filteredData = data.filter(
            (item) =>
                (!selectedLocation || item.location.city === selectedLocation) &&
                item.transactionType === activeTransactionType
        );

        return filteredData.map((item) => (
            <div
                key={item._id}
                className="relative bg-gray-300 flex-col rounded-lg justify-between border border-gray-400"
            >
                <div className="left-0 bg-black h-20 w-full flex items-center justify-center rounded-md">
                    <img
                        src={"/images/" + item.image.url}
                        alt={item.image.alt}
                        className="h-full w-full object-cover rounded-md"
                    />
                </div>
                <div className="flex-1 p-3">
                    <h2 className="text-xl font-bold">{item.location.city}</h2>
                    <p className="text-gray-700 text-xs">
                        For{" "}
                        {item.transactionType.charAt(0).toUpperCase() +
                            item.transactionType.slice(1)}{" "}
                        • {item.propertyType}
                    </p>
                    <p className="font-bold mt-2 text-green-600">
                        Price: ${item.price.toLocaleString()}
                    </p>
                    <ul className="mt-2 space-y-1 text-gray-600 text-xs">
                        {item.features.map((feature) => (
                            <li className="flex items-center space-x-2" key={feature}>
                                <FontAwesomeIcon icon={getFeatureIcon(feature)} />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ));
    };

    const getFeatureIcon = (feature: string) => {
        if (feature.toLowerCase().includes("balcony")) return faDoorOpen;
        if (feature.toLowerCase().includes("parking")) return faCar;
        if (feature.toLowerCase().includes("garden")) return faTree;
        if (feature.toLowerCase().includes("garage")) return faWarehouse;
        if (feature.toLowerCase().includes("swimming pool")) return faSwimmer;
        if (feature.toLowerCase().includes("terrace")) return faHomeIcon;
        if (feature.toLowerCase().includes("near school")) return faSchool;
        return faHome; // Default icon
    };

    const handleTransactionChange = (type: string) => {
        setActiveTransactionType(type);
        loadProperties();
    };

    return (
        <div className="bg-gray-100">
            <Header />

            <div className="h-24" /> {/* Spacer for header */}

            <main className="p-4">
                <div className="flex items-center space-x-2 bg-gray-300 p-2 rounded-lg mb-4 border border-gray-400">
                    <select
                        id="locationDropdown"
                        className="w-full bg-gray-300 p-2 rounded"
                        value={selectedLocation} // Set controlled component
                        onChange={(e) => {
                            setSelectedLocation(e.target.value);
                            loadProperties(); // Reload properties when location changes
                        }}
                    >
                        <option value="" disabled>
                            Select Location
                        </option>{" "}
                        {/* No default selection */}
                        {locationOptions.map((location) => (
                            <option key={location} value={location}>
                                {location}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex justify-between mb-4">
                    {["rent", "buy", "sell"].map((type) => (
                        <button
                            key={type}
                            className={`property-button ${activeTransactionType === type
                                ? "bg-blue-500 text-white"
                                : "bg-gray-300 text-black"
                                } py-2 px-8 rounded-lg border border-gray-400`}
                            onClick={() => handleTransactionChange(type)}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>

                <p className="text-gray-500 mb-4">
                    renex &gt;{" "}
                    <span id="breadcrumbLocation">
                        {selectedLocation || "Featured"}
                    </span>{" "}
                    &gt;{" "}
                    <span id="breadcrumbTransaction">
                        {activeTransactionType.charAt(0).toUpperCase() +
                            activeTransactionType.slice(1)}
                    </span>
                </p>

                {loading ? (
                    <div className="text-gray-400 flex justify-center items-center h-16">
                        <i>Loading....</i>
                    </div>
                ) : (
                    <section className="grid grid-cols-2 gap-4" id="productGrid">
                        {loadProperties()} {/* Render properties here */}
                    </section>
                )}
            </main>

            {/* <Footer /> */}

            {/* <footer className="fixed bottom-0 left-0 right-0 bg-gray-200 p-4 shadow-lg">
                <div className="flex justify-between items-center">
                    <a href="/">
                        <button aria-label="Home">
                            <FontAwesomeIcon icon={faHome} className="text-2xl" />
                        </button>
                    </a>
                    <a href="/SearchPage">
                        <button aria-label="Search">
                            <FontAwesomeIcon icon={faSearch} className="text-2xl" />
                        </button>
                    </a>
                    <button
                        className="bg-blue-500 text-white p-4 rounded-full"
                        aria-label="Add"
                    >
                        <FontAwesomeIcon icon={faPlus} className="text-2xl" />
                    </button>
                    <button aria-label="Favorites">
                        <FontAwesomeIcon icon={faStar} className="text-2xl" />
                    </button>
                    <button aria-label="Profile">
                        <FontAwesomeIcon icon={faUser} className="text-2xl" />
                    </button>
                </div>
            </footer> */}
            <Gap />
        </div>
    );
};

export default SearchPage;
