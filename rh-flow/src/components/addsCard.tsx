import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D", 
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1543342578-b01e1755cc6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D",
];

export default function CompanyCard() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">

      <div className="grid grid-cols-2 gap-1">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-40 object-cover"
          />
        ))}
      </div>

      <div className="bg-yellow-400 p-6">
        <h2 className="text-xl font-bold text-black mb-2">Discover the company</h2>
        <p className="text-sm text-black mb-4">
        Explore the company showcase or follow it to find out if it's really for you
        </p>
        <div className="flex space-x-4">
          <button className="flex-1 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition">
            Explore  →
          </button>
          <button className="flex-1 border-2 border-black text-black py-2 px-4 rounded-md hover:bg-black hover:text-white transition">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
