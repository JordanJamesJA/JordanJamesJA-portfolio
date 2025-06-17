import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
  SiC,
  SiCplusplus,
} from "react-icons/si";

// Categorized skills
const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  { name: "C", icon: <SiC className="text-blue-600" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
];

const tools = [
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
];

const SkillsGrid = () => {
  const [activeTab, setActiveTab] = useState("tech");
  const displayedSkills = activeTab === "tech" ? techStack : tools;

  return (
    <section className="font-[Montserrat] px-4 py-20 max-w-6xl mx-auto flex gap-8 min-h-[500px]">
      {/* Rotated Title */}
      <div className="hidden md:flex items-center">
        <AnimatePresence mode="wait">
          <motion.h2
            key={activeTab} // triggers re-animation on tab change
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
            className="text-5xl font-medium text-[#9cA3AF] rotate-[-90deg] origin-left whitespace-nowrap"
          >
            SKILLS
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 flex-1">
        {/* Tabs */}
        <div className="flex gap-6 text-lg font-semibold text-gray-500">
          <span
            className={`cursor-pointer ${
              activeTab === "tech"
                ? "text-white border-b-2 border-[#dfa05e] font-semibold"
                : "hover:text-white border-b-2 border-transparent hover:border-orange-400 transition"
            }`}
            onClick={() => setActiveTab("tech")}
          >
            Tech Stack
          </span>
          <span
            className={`cursor-pointer ${
              activeTab === "tools"
                ? "text-white border-b-2 border-[#dfa05e] font-semibold"
                : "hover:text-white border-b-2 border-transparent hover:border-orange-400 transition"
            }`}
            onClick={() => setActiveTab("tools")}
          >
            Tools
          </span>
        </div>

        {/* Animated Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {displayedSkills.map((skill, index) => (
              <div
                key={index}
                className="w-full h-16 flex flex-row items-center gap-3 p-4 bg-transparent rounded-lg border-2 border-[#dfa05e] shadow-md hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl">{skill.icon}</div>
                <p className="text-white text-sm font-semibold">{skill.name}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsGrid;
