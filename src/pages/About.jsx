import profileImage from "../assets/pfp.png";
import SocialSidebar from "../components/SocialSidebar";
import SkillsGrid from "../components/SkillsGrid.jsx";

export const About = () => {
  return (
    <>
      <section className="font-[Montserrat] relative min-h-screen bg-gradient-to-br from-[#182C3A] to-[#1A4674] text-white px-6 py-20 flex flex-col items-center justify-start">
        {/* Mobile sidebar */}
        <div className="absolute bottom-4 w-full flex justify-center md:hidden">
          <SocialSidebar />
        </div>

        {/* About Section */}
        <div className="relative z-10 max-w-5xl w-full space-y-12 align-center justify-center">
          <div className="bg-gradient-to-r from-[#182c3A] to-[#1e1e1e] p-6 md:p-10 rounded-xl shadow-lg flex flex-col md:flex-row gap-35 items-center md:items-start">
            {/* Profile + Inline Sidebar */}
            <div className="flex flex-row items-start gap-9">
              {/* Inline Social Sidebar - only visible on desktop */}
              <div className="hidden md:flex">
                <SocialSidebar inline />
              </div>

              {/* Profile Image */}
              <img
                src={profileImage}
                alt="Profile"
                className="w-150  rounded-full object-cover"
              />
            </div>

            {/* About Text */}
            <div className="text-sm sm:text-base space-y-4 text-gray-200 text-left">
              <p>
                I’m a{" "}
                <span className="text-[#dfa05e] font-medium">
                  Computer Science
                </span>{" "}
                major focused on full-stack development. I turn pixels into
                binary and{" "}
                <span className="text-[#dfa05e]">ideas into reality</span> —
                building intuitive, responsive, and purposeful digital
                experiences from the ground up.
              </p>
              <p>
                I’m always exploring how things work,{" "}
                <span className="text-[#dfa05e]">refining</span> how they’re
                built, and writing code that does more than just run — it
                resonates. I’m open to opportunities where I can push my limits,{" "}
                <span className="text-[#dfa05e]">contribute meaningfully</span>,
                and keep creating things that matter.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <SkillsGrid />
          </div>
        </div>
      </section>
    </>
  );
};
