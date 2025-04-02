"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Importing the Font Awesome icon
import { useSession, signOut } from "next-auth/react"; // Importing the session hook and signOut function
import Image from "next/image";

// Define the props type for the Header component
interface HeaderProps {
  onMenuToggle?: (isOpen: boolean) => void; // Optional prop type
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const { data: session } = useSession(); // Get user session data
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [userGmail, setUserGmail] = useState<string | null>(null); // State to hold the user's Gmail
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown menu

  // Effect to load user name and Gmail from session or local storage
  useEffect(() => {
    if (session) {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        const storedData = JSON.parse(storedUserData);
        setUserName(storedData.name || session.user.name); // Set name from local storage or session
        setUserGmail(storedData.email || session.user.email); // Set Gmail from local storage or session
      }
    }
  }, [session]);

  // Effect to handle click outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const userDP =
    "https://icons-for-free.com/iff/png/256/profile+profile+page+user+icon-1320186864367220794.png";

  return (
    <>
      <header className="fixed top-2 left-2 right-2 bg-gray-200 p-4 border border-gray-400 flex justify-between items-center rounded-md z-10 lg:w-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:top-4">
        {/* Hamburger Icon */}
        <button className="text-xl" onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
        </button>

        {/* Conditional rendering based on session */}
        {session ? (
          <div className="flex items-center space-x-4">
            {/* User Profile and Notification Icon */}
            <div className="relative flex items-center space-x-2">
              <div>
                <p
                  className="text-xs font-semibold cursor-pointer"
                  onClick={toggleDropdown}
                >
                  {userName}
                </p>
                <p className="text-xs font-semibold text-gray-500">
                  {userGmail}
                </p>
              </div>
              {/* <button className="relative p-1 text-gray-400 hover:text-white">
                <BellIcon className="h-6 w-6" />
                </button> */}

              <Image
                src={userDP} // Replace with a valid placeholder or accessible image URL
                alt="User Profile"
                width={40} // Adjust width as needed
                height={40} // Adjust height as needed
                className="rounded-full cursor-pointer"
                onClick={toggleDropdown} // Toggle the dropdown when clicked
              />

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  ref={dropdownRef} // Attach the dropdown ref
                  className="absolute top-12 right-0 bg-white shadow-lg rounded-lg border border-gray-300 w-56 p-4"
                >
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <Image
                        src={userDP} // Replace with a valid placeholder or accessible image URL
                        alt="User Profile"
                        width={40} // Adjust width as needed
                        height={40} // Adjust height as needed
                        className="rounded-full cursor-pointer"
                      />
                      {/* <img
                        src={session.user.image || "https://icons-for-free.com/iff/png/256/profile+profile+page+user+icon-1320186864367220794.png"}
                        alt="User Profile"
                        className="h-8 w-8 rounded-full"
                      /> */}
                      <div>
                        <p className="text-xs font-semibold">{userName}</p>
                        <p className="text-xs text-gray-500">{userGmail}</p>
                      </div>
                    </div>
                    <Link href="/ProfilePage" passHref>
                      <button className="w-full text-left py-1 px-3 rounded-md text-gray-700 hover:bg-gray-200">
                        View Profile
                      </button>
                    </Link>
                    <button
                      className="w-full text-left py-1 px-3 rounded-md text-red-500 hover:bg-red-100"
                      onClick={() => signOut()}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
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
              {/* <Link href={`/auth/signin`} passHref>
                <button // Sign out the user
                  className="bg-red-500 text-white py-1 px-3 rounded border border-gray-400"
                  onClick={() => signOut()} // Use signOut function to log out
                >
                  Sign this is
                </button>
              </Link> */}
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
