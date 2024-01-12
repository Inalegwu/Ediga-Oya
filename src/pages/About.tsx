import { Link } from "react-router-dom";
import { TEAM } from "../lib/constants";

export default function About() {
  return (
    <main className="w-full h-screen">
      <header className="w-full bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto py-16 px-4 sm:px-0">
          <nav className="flex flex-wrap justify-center">
            <div className="px-5 py-2">
              <Link
                to="/"
                className="text-base text-gray-500 hover:text-gray-900 font-medium cursor-pointer"
              >
                Home
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                to="/gallery"
                className="text-base text-gray-500 hover:text-gray-900 font-medium cursor-pointer transition"
              >
                Gallery
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                to="/projects"
                className="text-base text-gray-500 hover:text-gray-900 font-medium cursor-pointer transition"
              >
                Projects
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                to="/donors"
                className="text-base text-gray-500 hover:text-gray-900 font-medium cursor-pointer transition"
              >
                For Donors
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                to="/about"
                className="text-base text-gray-500 hover:text-gray-900 font-medium cursor-pointer transition"
              >
                About Us
              </Link>
            </div>
          </nav>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center mt-2 text-green-500">
            About Us
          </h1>
          <h2 className="text-2xl font-medium text-center mt-1 space-y-1">
            Who , What and Why are We...
          </h2>
        </div>
      </header>
      <div className="container mx-auto px-4 sm:px-0" id="info">
        {/* who */}
        <div className="py-10 lg:py-20">
          <h3 className="text-3xl font-semibold flex items-center content-center justify-center space-x-2">
            <span className="i-lucide:users text-green-500" />
            <span>Who are We ? </span>
          </h3>
          <p className="mt-2 text-center flex flex-col space-y-1 w-full sm:w-3/4 mx-auto px-4 sm:px-0">
            <span className=" text-gray-500">
              We are Kids and Grandkids of Ediga and Oya Okwa
            </span>
            <span className="text-green-300 italic">
              "Igoche - 'Surrounded by People' "
            </span>
          </p>
          <div className="mt-6 lg:mt-12 max-w-4xl mx-auto flex items-center content-center justify-center flex-wrap space-x-2 space-y-4">
            {TEAM.map((v) => (
              <div className="cursor-pointer space-y-7 text-gray-500 hover:text-gray-900 py-10 px-5 rounded-md flex flex-col items-center content-center justify-center">
                <img src={v.image} alt={`${v.name}`} className="rounded-full" />
                <div className="text-center">
                  <h2 className="text-md font-600">{v.name}</h2>
                  <p className="text-base font-300">{v.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* what */}
        <div className="py-10 lg:py-20">
          <h3 className="text-3xl font-semibold flex items-center content-center justify-center space-x-2">
            <span className="i-lucide:users text-green-500" />
            <span>What are we trying to do ? </span>
          </h3>
          <p className="mt-2 text-center flex flex-col space-y-1 w-full sm:w-3/4 mx-auto px-4 sm:px-0">
            <span className=" text-gray-500">
              We are trying to give back to our community
            </span>
            <span className="text-green-300 italic">
              "What greater purpose is there than to help people"
            </span>
          </p>
        </div>
        {/* why */}
        <div className="py-10 lg:py-20">
          <h3 className="text-3xl font-semibold flex items-center content-center justify-center space-x-2">
            <span className="i-lucide:users text-green-500" />
            <span>Why are we doing it ? </span>
          </h3>
          <p className="mt-2 text-center flex flex-col space-y-1 w-full sm:w-3/4 mx-auto px-4 sm:px-0">
            <span className=" text-gray-500">
              We want to give back to the community that made us who we are
            </span>
            <span className="text-green-300 italic">
              "it takes a village to raise a child"
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
