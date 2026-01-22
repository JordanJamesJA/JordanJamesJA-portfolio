import newsPaperImage from "../assets/newspaper-demo.png";
import sumRunner from "../assets/sum-runner.png";
import flavorCraft from "../assets/flavor-craft.png";
import healthComm from "../assets/healthcomm.png";
import contextAssistant from "../assets/contextassistant.png";

const projectCardsData = [
  {
    title: "Context Assistant",
    description:
      "Context Assistant is a full stack application that uses a locally hosted language model to extract structured information from conversations and store it in a relational database for fast and reliable recall.",
    techStack: "React, Typescript, Node.js, Express, PostgreSQL, Docker",
    image: contextAssistant,
    githubLink: "https://github.com/JordanJamesJA/context-assistant",
  },
  {
    title: "HealthComm",
    description:
      "HealthComm is a healthcare monitoring platform that helps caregivers track patients with chronic conditions like hypertension and diabetes in real time using wearable devices, sending alerts for urgent medical attention.",
    techStack:
      "React, Typescript, TailwindCSS, Vite, Firebase, IoT, Kofka, Azure Ai",
    image: healthComm,
    githubLink: "https://github.com/JordanJamesJA/HealthComm",
    liveDemoLink: "https://flavorcraft-meals.netlify.app/",
  },
  {
    title: "Sum Runner",
    description:
      "A kid-friendly math adventure game built with HTML, CSS, and JavaScript — designed to help young learners practice arithmetic through fun, progressive levels.",
    techStack: "HTML, CSS, JavaScript",
    image: sumRunner,
    githubLink: "https://github.com/JordanJamesJA/Sum-Runner",
    liveDemoLink: "https://sumrunner.netlify.app/",
  },
  {
    title: "FlavorCraft",
    description:
      "FlavorCraft is a responsive web application that helps users discover, save, and explore recipes. Featuring smart search, curated meals, and a personal cookbook, it’s designed for seamless browsing on any device.",
    techStack: "HTML, CSS, JavaScript",
    image: flavorCraft,
    githubLink: "https://github.com/JordanJamesJA/mealsite",
    liveDemoLink: "https://flavorcraft-meals.netlify.app/",
  },
  {
    title: "NewsPaper Landing Page",
    description:
      "A modern newspaper landing page layout with a responsive design and static content.",
    techStack: "HTML, CSS",
    image: newsPaperImage,
    githubLink: "https://github.com/JordanJamesJA/newspaper-demo",
    liveDemoLink: "https://newspaper-template-demo.netlify.app/",
  },
];

export default projectCardsData;
