'use client';
import React, { useEffect, useState } from 'react';

const NamesComponent: React.FC = () => {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/names')
      .then((response) => response.json())
      .then((data) => {
        setNames(data.names);  // Assuming FastAPI returns names in response
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{width: "100%", minHeight: "200px", fontSize: "40px"}}>
      <center>
      <h1>Names from FastAPI</h1>
      <h1><ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      </h1>
      </center>
    </div>
  );
};

export default NamesComponent;
