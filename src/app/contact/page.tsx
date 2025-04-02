"use client";

import React, { useState } from 'react';

const ContactPage = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Open the success modal after form submission
    setIsModalOpen(true);

    // You can also handle form submission logic here (e.g., sending data to an API)
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="contact-page bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-12">
          Whether you’re looking to buy, sell, or rent, we’re here to help! Reach out to us through any of the following methods.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <i className="fas fa-phone-alt text-3xl text-blue-500 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-700">Call Us</h3>
            <p className="text-gray-500 mt-2">+91 89 210 216 35</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <i className="fas fa-envelope text-3xl text-blue-500 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-700">Email Us</h3>
            <p className="text-gray-500">support@renex.app</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <i className="fas fa-map-marker-alt text-3xl text-blue-500 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-700">Visit Us</h3>
            <p className="text-gray-500">Kerala, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message here"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Success Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h3 className="text-xl font-semibold text-center text-gray-700">Thank You for Contacting Us!</h3>
              <p className="text-center text-gray-600 mt-4">
                We have received your message and will get back to you shortly.
              </p>
              <div className="mt-4 text-center">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactPage;
