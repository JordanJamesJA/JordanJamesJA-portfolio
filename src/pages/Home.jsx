import heroImage from "../assets/hero.jpg";
import SocialSidebar from "../components/SocialSidebar";
import { TypeAnimation } from "react-type-animation";

export const Home = () => {
  return (
    <>
      <section
        className="font-[Montserrat] relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.4 }}
        ></div>

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-start justify-center text-left px-4 lg:mr-40 xl:mr-32 text-white">
          <h2 className="text-2xl md:text-xl font-semibold bg-gradient-to-r from-white to-[#DFA05E] bg-clip-text text-transparent">
            I Develop Designs &lt;/&gt;
          </h2>

          <h1 className="mt-2 text-4xl md:text-4xl font-semibold">
            Jordan James
          </h1>

          <h3 className="mt-2 text-2xl md:text-2xl text-gray-300 font-semibold">
            <TypeAnimation
              sequence={["Web Developer", 2500, "Software Engineer", 2500]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h3>

          <p className="mt-4 text-xl md:text-lg text-white-400 max-w-xl">
            Looks simple, acts powerful.
          </p>
        </div>

        {/* Desktop sidebar */}
        <div className="hidden md:block">
          <SocialSidebar />
        </div>

        {/* Mobile sidebar */}
        <div className="absolute bottom-4 w-full flex justify-center md:hidden">
          <SocialSidebar />
        </div>
      </section>
    </>
  );
};
