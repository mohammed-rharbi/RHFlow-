import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
   
  
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

    <header className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute -bottom-1 left-0 w-full h-64"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,192C96,192,192,192,288,213.3C384,235,480,277,576,266.7C672,256,768,192,864,165.3C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto px-6 h-screen flex items-center">
        <div className="text-center mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide animate-fade-in">
            Elevate Your Experience
          </h1>
          <p className="mt-6 text-lg md:text-2xl font-light text-gray-200">
            Crafted for web excellence with power, usability, and simplicity.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <Link href="#features" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition duration-300">Get Started</Link>
            <Link href="#contact" className="px-8 py-4 bg-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-purple-800 transition duration-300">Contact Us</Link>
          </div>
        </div>
      </div>
    </header>

    <section id="features" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center leading-tight">
          Why Choose Us
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Our platform is built from the ground up for success.
        </p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          <div className="group bg-white p-8 rounded-xl shadow-lg hover:bg-blue-600 hover:text-white transition transform hover:-translate-y-4">
            <div className="text-blue-600 group-hover:text-white text-6xl">
              <i className="fas fa-bolt"></i>
            </div>
            <h3 className="text-2xl font-bold group-hover:text-white mt-6">
              Blazing Fast
            </h3>
            <p className="mt-4 group-hover:text-white">
              Experience lightning-fast speeds with our optimized web platform.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-xl shadow-lg hover:bg-purple-600 hover:text-white transition transform hover:-translate-y-4">
            <div className="text-purple-600 group-hover:text-white text-6xl">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-2xl font-bold group-hover:text-white mt-6">
              Secure By Design
            </h3>
            <p className="mt-4 group-hover:text-white">
              Industry-leading security means your data is always safe and secure.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-xl shadow-lg hover:bg-green-600 hover:text-white transition transform hover:-translate-y-4">
            <div className="text-green-600 group-hover:text-white text-6xl">
              <i className="fas fa-heart"></i>
            </div>
            <h3 className="text-2xl font-bold group-hover:text-white mt-6">
              User-Centric Design
            </h3>
            <p className="mt-4 group-hover:text-white">
              Designed with simplicity and usability at its core.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="contact"
      className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16 text-center"
    >
      <h2 className="text-5xl font-extrabold">
        Ready to Get Started?
      </h2>
      <p className="mt-4 text-xl">
        Join thousands of satisfied users and make the leap.
      </p>
      <Link
        href="/register" className="mt-8 inline-block px-12 py-4 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-gray-200 transition">
        Sign Up Today
      </Link>
    </section>

    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Modern App. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  </div>
  );
}
