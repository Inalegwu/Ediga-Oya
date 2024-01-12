import { Link } from "react-router-dom";

export default function Donors() {
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
            Donors
          </h1>
          <h2 className="text-2xl font-medium text-center mt-1 space-y-1">
            Building the future is a lot , any help would be much appreciated
          </h2>
        </div>
      </header>
    </main>
  );
}
