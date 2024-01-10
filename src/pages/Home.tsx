import { easeOut, motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.34], [1, 0], {
    ease: easeOut,
  });

  return (
    <>
      {/* Hero */}
      <main className="w-full h-screen font-grotesque bg-black text-white flex items-center content-center px-10 py-5">
        <motion.section
          style={{ opacity }}
          className="fixed flex items-center content-center"
        >
          <div className="flex flex-col items-start content-start space-y-1">
            <h1 className="text-6xl font-bold">
              Ediga-Oya Memorial Foundation
            </h1>
            <h2 className="text-3xl font-medium text-gray-600">
              Investing in children from underprivileged households
            </h2>
            <h2 className="text-3xl font-medium text-gray-600">
              in the greater Otukpo area
            </h2>
          </div>
        </motion.section>
      </main>
      <section className="w-full h-screen font-grotesque bg-white text-black flex items-center content-center justify-center">
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
      <section className="w-full h-screen font-grotesque bg-black text-white flex items-center content-center justify-end px-10 py-5">
        <section className="flex flex-col items-end content-end justify-center">
          <h1 className="text-5xl font-bold">more content</h1>
        </section>
      </section>
    </>
  );
}
