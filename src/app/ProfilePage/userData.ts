// ./userData.js
export const ADDRESS_DATA = {
  countries: ["India", "Brazil", "UAE", "Bahrain"] as const,
  states: {
    India: ["Kerala", "Tamil Nadu", "Karnataka"],
    Brazil: ["São Paulo", "Rio de Janeiro", "Bahia"],
  },
  districts: {
    Kerala: ["Malappuram", "Kozhikode", "Thrissur"],
    TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
    Karnataka: ["Bangalore", "Mysore", "Mangalore"],
  },
  mainTowns: {
    Malappuram: ["Tirur", "Manjeri", "Perinthalmanna"],
    Kozhikode: ["Vadakara", "Koyilandy", "Feroke"],
  },
} as const;

// Define types based on ADDRESS_DATA
export type Country = typeof ADDRESS_DATA["countries"][number];
export type State = keyof typeof ADDRESS_DATA["states"];
export type District = keyof typeof ADDRESS_DATA["districts"];
export type Town = keyof typeof ADDRESS_DATA["mainTowns"];



// {isModalVisible && (
//   <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//     <div className="bg-white p-8 rounded-lg shadow-lg">
//       <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
//       <form onSubmit={handleUpdateProfile}>
//         <InputField
//           label="Name"
//           placeholder="Enter your name"
//           value={newData.name}
//           onChange={(e) => setNewData({ ...newData, name: e.target.value })}
//         />
//         <InputField
//           label="Email"
//           placeholder="Enter your email"
//           value={newData.email}
//           onChange={(e) => setNewData({ ...newData, email: e.target.value })}
//         />
//         <InputField
//           label="Phone"
//           placeholder="Enter your phone number"
//           value={newData.phone}
//           onChange={(e) => setNewData({ ...newData, phone: e.target.value })}
//         />

//         <label htmlFor="country">Country</label>
//         <select
//           id="country"
//           value={newData.address.country}
//           onChange={(e) =>
//             setNewData({
//               ...newData,
//               address: { ...newData.address, country: e.target.value }
//             })
//           }
//           className="w-full p-2 border mb-2"
//         >
//           {ADDRESS_DATA.countries.map((country) => (
//             <option key={country} value={country}>{country}</option>
//           ))}
//         </select>

//         {/* Add similar labels and IDs for State, District, and Town */}
//         {/* State Select */}
//         <label htmlFor="state">State</label>
//         <select
//           id="state"
//           value={newData.address.state}
//           onChange={(e) =>
//             setNewData({
//               ...newData,
//               address: { ...newData.address, state: e.target.value }
//             })
//           }
//           className="w-full p-2 border mb-2"
//         >
//           {(ADDRESS_DATA.states[newData.address.country] || []).map((state) => (
//             <option key={state} value={state}>{state}</option>
//           ))}
//         </select>

//         <label htmlFor="district">District</label>
//         <select
//           id="district"
//           value={newData.address.district}
//           onChange={(e) =>
//             setNewData({
//               ...newData,
//               address: { ...newData.address, district: e.target.value }
//             })
//           }
//           className="w-full p-2 border mb-2"
//         >
//           {(ADDRESS_DATA.districts[newData.address.state] || []).map((district) => (
//             <option key={district} value={district}>{district}</option>
//           ))}
//         </select>

//         <label htmlFor="mainTown">Main Town</label>
//         <select
//           id="mainTown"
//           value={newData.address.mainTown}
//           onChange={(e) =>
//             setNewData({
//               ...newData,
//               address: { ...newData.address, mainTown: e.target.value }
//             })
//           }
//           className="w-full p-2 border mb-2"
//         >
//           {(ADDRESS_DATA.mainTowns[newData.address.district] || []).map((town) => (
//             <option key={town} value={town}>{town}</option>
//           ))}
//         </select>

//         <div className="mt-4">
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//           >
//             Save Changes
//           </button>
//           <button
//             type="button"
//             onClick={() => setModalVisible(false)}
//             className="ml-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//     <Gap />
//   </div>
// )}