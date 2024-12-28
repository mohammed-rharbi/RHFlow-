'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md z-50 dark:bg-gray-900">
      <nav className="max-w-6xl mx-auto px-5 lg:px-10 py-3 flex justify-between items-center">

        <Link href="/home" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="logo" width={50} height={50} className="rounded-full" />
          <span className="text-xl font-bold text-white">E.Flow</span>
        </Link>


        <ul className="hidden lg:flex space-x-8 text-base font-medium text-white">
          <li className="hover:underline transition-all duration-200">
            <Link href="/home">Home</Link>
          </li>
          <li className="hover:underline transition-all duration-200">
            <Link href="/services">Our Services</Link>
          </li>
          <li className="hover:underline transition-all duration-200">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:underline transition-all duration-200">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>


        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/register">
          <button className="text-white border border-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-indigo-500 transition-all duration-300">
            Sign Up
          </button>
          </Link>
          <Link href="/login">
          <button className="bg-white text-indigo-500 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300">
            Login
          </button>
          </Link>
        </div>


        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>


      {isMobileMenuOpen && (
        <div className="bg-indigo-700 lg:hidden">
          <ul className="flex flex-col items-center space-y-5 py-5 text-white font-medium">
            <li>
              <Link href="/home" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={toggleMobileMenu}>
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>
            <div className="flex flex-col space-y-3 w-full px-10">
              <Link href="/register">
              <button className="text-indigo-700 bg-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300">
                Sign Up
              </button>
              </Link>
              
              <Link href="/login">
              <button className="text-white border border-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-all duration-300">
                Login
              </button>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
