import { Link } from "react-router-dom";
import { PARTNERS, TESTIMONIALS } from "../lib/constants";

export default function Home() {
  return (
    <main className="w-full h-screen">
      {/* header/hero */}
      <header className="w-full bg-gradient-to-b from-green-100 to-white flex items-center content-center justify-center px-10 py-2">
        <div className="container mx-auto py-16 px-4 sm:px-0">
          <nav className="flex flex-wrap justify-center">
            <div className="px-5 py-2">
              <Link
                to="/"
                className="text-base text-gray-500 hover:text-gray-900 font-medium cursor-pointer transition"
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
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center mt-2">
              Ediga-Oya Rays of Hope Foundation
            </h1>
          </div>
          <h2 className="text-2xl font-medium text-center mt-1 space-y-1">
            Investing in the
            <span className="text-green-500 font-500"> futures </span> of{" "}
            <span className="text-green-500 font-500">Women</span> and{" "}
            <span className="text-green-500 font-500"> Children</span> in the
            Ebologba and the Greater Otukpo Area
          </h2>
          <div className="mt-8 flex justify-center space-x-3 mx-auto">
            <div className="inline-flex">
              <Link
                to="/donors"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200"
              >
                <span className="i-lucide:mail" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* efforts */}
      <div className="container mx-auto px-4 sm:px-0" id="efforts">
        {/* effort 1 */}
        <div className="py-10 lg:py-20">
          <h3 className="text-3xl font-semibold flex items-center content-center justify-center space-x-2">
            <span className="i-lucide:graduation-cap text-green-500" />
            <span>Educational Efforts</span>
          </h3>
          <p className="mt-2 text-center w-full flex flex-col sm:w-3/4 mx-auto px-4 sm:px-0">
            <span>
              In our first year , we mobilized teachers in the{" "}
              <span className="text-green-500 font-500">Ebologba</span> area to
              begin the{" "}
            </span>
            <Link to="/projects/eno" className="text-green-500 font-500">
              EandO Memorial Academy
            </Link>
          </p>
          <div className="mt-6 lg:mt-12 max-w-4xl mx-auto">
            <img
              src="https://placehold.co/1000x600/000000/FFF"
              alt="EandOMemorial Academy"
              className="max-w-full rounded-md overflow-hidden shadow-2xl"
            />
          </div>
          {/* other info box */}
          <div className="w-full px-5 mt-25 py-2 space-x-4 flex items-center content-center justify-center">
            <div className="px-7 py-7 max-w-80 cursor-pointer bg-green-50 rounded-md text-green-500 flex flex-col flex-wrap items-center content-center justify-center space-y-2 text-center">
              <span className="i-lucide:book" />
              <span>
                Writing Notebooks where donated by MTN Global Communications
              </span>
            </div>
            <div className="px-7 py-7 max-w-80 cursor-pointer bg-orange-50 rounded-md text-orange-500 flex flex-col flex-wrap items-center content-center justify-center space-y-2 text-center">
              <span className="i-lucide:laptop" />
              <span>
                Digital Accessories where donated by Chronicles Technologies
              </span>
            </div>
          </div>
        </div>
        {/* effort 2 */}
        <div className="py-10 lg:py-20">
          <h3 className="text-3xl font-semibold flex items-center content-center justify-center space-x-2">
            <span className="i-lucide:hammer text-green-500" />
            <span>UpSkilling</span>
          </h3>
          <p className="mt-2 text-center w-full sm:w-3/4 mx-auto px-4 sm:px-0">
            <span>
              The birth of the Ediga-Oya Skills Initiative was born shortly
              after aimed at teaching skills , reskilling and upskilling labour
              in the{" "}
              <span className="text-green-500 font-bold">
                Egologba and Otukpo
              </span>{" "}
              area
            </span>
          </p>
          <div className="mt-6 lg:mt-12 max-w-4xl mx-auto">
            <img
              src="https://placehold.co/1000x600/000000/FFF"
              alt="Eljay Training Center"
              className="max-w-full rounded-md overflow-hidden shadow-2xl"
            />
          </div>
          <div className="w-full px-5 mt-25 py-2 space-x-4 flex items-center content-center justify-center">
            <div className="px-7 py-7 max-w-80 cursor-pointer bg-green-50 rounded-md text-green-500 flex flex-col flex-wrap items-center content-center justify-center space-y-2 text-center">
              <span className="i-lucide:train-track" />
              <span>
                Done in partnership with CSTEmp Edutech and N-Power Nigeria
              </span>
            </div>
            <div className="px-7 py-7 max-w-80 cursor-pointer bg-orange-50 rounded-md text-orange-500 flex flex-col flex-wrap items-center content-center justify-center space-y-2 text-center">
              <span className="i-lucide:credit-card" />
              <span>Monetary prizes were donated by CSTEmp Edutech</span>
            </div>
          </div>
        </div>
        {/* story */}
        <div className="py-10 lg:py-20">
          <h3 className="text-3xl font-semibold flex items-center justify-center space-x-2">
            <span className="i-lucide:glasses text-green-500" />
            <span>The Story Behind Ediga-Oya Memorial</span>
          </h3>
          <div className="mt-6 lg:mt-8 lg:w-2/4 text-md leading-relaxed lg:mx-auto w-prose max-w-prose text-gray-500 space-y-1">
            <p>
              It had always been a dream and pet project of the Late Major Ediga
              Okwa and his wife Late Mrs. Oya Okwa , a humble and generous
              couple from Otukpo Local Government Area of Benue State , to make
              a positive impact in the lives of the children , youths and women
              in their rural community.
            </p>
            <p>
              As a result , the Ediga Oya Rays of Hope Foundation was
              established and duly registered in 2018 with a vision and mission
              of improving the lives of children , youth and women in rural
              communities
            </p>
            <p>
              In 2019 , the children brought their dreams to its full
              realization.The foundation began its operations in{" "}
              <span className="text-green-500">Egbologba</span> community of
              Otukpo LGA of Benue State. It aims to establish educational and
              skill acquisition training centers for children and youth while
              also advocating for the rights of women
            </p>
          </div>
        </div>
        {/* testimonials */}
        <div className="py-10 lg:py-20">
          <h3 className="text-3xl font-semibold flex items-center justify-center space-x-2">
            <span className="i-lucide:megaphone text-green-500" />
            <span>Testimonials</span>
          </h3>
          <p className="mt-2 text-center w-full sm:w-3/4 mx-auto px-4 sm:px-0 text-base text-gray-500">
            <span>
              Attendees of our previous programs reached out to tell us how much
              our help mattered to them and it made our days
            </span>{" "}
            <br />
            <span>so we decided to share</span>
          </p>
          <div className="w-full px-10 mt-12 py-10 flex items-center content-center justify-center overflow-x-scroll space-x-2">
            {TESTIMONIALS.map((v) => (
              <div className="px-10 py-5  cursor-pointer max-w-200 text-gray-700 rounded-lg flex flex-col items-center content-center justify-center space-y-1 text-center">
                <img src={v.image} alt={v.name} className="rounded-full" />
                <h2 className="font-bold text-base">{v.name}</h2>
                <span className="font-500 text-md">{v.benefit}</span>
                <p className="text-sm font-200 text-center">{v.statement}</p>
              </div>
            ))}
          </div>
        </div>
        {/* partners */}
        <div className="py-10 lg:py-20">
          <h3 className="text-3xl font-semibold flex items-center justify-center space-x-2">
            <span className="i-lucide:heart-handshake text-green-500" />
            <span>Partners</span>
          </h3>
          <p className="mt-2 text-center w-full sm:w-3/4 mx-auto px-4 sm:px-0 text-base text-gray-500">
            <span>
              We couldn't possibly achieve all this alone even if we wanted to.
            </span>{" "}
            <br />
            <span>Here are some of the people who made it possible</span>
          </p>
          <div className="w-full mt-6 px-10 py-5 flex space-y-4 flex-wrap items-center content-center justify-center space-x-2">
            {PARTNERS.map((v) => (
              <a
                href={v.website}
                target="_blank"
                rel="noreferrer"
                className="px-10 py-5 cursor-pointer max-w-200 max-h-80 text-gray-800 rounded-md flex flex-col items-center content-center justify-center space-y-5"
              >
                <img src={v.image} alt={v.name} className="max-w-40" />
                <h2 className="font-bold text-sm">{v.name}</h2>
              </a>
            ))}
          </div>
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
