import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Landing() {
  return (
   
    <>
    <Navbar />

    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

    <header className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
     
      <div className="container mx-auto px-6 h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide animate-fade-in">
          Empower Your Career
        </h1>
        <p className="mt-6 text-lg md:text-2xl font-light text-gray-200">
          Connecting talent with opportunity.
        </p>
        <div className="mt-10 flex justify-center gap-6">
          <Link
            href="/login"
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition duration-300"
          >
            Browse Jobs
          </Link>
          <Link
            href="/login"
            className="px-8 py-4 bg-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-purple-800 transition duration-300"
          >
            HR Dashboard
          </Link>
        </div>
      </div>
    </header>

    <section id="features" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center leading-tight">
          Why Choose Us
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Built to elevate hiring and job-seeking experiences.
        </p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {[
            {
              icon: "fas fa-briefcase",
              title: "Career Growth",
              text: "Find jobs that match your skills and aspirations.",
              color: "blue",
            },
            {
              icon: "fas fa-users",
              title: "HR Tools",
              text: "Efficient hiring tools for seamless recruitment.",
              color: "purple",
            },
            {
              icon: "fas fa-chart-line",
              title: "Analytics",
              text: "Data-driven insights to optimize hiring processes.",
              color: "green",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className={`group bg-white p-8 rounded-xl shadow-lg hover:bg-${feature.color}-600 hover:text-white transition transform hover:-translate-y-4`}
            >
              <div
                className={`text-${feature.color}-600 group-hover:text-white text-6xl`}
              >
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-2xl font-bold group-hover:text-white mt-6">
                {feature.title}
              </h3>
              <p className="mt-4 group-hover:text-white">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section
      id="contact"
      className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16 text-center"
    >
      <h2 className="text-5xl font-extrabold">Ready to Get Started?</h2>
      <p className="mt-4 text-xl">
        Join thousands of job seekers and HR professionals today.
      </p>
      <Link
        href="/register"
        className="mt-8 inline-block px-12 py-4 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-gray-200 transition"
      >
        Sign Up Now
      </Link>
    </section>

    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Job & HR Platform. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <Link href="#" className="hover:text-white">
            Privacy
          </Link>
          <Link href="#" className="hover:text-white">
            Terms
          </Link>
          <Link href="#" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  </div>
  </>
  );
}
