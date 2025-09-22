import { RiGithubFill, RiExternalLinkLine } from "react-icons/ri";

const ProjectCard = ({ title, description, techStack, image, githubLink, liveDemoLink }) => {
  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl shadow-lg p-4 hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="rounded-lg w-full" />
      <h3 className="mt-4 font-semibold text-white text-lg">{title}</h3>
      <p className="text-gray-300 text-sm mt-2">{description}</p>
      <p className="text-sm text-[#dfa05e] mt-2 font-medium">{techStack}</p>
      
      {/* Right-aligned icons */}
      <div className="flex gap-4 mt-4 justify-end">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <RiGithubFill className="text-white text-xl" />
        </a>
        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
          <RiExternalLinkLine className="text-white text-xl" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
