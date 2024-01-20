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
          <div className="flex flex-col items-center mt-12 content-center justify-center space-x-10">
            <div className="text-gray-500 px-10 py-12 rounded-md text-md  flex flex-col items-start justify-center space-y-2">
              <h2 className="font-bold text-lg">Vision</h2>
              <li className="text-lg list-circle">To give quality education to youth , children and women while also advocating for rights of women in rural communities</li>
            </div>
            <div className="text-gray-500 px-10 py-12 overflow-hidden text-md rounded-md flex flex-col items-start justify-center space-y-2">
              <h2 className="font-bold text-lg">Mission</h2>
              <ul className="space-y-2 list-circle text-lg">
                <li>To improve the lives of people in rural communities by giving the <span className="text-green-500">children , 
                  youth and women</span> access to <span className="text-green-500">
                    good education</span> so as to be able to compete favourably 
                  with counterparts from urban areas and other parts of the world</li>
                  <li>To <span className="text-green-500">advocate</span> for the <span className="text-green-500">rights of women</span> and heping them scale through challenges by 
                    providing pro bono services and <span className="text-green-500">
                      mitigating gender issues</span></li>
                  <li>To make <span className="text-green-500">quality education</span> available to <span className="text-green-500">
                    children and youths</span> by building full fledged world class schools , 
                    skill acquisition and information technology 
                    centers for rural communities</li>
              </ul>
            </div>
          </div>
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
          <div className="flex flex-col items-center justify-center mt-12 text">
            <ul className="space-y-2 text-lg text-gray-500 text-start list-circle">
              <li>
                To educate the rural children and give them opportunities for quality
                education
              </li>
              <li>
                To equip youth with essential skills for entrepreneurship
              </li>
              <li>
                To empower the rural women (farmers) to be financially literate
              </li>
              <li>
                To educate the women on how to use technology to improve their businesses
              </li>
              <li>
                To increase awareness of women in rural areas of their human rights
              </li>
              <li>
                To advocate for the rights of women and offer pro bono services where needed
                </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-10 lg:py-20">
        <h3 className="text-3xl font-semibold flex items-center content-center justify-center space-x-2">
            <span className="i-lucide:mail text-green-500" />
            <span>Get In Contact </span>
          </h3>
          <p className="mt-2 text-center flex flex-col space-y-1 w-full sm:w-3/4 mx-auto px-4 sm:px-0">
            <span className=" text-gray-500">
              If you want to know more about what we're doing
            </span>
          </p>
          <div className="mt-12 flex items-center justify-center space-x-4">
            <a href="mailto:e&o@ediga-oyafoundation.org" target="_blank" className="inline-flex items-center justify-center space-x-2 px-5 py-3 border border-transparent text-base font-medium rounded-md cursor-pointer text-green-700 bg-green-100 hover:bg-green-200">
              <span className="i-lucide:mail text-green-500"/>
              <span>Our Mail</span>
            </a>
           <a href="tel:+234(090)21760407" className="inline-flex items-center justify-center space-x-2 px-5 py-3 border border-transparent text-base font-medium rounded-md cursor-pointer text-green-700 bg-green-100 hover:bg-green-200">
              <span className="i-lucide:phone-call text-green-500"/>
             <span>
               Our Phone
             </span>
            </a>
          </div>
      </div>
      <footer className="mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="footer"
          >
            <div className="px-5 py-2">
              <Link
                to="/"
                className="text-base text-gray-500 hover:text-gray-900"
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
                className="text-base text-gray-500 hover:text-gray-900"
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
          <p className="mt-8 text-center text-base text-gray-400">
            Built by
            <a
              href="https://github.com/Inalegwu"
              className="text-base text-gray-400 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Ikwue Inalegwu.
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
