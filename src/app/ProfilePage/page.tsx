"use client"; // Add this line at the top of the file

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Footer from "@/components/Footer";
import Gap from "@/components/Gap";
import InputField from "./components/InputField";
import Modal from "./components/Modal"; // Import the modal component
// import { ADDRESS_DATA, Country, State, District, Town } from "./userData";
import { ADDRESS_DATA, State } from "./userData";

const DEFAULT_USER_DATA = {
  name: "",
  email: "",
  phone: "",
  country: "",
  state: "",
  district: "",
  mainTown: "",
};

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(DEFAULT_USER_DATA);
  const [newData, setNewData] = useState(DEFAULT_USER_DATA);
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  const [step, setStep] = useState(1); // Track the current step

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/auth/signin");
    }
  }, [status]);

  useEffect(() => {
    if (typeof window !== "undefined" && session) {
      const initialUserData = {
        name: session.user?.name || "",
        email: session.user?.email || "",
        phone: "",
        country: "",
        state: "",
        district: "",
        mainTown: "",
      };

      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        const storedData = JSON.parse(storedUserData);
        initialUserData.name = storedData.name || initialUserData.name;
        initialUserData.email = storedData.email || initialUserData.email;
        initialUserData.phone = storedData.phone || initialUserData.phone;
        initialUserData.country = storedData.country || initialUserData.country;
        initialUserData.state = storedData.state || initialUserData.state;
        initialUserData.district =
          storedData.district || initialUserData.district;
        initialUserData.mainTown =
          storedData.mainTown || initialUserData.mainTown;
      }

      setUserData(initialUserData);
      setNewData(initialUserData);
    }
  }, [session]);

  const handleUpdateProfile = () => {
    setModalVisible(true); // Open the modal when "Update Profile" is clicked
  };

  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (step === 1) {
      // Validate first step
      if (!newData.name || !newData.email || !newData.phone) {
        alert("Please fill out all required fields.");
        return;
      }
      setStep(2); // Go to the next step for entering the address
    } else if (step === 2) {
      // Validate second step
      if (
        !newData.country ||
        !newData.state ||
        !newData.district ||
        !newData.mainTown
      ) {
        alert("Please complete your address.");
        return;
      }

      // Store data in local storage after both steps
      localStorage.setItem("userData", JSON.stringify(newData));
      alert("Profile updated successfully!");
      setModalVisible(false); // Close the modal
    }
  };

  const handleAddressChange = (
    field: "country" | "state" | "district" | "mainTown",
    value: string
  ) => {
    setNewData((prevData) => ({
      ...prevData,
      [field]: value, // Directly update the field based on the input
    }));
  };

  const handlePush = async () => {
    const userDataString = localStorage.getItem("userData");
    if (!userDataString) {
      alert("No user data found in local storage.");
      return;
    }
  
    const userData = JSON.parse(userDataString);
    setLoading(true); // Set loading state before API call
  
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_HEAD}/users/insert_user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = JSON.stringify(errorData, null, 2); // Pretty-print JSON
        throw new Error(`Failed to insert user: ${errorMessage}`);
      }
  
      const responseData = await response.json();
      alert(`User inserted successfully! ID: ${responseData.id}`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(`Error inserting user: ${error.message}`);
      } else {
        alert(`An unexpected error occurred.`);
      }
    } finally {
      setLoading(false); 
    }
  };
  

  // Function to render user fields
  const renderField = (label: string, value: string | undefined) => {
    return (
      <p>
        <strong>{label}:</strong>{" "}
        <span className={value ? "text-black" : "text-gray-400"}>
          {value || "Not provided"}
        </span>
      </p>
    );
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <section className="pt-8">
      <Gap />
      <div className="wrapper mx-auto max-w-7xl px-4">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 mb-6">
          <h2 className="text-xl font-semibold">Profile Details</h2>
          {renderField("Name", userData.name)}
          {renderField("Email", userData.email)}
          {renderField("Phone", userData.phone)}
          <p>
            <strong>Address:</strong>{" "}
            <span
              className={
                userData.mainTown &&
                userData.district &&
                userData.state &&
                userData.country
                  ? "text-black"
                  : "text-gray-400"
              }
            >
              {userData.mainTown &&
              userData.district &&
              userData.state &&
              userData.country
                ? `${userData.mainTown}, ${userData.district}, ${userData.state}, ${userData.country}`
                : "Incomplete"}
            </span>
          </p>
        </div>

        <div className="gap-2">
          <button
            onClick={handleUpdateProfile}
            className="px-4 py-2 border border-transparent rounded-md bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition"
            aria-label="Update Profile"
          >
            Update Profile
          </button>
          <button
            onClick={handlePush}
            className="ml-2 px-4 py-2 border border-transparent rounded-md bg-green-600 text-white font-semibold text-lg hover:bg-green-700 transition"
            aria-label="Final Submit"
            disabled={loading} // Disable if loading
          >
            {loading ? "Submitting..." : "Final Submit"}
          </button>
        </div>

        <Modal isOpen={isModalVisible} onClose={() => setModalVisible(false)}>
          <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
          {step === 1 && (
            <>
              <InputField
                label="Name"
                placeholder="Enter your name"
                value={newData.name}
                onChange={(e) =>
                  setNewData({ ...newData, name: e.target.value })
                }
              />
              <InputField
                label="Email"
                placeholder="Enter your email"
                value={newData.email}
                onChange={(e) =>
                  setNewData({ ...newData, email: e.target.value })
                }
                disabled // Make email field disabled
              />
              <InputField
                label="Phone"
                placeholder="Enter your phone number"
                value={newData.phone}
                onChange={(e) =>
                  setNewData({ ...newData, phone: e.target.value })
                }
              />
            </>
          )}
          {step === 2 && (
            <>
              <select
                value={newData.country}
                onChange={(e) => handleAddressChange("country", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Country</option>
                {ADDRESS_DATA.countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              <select
                value={newData.state}
                onChange={(e) => handleAddressChange("state", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select State</option>
                {newData.country &&
                  newData.country in ADDRESS_DATA.states && 
                  ADDRESS_DATA.states[newData.country as State]?.map(
                    (state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    )
                  )}
              </select>

              <select
                value={newData.district}
                onChange={(e) =>
                  handleAddressChange("district", e.target.value)
                }
                className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select District</option>
                {newData.state &&
                  ADDRESS_DATA.districts[
                    newData.state as keyof typeof ADDRESS_DATA.districts
                  ]?.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
              </select>

              <select
                value={newData.mainTown}
                onChange={(e) =>
                  handleAddressChange("mainTown", e.target.value)
                }
                className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Main Town</option>
                {newData.district &&
                  ADDRESS_DATA.mainTowns[
                    newData.district as keyof typeof ADDRESS_DATA.mainTowns
                  ]?.map((town) => (
                    <option key={town} value={town}>
                      {town}
                    </option>
                  ))}
              </select>
            </>
          )}

          <div className="flex justify-between">
            <button
              onClick={() => setModalVisible(false)}
              className="px-4 py-2 border border-transparent rounded-md bg-red-600 text-white font-semibold text-lg hover:bg-red-700 transition"
              aria-label="Cancel"
            >
              Cancel
            </button>

            <button
              onClick={handleNextStep}
              className="px-4 py-2 border border-transparent rounded-md bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition"
              aria-label="Next Step"
            >
              {step === 1 ? "Next" : "Submit"}
            </button>
          </div>
        </Modal>
      </div>

      <Footer />
    </section>
  );
}
