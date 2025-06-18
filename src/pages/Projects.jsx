import SocialSidebar from "../components/SocialSidebar";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectCardsData";

export const Projects = () => {
  return (
    <section className="font-[Montserrat] relative min-h-screen bg-gradient-to-br from-[#182C3A] to-[#1A4674] text-white px-6 py-20 flex flex-col items-center justify-start">
      
      {/* Mobile SocialSidebar */}
      <div className="absolute bottom-4 w-full flex justify-center md:hidden">
        <SocialSidebar />
      </div>

      {/* Desktop SocialSidebar */}
      <div className="hidden md:block absolute left-6 top-1/4">
        <SocialSidebar />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl w-full space-y-12 flex flex-col items-center">
        <header className="text-center space-y-3">
          <h2 className="text-3xl font-semibold">Project Catalogue</h2>
          <p className="text-gray-300">
            From <code>src/</code> to stage - here's what I've made.
          </p>
        </header>

        {/* Projects grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
