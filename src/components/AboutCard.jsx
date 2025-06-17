// AboutCard.jsx
import profileImage from "../assets/pfp.png";
import SocialSidebar from "./SocialSidebar";

const AboutCard = () => {
  return (
    <div className="bg-gradient-to-r from-[#182c3A] to-[#1e1e1e] p-6 md:p-10 rounded-xl shadow-lg flex flex-col md:flex-row gap-8 md:gap-20 items-center md:items-start relative w-full">
      {/* Title in top-left of the card */}
      <h2 className="absolute top-5 left-5 md:left-10 text-xl font-medium text-white">
        About Me
      </h2>

      {/* Profile + Inline Sidebar */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-20 md:mt-10 w-full md:w-auto">
        {/* Inline Social Sidebar - only visible on desktop */}
        <div className="hidden md:flex">
          <SocialSidebar inline />
        </div>

        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Profile"
          className="w-50 md:w-140 rounded-full object-cover"
        />
      </div>

      {/* About Text */}
      <div className="text-sm sm:text-base space-y-4 text-gray-200 text-left mt-6 md:mt-10 px-2 md:px-0 w-full">
        <p>
          I’m a{" "}
          <span className="text-[#dfa05e] font-medium">Computer Science</span>{" "}
          major focused on full-stack development. I turn pixels into binary and{" "}
          <span className="text-[#dfa05e]">ideas into reality</span> — building
          intuitive, responsive, and purposeful digital experiences from the
          ground up.
        </p>
        <p>
          I’m always exploring how things work,{" "}
          <span className="text-[#dfa05e]">refining</span> how they’re built,
          and writing code that does more than just run — it resonates. I’m open
          to opportunities where I can push my limits,{" "}
          <span className="text-[#dfa05e]">contribute meaningfully</span>, and
          keep creating things that matter.
        </p>
      </div>

      {/* Mobile Social Sidebar - only visible on mobile */}
      <div className="w-full flex justify-center mt-10 md:hidden">
        <SocialSidebar />
      </div>
    </div>
  );
};

export default AboutCard;
