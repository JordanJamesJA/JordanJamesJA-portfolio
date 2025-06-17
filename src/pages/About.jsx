import SocialSidebar from "../components/SocialSidebar";
import SkillsGrid from "../components/SkillsGrid.jsx";
import AboutCard from "../components/AboutCard.jsx"; 

export const About = () => {
  return (
    <section className="font-[Montserrat] relative min-h-screen bg-gradient-to-br from-[#182C3A] to-[#1A4674] text-white px-6 py-20 flex flex-col items-center justify-start">
      {/* Mobile sidebar */}
      <div className="absolute bottom-4 w-full flex justify-center md:hidden">
        <SocialSidebar />
      </div>

      {/* About Section */}
      <div className="relative z-10 max-w-5xl w-full space-y-12 align-center justify-center">
        <AboutCard /> 
        <SkillsGrid />
      </div>
    </section>
  );
};
