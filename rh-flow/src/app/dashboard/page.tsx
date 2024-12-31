import React from "react";

export default function Dashboard() {
  return (

      <main className="max-h-full flex-1 flex flex-col">
      
        <div className="p-8 flex-1 bg-gray-900">
          <h2 className="mb-6 text-2xl font-semibold text-white">
            Welcome to the Dashboard
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-700 shadow-md rounded-lg">
              <h3 className="mb-2 text-lg font-semibold text-white">Card 1</h3>
              <p className="text-gray-300">Some descriptive text here.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-700 shadow-md rounded-lg">
              <h3 className="mb-2 text-lg font-semibold text-white">Card 2</h3>
              <p className="text-gray-300">Another piece of content.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-700 shadow-md rounded-lg">
              <h3 className="mb-2 text-lg font-semibold text-white">Card 3</h3>
              <p className="text-gray-300">More information goes here.</p>
            </div>
          </div>
        </div>
      </main>
  );
}
