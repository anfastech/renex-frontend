"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Importing the Font Awesome icon

// Define the props type for the Header component
interface HeaderProps {
    onMenuToggle?: (isOpen: boolean) => void; // Optional prop type
}

export default function Header({ onMenuToggle }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                {/* Signup Button */}
                <button className="bg-blue-500 text-white py-2 px-4 rounded border border-gray-400">
                    SIGNUP
                </button>
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



// import { useState } from 'react';
// import Link from 'next/link';
// // give parameter back, thats it

// export default function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     // Toggle mobile menu visibility
//     const handleMenuToggle = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };


//     return (
//         <header
//             className="fixed top-2 left-2 right-2 bg-gray-200 p-4 border border-gray-400 flex justify-between items-center rounded-md z-10">
//             <button className="text-xl text-white">
//                 <i className="fas fa-bars" style={{color:"black"}}></i>
//             </button>
//             <button className="bg-blue-500 text-white py-2 px-4 rounded border border-gray-400">SIGNUP</button>
//         </header>
//     )

    // return (
    //     <header className="bg-blue-500 shadow-lg text-white sticky">
    //         <div className="container mx-auto flex justify-around items-center py-4">
    //             {/* Logo */}
    //             {/* <Image src="/images/renexLogoSvg.svg" alt="re-Nex Logo" className="w-8 md:w-10 lg:w-11 xl:w-12 2xl:w-18 max-w-full h-auto"  /> */}

    //             {/* Navigation Menu */}
    //             <nav className="hidden md:flex space-x-8">
    //                 <a href="#" className="text-gray-700 hover:text-gray-900 text-white">For Buyers</a>
    //                 <a href="#" className="text-gray-700 hover:text-gray-900 text-white">For Tenants</a>
    //                 <a href="#" className="text-gray-700 hover:text-gray-900 text-white">For Owners</a>
    //                 <a href="#" className="text-gray-700 hover:text-gray-900 text-white">For Dealers/Builders</a>
    //                 <a href="#" className="text-gray-700 hover:text-gray-900 text-white">Insights</a>
    //             </nav>

    //             {/* Post Property Button */}
    //             <Link href="/AddForm">
    //                 <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Post Property</button>
    //             </Link>

    //             {/* Profile Section */}
    //             <div className="flex items-center space-x-4">
    //                 <div className="rounded-full bg-white w-8 h-8 text-center text-blue-500">R</div>

    //                 {/* Hamburger Menu for Mobile */}
    //                 <button
    //                     className="md:hidden text-white focus:outline-none"
    //                     onClick={handleMenuToggle}
    //                 >
    //                     <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
    //                     </svg>
    //                 </button>
    //             </div>
    //         </div>

    //         {/* Mobile Navigation Menu */}
    //         <div className={`md:hidden bg-blue-600 text-white ${isMenuOpen ? 'block' : 'hidden'}`}>
    //             <nav className="flex flex-col space-y-4 py-4 px-6">
    //                 <a href="#" className="text-gray-200 hover:text-white">For Buyers</a>
    //                 <a href="#" className="text-gray-200 hover:text-white">For Tenants</a>
    //                 <a href="#" className="text-gray-200 hover:text-white">For Owners</a>
    //                 <a href="#" className="text-gray-200 hover:text-white">For Dealers/Builders</a>
    //                 <a href="#" className="text-gray-200 hover:text-white">Insights</a>
    //             </nav>
    //         </div>
    //     </header>
    // );
// }
