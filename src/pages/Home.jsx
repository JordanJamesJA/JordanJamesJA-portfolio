import heroImage from "../assets/hero.jpg";
import SocialSidebar from "../components/SocialSidebar";

export const Home = () => {
  return (
    <>
      <SocialSidebar />
      <section
        className="font-[Montserrat] relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.4 }}
        ></div>

        <div className="relative z-10 flex flex-col items-start justify-center text-left px-4 text-white">
          <h2 className="text-2xl md:text-xl font-semibold bg-gradient-to-r from-white to-[#DFA05E] bg-clip-text text-transparent">
            I Develop Designs &lt;/&gt;
          </h2>

          <h1 className="mt-2 text-4xl md:text-4  xl font-semibold">
            Jordan James
          </h1>

          <h3 className="mt-2 text-2xl md:text-2xl text-gray-300 font-semibold">
            Web Developer
          </h3>

          <p className="mt-4 text-xl md:text-lg text-white-400 max-w-xl">
            Looks simple, acts powerful.
          </p>
        </div>
      </section>
    </>
  );
};
