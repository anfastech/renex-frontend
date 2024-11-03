"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Importing the Font Awesome icon
import { useSession, signOut } from "next-auth/react"; // Importing the session hook and signOut function

// Define the props type for the Header component
interface HeaderProps {
  onMenuToggle?: (isOpen: boolean) => void; // Optional prop type
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const { data: session } = useSession(); // Get user session data
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null); // State to hold the user name

  // Effect to load user name from local storage
  useEffect(() => {
    if (session) {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        const storedData = JSON.parse(storedUserData);
        setUserName(storedData.name || session.user.name); // Set name from local storage or session
      }
    }
  }, [session]);

  // Toggle mobile menu visibility and call the passed function
  const handleMenuToggle = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    if (onMenuToggle) {
      onMenuToggle(newState); // Pass the new state to the parent
    }
  };

  // Close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-2 left-2 right-2 bg-gray-200 p-4 border border-gray-400 flex justify-between items-center rounded-md z-10 lg:w-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:top-4">
        {/* Hamburger Icon */}
        <button className="text-xl" onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
        </button>

        {/* Conditional rendering based on session */}
        {session ? (
          <div className="">
            <p className="text-lg font-semibold">Welcome, {userName}!</p> {/* Display name from local storage */}
            <Link href={`/auth/signin`} passHref>
              <button // Sign out the user
                className="bg-red-500 text-white py-1 px-3 rounded border border-gray-400"
                onClick={() => signOut()} // Use signOut function to log out
              >
                Sign Out
              </button>
            </Link>
          </div>
        ) : (
          <Link href={`/auth/signin`} passHref>
            <button className="bg-blue-500 text-white py-2 px-4 rounded border border-gray-400">
              SIGNUP
            </button>
          </Link>
        )}
      </header>

      {/* Modal for Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20 ">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 lg:w-[40%]">
            <h2 className="text-lg font-bold mb-4">Menu</h2>
            <nav className="flex flex-col space-y-4">
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
              <Link href="/services" onClick={closeMenu}>
                Services
              </Link>
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
              {/* Add more links as needed */}
            </nav>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded border border-gray-400"
              onClick={closeMenu}
            >
              Close Menu
            </button>
          </div>
        </div>
      )}
    </>
  );
}
