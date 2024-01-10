import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useState } from "react";

type TeamMember = {
  name: string;
  image: string;
  role: string;
  words: string;
};

const team: TeamMember[] = [
  {
    name: "Ikwue Inalegwu",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
    role: "Board Member , Head of ICT",
    words:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Ikwue Inalegwu",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    role: "Board Member , Head of ICT",
    words:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Ikwue Inalegwu",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    role: "Board Member , Head of ICT",
    words:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Ikwue Inalegwu",
    image: "https://randomuser.me/api/portraits/women/59.jpg",
    role: "Board Member , Head of ICT",
    words:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Ikwue Inalegwu",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    role: "Board Member , Head of ICT",
    words:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Team() {
  const { scrollYProgress } = useScroll();

  const [teamModal, setTeamModal] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollDown = useCallback(() => {
    window.scroll({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }, []);

  const triggerTeamModal = useCallback((i: number) => {
    setTeamModal(true);
    setActiveIndex(i);
  }, []);

  return (
    <>
      {teamModal && (
        <div className="w-3/6 h-3/6 fixed left-[26%] top-[25%] border-[0.1px] border-black/10 shadow-2xl z-30 bg-white rounded-xl flex items-center content-center">
          <img
            src={team[activeIndex!].image}
            alt={team[activeIndex!].name}
            className="w-2/4 h-full rounded-tl-lg rounded-bl-lg"
          />
          <div className="px-2 py-2 text-gray-600 font-medium prose">
            {team[activeIndex!].words}
          </div>
          <button
            type="button"
            className="absolute left-[96%] top-[0.5%]"
            onClick={() => setTeamModal(false)}
          >
            <span className="i-lucide:x text-lg text-red-500" />
          </button>
        </div>
      )}
      <main className="w-full font-grotesque h-screen bg-black flex items-center content-center justify-center text-white">
        <motion.section
          style={{ opacity }}
          className="flex flex-col w-full h-full px-10 py-5 items-center fixed content-center justify-between"
        >
          <div className="flex flex-col items-center content-center justify-center flex flex-1">
            <h1 className="text-4xl font-bold">
              Behind Every Great Organization is a Great Team
            </h1>
            <span className="text-2xl font-bold text-gray-500">
              It's time you met ours
            </span>
          </div>
          <button type="button" onClick={scrollDown} className="cursor-pointer">
            <span className="i-lucide:chevron-down text-4xl animate-bounce" />
          </button>
        </motion.section>
      </main>
      <section className="w-full font-grotesque h-screen bg-gray-100 text-black flex flex-col items-center content-center justify-center">
        <div className="flex items-center content-center justify-center space-y-5 space-x-5 flex-wrap">
          {team.map((v, i) => {
            const split = v.role.split(",");

            return (
              <div
                key={`${v.name}-${i}`}
                onClick={() => triggerTeamModal(i)}
                className="px-10 cursor-pointer py-5 flex flex-col items-center content-center space-y-2"
              >
                <img
                  src={v.image}
                  className="w-3/6 h-3/6 rounded-full cursor-pointer saturate-0 hover:saturate-100 transition transition-duration-[0.5s]"
                  alt="random_user"
                />
                <h3 className="font-bold text-lg">{v.name}</h3>
                <span className="text-sm text-gray-500">
                  {split[0]},<span className="italic">{split[1]}</span>
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
