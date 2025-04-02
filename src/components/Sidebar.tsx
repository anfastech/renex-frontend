// src/app/components/Sidebar.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faBook, faUserFriends, faComments, faCog, faLock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="h-screen w-64 bg-white shadow-lg p-6">
      <div className="flex items-center mb-10">
        <FontAwesomeIcon icon={faBook} className="text-4xl text-blue-500" />
        <span className="ml-3 text-2xl font-semibold">DNX</span>
      </div>
      <nav className="space-y-6">
        <Link href="/" className="flex items-center text-gray-700 hover:text-black p-2 rounded-lg transition duration-200">
          <FontAwesomeIcon icon={faThLarge} className="mr-3" />
          Overview
        </Link>
        <Link href="/tasks" className="flex items-center text-gray-500 hover:text-gray-700 p-2 rounded-lg transition duration-200">
          <FontAwesomeIcon icon={faBook} className="mr-3" />
          Task
        </Link>
        <Link href="/mentors" className="flex items-center text-gray-500 hover:text-gray-700 p-2 rounded-lg transition duration-200">
          <FontAwesomeIcon icon={faUserFriends} className="mr-3" />
          Mentors
        </Link>
        <Link href="/messages" className="flex items-center text-gray-500 hover:text-gray-700 p-2 rounded-lg transition duration-200">
          <FontAwesomeIcon icon={faComments} className="mr-3" />
          Messages
        </Link>
        <Link href="/settings" className="flex items-center text-gray-500 hover:text-gray-700 p-2 rounded-lg transition duration-200">
          <FontAwesomeIcon icon={faCog} className="mr-3" />
          Settings
        </Link>
      </nav>

      {/* Authentication Dropdown */}
      <div className="mt-6">
        <button
          onClick={() => setIsAuthOpen(!isAuthOpen)}
          className="flex items-center text-gray-500 hover:text-gray-700 p-2 rounded-lg transition duration-200 w-full text-left"
        >
          <FontAwesomeIcon icon={faLock} className="mr-3" />
          Authentication
          <span className={`ml-auto transition-transform ${isAuthOpen ? 'rotate-180' : ''}`}>▼</span>
        </button>
        {isAuthOpen && (
          <div className="ml-6 mt-2 space-y-2">
            <Link href="/login" className="block text-gray-500 hover:text-gray-700 transition duration-200">Login</Link>
            <Link href="/register" className="block text-gray-500 hover:text-gray-700 transition duration-200">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
}
