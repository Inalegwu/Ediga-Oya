import {
  easeInOut,
  easeOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0], {
    ease: easeOut,
  });

  const navOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1], {
    ease: easeInOut,
    clamp: true,
  });

  return (
    <>
      <motion.nav
        style={{ opacity: navOpacity }}
        className="w-5/6 mt-3 px-10 py-5 left-[10%] rounded-full bg-transparent backdrop-blur-2xl fixed z-99999 text-gray-500 flex items-center content-center justify-center space-x-10"
      >
        <a
          href="https://google.com"
          className="flex items-center content-center text-gray-500 font-bold"
        >
          Gallery
        </a>
        <a
          href="https://google.com"
          className="flex items-center content-center text-gray-500 font-bold"
        >
          For Donors
        </a>
        <a
          href="https://google.com"
          className="flex items-center content-center text-gray-500 font-bold"
        >
          Meet the Team
        </a>
        <a
          href="https://google.com"
          className="flex items-center content-center text-gray-500 font-bold"
        >
          About Us
        </a>
      </motion.nav>
      {/* Hero */}
      <main className="w-full h-screen bg-black text-white flex items-center content-center px-10 py-5">
        <motion.section
          style={{ opacity }}
          className="fixed flex items-center content-center"
        >
          <div className="flex flex-col items-start content-start space-y-1">
            <h1 className="text-6xl font-bold">
              Ediga-Oya Memorial Foundation
            </h1>
            <h2 className="text-3xl font-medium text-gray-600">
              Investing in talented children from underprivileged households
            </h2>
            <h2 className="text-3xl font-medium text-gray-600">
              in the greater Otukpo area
            </h2>
          </div>
        </motion.section>
      </main>
      <section className="w-full h-screen bg-white text-black flex items-center content-center justify-center">
        <section className="flex flex-col items-center content-center">
          <h1 className="text-5xl font-bold">Something</h1>
          <h2 className="text-2xl font-medium text-gray-600">
            some more things
          </h2>
          <h2 className="text-2xl font-medium text-gray-600">
            some more things
          </h2>
        </section>
      </section>
      <section className="w-full h-screen bg-black text-white flex items-center content-center justify-end px-10 py-5">
        <section className="flex flex-col items-end content-end justify-center">
          <h1 className="text-5xl font-bold">more content</h1>
        </section>
      </section>
      <footer className="px-10 py-5 flex items-center content-center justify-center space-x-4 bg-black text-white">
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
    </>
  );
}

export default App;
