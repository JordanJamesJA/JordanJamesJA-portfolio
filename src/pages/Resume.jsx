import SocialSidebar from "../components/SocialSidebar";
import resumeImage from "../assets/resume-image.png"; // Replace with your screenshot filename

export const Resume = () => {
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

      {/* Resume Content */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 md:mt-20 items-center justify-items-center px-4">
        {/* Left: Text Content */}
        <div className="text-center md:text-left space-y-8 md:space-y-16 max-w-md px-2">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Behind the Code &lt;/&gt;
          </h2>
          <p className="text-lg text-gray-300">
            Here’s a concise overview of my academic background, technical
            skills, and work experience. Whether you're skimming or deep-diving,
            everything essential is right here.
          </p>
          <a
            href="/public/Resume.pdf"
            download
            className="bg-[#dfa05e] text-white px-6 py-2 rounded shadow hover:bg-orange-500 transition"
          >
            Download PDF
          </a>
        </div>

        {/* Right: Resume Image Preview (Blurred) */}
        <div className="hidden md:flex justify-center md:justify-end">
          <img
            src={resumeImage}
            alt="Resume Preview"
            className="w-[300px] md:w-[380px] rounded-lg shadow-lg blur-sm opacity-80 hover:blur-none hover:opacity-100 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};
