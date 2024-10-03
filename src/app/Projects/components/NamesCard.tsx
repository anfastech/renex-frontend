'use client';
import React, { useEffect, useState } from 'react';

interface NameData {
  name: string;
  regno: number;
}

const NamesComponent: React.FC = () => {
  const [names, setNames] = useState<NameData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/names')
      .then((response) => response.json())
      .then((data) => {
        setNames(data.names);  // Assuming FastAPI returns names in sorted order
        setLoading(false);  // Loading finished
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);  // Even in case of error, stop loading
      });
  }, []);

  return (
    <div className='bg-blue-400' style={{ width: "100%", minHeight: "200px", fontSize: "40px" }}>
      <center>
        <h1>Names from FastAPI (Sorted by Regno)</h1>
        {
          loading ? (
            <h2>loading...</h2>
          ) : (
            <ul className="list-disc pl-5 space-y-4">
              {
                names.map((nameObj, index) => (
                  <li className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md text-lg font-medium text-gray-800 hover:bg-blue-100 hover:border-blue-400 hover:text-blue-600 transition-all duration-300 flex justify-center align-center space-x-3" key={index}>
                    <div>{nameObj.regno}</div><div> {nameObj.name}</div>
                  </li>
                ))
              }
            </ul>
          )
        }
      </center>
      <br />
    </div>
  );
};

export default NamesComponent;


{/* <ul className="list-disc pl-5 space-y-4">
  <li className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md text-lg font-medium text-gray-800 hover:bg-blue-100 hover:border-blue-400 hover:text-blue-600 transition-all duration-300">
    John Doe
  </li>
  <li className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md text-lg font-medium text-gray-800 hover:bg-blue-100 hover:border-blue-400 hover:text-blue-600 transition-all duration-300">
    Jane Smith
  </li>
  <li className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md text-lg font-medium text-gray-800 hover:bg-blue-100 hover:border-blue-400 hover:text-blue-600 transition-all duration-300">
    Alice Johnson
  </li>
  <li className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md text-lg font-medium text-gray-800 hover:bg-blue-100 hover:border-blue-400 hover:text-blue-600 transition-all duration-300">
    Bob Brown
  </li>
</ul> */}