import React from 'react'

export default function Dashboard() {
  return (


    <div className="flex h-screen bg-gray-900">
        
    <aside className="w-64 bg-blue-900 text-white shadow-md">
      <div className="p-4 text-2xl font-bold border-b border-gray-600">
        Admin Dashboard
      </div>  
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center p-2 text-gray-200 rounded hover:bg-blue-700">
              <span className="material-icons mr-2">dashboard</span> Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-200 rounded hover:bg-blue-700">
              <span className="material-icons mr-2">settings</span> Settings
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-200 rounded hover:bg-blue-700">
              <span className="material-icons mr-2">people</span> Users
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <main className="flex-1">

      <header className="flex items-center justify-between p-4 bg-white shadow">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 mr-4 border rounded-lg"
          />
          <button className="p-2 text-white bg-blue-600 rounded">Logout</button>
        </div>
      </header>

      <div className="p-6">
        <h2 className="mb-4 text-xl font-semibold">Welcome to the Dashboard</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="p-4 bg-white shadow rounded">
            <h3 className="mb-2 text-lg font-semibold">Card 1</h3>
            <p>Some descriptive text here.</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="mb-2 text-lg font-semibold">Card 2</h3>
            <p>Another piece of content.</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="mb-2 text-lg font-semibold">Card 3</h3>
            <p>More information goes here.</p>
          </div>
        </div>
      </div>
    </main>
  </div>
    
  )
}
