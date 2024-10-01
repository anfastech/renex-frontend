import React from "react";
import Image from "next/image";

const ReviewDetails: React.FC = () => {
  return (
    <div className="mb-6">
      <h4 className="text-xl font-medium mb-4">Review Your Details</h4>
      <div className="flex flex-wrap items-center mb-4">
        <Image src="/images/Ellipse 2.png" alt="Profile Picture" className="w-16 h-16 rounded-full mb-4 md:mb-0" width={10} height={10} />
        <div className="ml-4 flex-1">
          <h4 className="font-medium">Name</h4>
          <input type="text" className="px-4 py-2 border border-gray-300 rounded-md w-full" placeholder="Enter name" />
        </div>
      </div>
      <h2 className="text-xl font-medium mb-2">Let&apos;s Verify Your Account</h2>
      <h3 className="text-lg mb-4">We will send you a confirmation code by SMS on the next step.</h3>
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-2">Mobile Number</h2>
        <div className="flex flex-wrap items-center border border-gray-300 rounded-md">
          <select className="px-2 py-1 border-r border-gray-300 bg-white text-gray-600 flex-shrink-0">
            <option value="+91">+91</option>
            <option value="+93">+93</option>
          </select>
          <input type="text" className="outline-none px-4 py-2 w-full" placeholder="Enter mobile number" />
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
