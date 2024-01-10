import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donors from "./pages/Donors";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Team from "./pages/Team";

function App() {
  const { scrollYProgress } = useScroll();

  const navOpacity = useTransform(scrollYProgress, [0, 1], [0, 1], {
    ease: easeInOut,
    clamp: true,
  });

  return (
    <Router>
      {/* navigation */}
      <motion.nav
        style={{ opacity: navOpacity }}
        className="w-5/6 mt-3 px-10 py-5 left-[10%] font-grotesque rounded-full border-[1px] border-black/10 bg-black/10 backdrop-blur-2xl fixed z-20 text-gray-500 flex items-center content-center justify-center space-x-10"
      >
        <Link
          to="/"
          className="flex items-center content-center text-gray-500 font-bold"
        >
          Home
        </Link>
        <Link
          to="/gallery"
          className="flex items-center content-center text-gray-500 font-bold"
        >
          Gallery
        </Link>
        <Link
          to="/team"
          className="flex items-center content-center text-gray-500 font-bold"
        >
          Meet the Team
        </Link>
        <Link
          to="donors"
          className="flex items-center content-center text-gray-500 font-bold"
        >
          For Donors
        </Link>
        <Link
          to="/contact"
          className="flex items-center content-center text-gray-500 font-bold"
        >
          Contact Us
        </Link>
        <Link
          to="/about"
          className="flex items-center content-center text-gray-500 font-bold"
        >
          About Us
        </Link>
      </motion.nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donors" element={<Donors />} />
      </Routes>
      <footer className="px-10 py-5 flex font-grotesque items-center content-center justify-center space-x-4 bg-black text-white">
        <a
          href="https://instagram.com/"
          className="flex items-center content-center gap-2 text-gray-200"
        >
          Connect with us <span className="i-lucide:instagram" />
        </a>
        <a
          href="https://google.com"
          className="flex items-center content-center gap-2 text-gray-200"
        >
          Send us an Email <span className="i-lucide:mail" />
        </a>
      </footer>
    </Router>
  );
}

export default App;
