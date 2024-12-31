'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SideBar() {
  const pathname = usePathname()

  const isActiveLink = (path: string) => {
    return pathname === path ? "bg-blue-50 text-blue-600" : "text-gray-600"
  }

  return (
    <nav className="bg-white shadow-lg h-screen top-0 left-0 min-w-[270px] py-6 px-4 font-inter">
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-gray-800">RH Flow</h1>
        <p className="text-sm text-gray-500 mt-1">Recruitment Management</p>
      </div>

      <div className="space-y-8">
        <div>
          <ul>
            <li>
              <Link href="/dashboard"
                className={`${isActiveLink('/dashboard')} hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded-lg px-4 py-3 transition-all`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                  className="w-5 h-5 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                </svg>
                <span>Dashboard</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-xs font-semibold text-gray-400 uppercase px-4 mb-3">Job Management</h6>
          <ul className="space-y-1">
            <li>
              <Link href="/applications"
                className={`${isActiveLink('/applications')} hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded-lg px-4 py-3 transition-all`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                  className="w-5 h-5 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                <span>Applications</span>
              </Link>
            </li>

          </ul>
        </div>

        <div>
          <h6 className="text-xs font-semibold text-gray-400 uppercase px-4 mb-3">Settings</h6>
          <ul className="space-y-1">
            <li>
              <Link href="/profile"
                className={`${isActiveLink('/profile')} hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded-lg px-4 py-3 transition-all`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                  className="w-5 h-5 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link href="/logout"
                className="text-gray-600 hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded-lg px-4 py-3 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                  className="w-5 h-5 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
