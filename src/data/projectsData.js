import ikea_image from "../assets/svg/projects/ikea.png";
import martine_image from "../assets/svg/projects/travel.png";
import promptpedia from "../assets/svg/projects/promptpedia.png";
import tiktok from "../assets/svg/projects/tiktok.png";
import calenderView from "../assets/svg/projects/calenderView.png";
import recruiterEmailView from "../assets/svg/projects/recruiterEmailView.png";

export const projectsData = [
  {
    id: 6,
    projectName: "Recruiter Email Generator",
    projectDesc:
      "A simple and efficient Recruiter Email Generator that quickly helps job seekers craft professional emails for recruiters, job applications, referrals, and networking.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Radix-ui",
      "Lucide-react",
      "Zod",
      "Appwrite"
    ],
    code: "https://github.com/bhaskarkrp/Recruiter-Email-Generator",
    demo: "https://recruiter-email-generator.vercel.app/",
    image: recruiterEmailView,
  },
  {
    id: 5,
    projectName: "Event Calendar",
    projectDesc:
      "Event Calendar is a lightweight and user-friendly web application designed to help users efficiently manage and track events. Built with React, Next.js, and TypeScript, this project provides an intuitive UI for adding, editing, and viewing events in a calendar format.",
    tags: [
      "Next.js",
      "typeScript",
      "CSS",
      "calender-view",
      "localstorage",
      "zustand",
    ],
    code: "https://github.com/bhaskarkrp/Event-Calendar",
    demo: "https://event-calendar-ten-bice.vercel.app/",
    image: calenderView,
  },
  {
    id: 4,
    projectName: "TikTok-clone",
    projectDesc:
      "TikTok-clone is a web application that allows users to login/signup, watch and upload short videos",
    tags: [
      "Next.js",
      "typeScript",
      "CSS",
      "context-api",
      "appwrite",
      "canvas",
      "zustand",
    ],
    code: "https://github.com/bhaskarkrp/TikTok-clone",
    demo: "https://tik-tok-clone-sigma.vercel.app/",
    image: tiktok,
  },
  {
    id: 3,
    projectName: "PromptPedia",
    projectDesc:
      "PromptPedia is AI prompting tool for modern world to discover, create and share creative prompts.",
    tags: ["NextJs", "Tailwind", "Google Auth", "MongoDB"],
    code: "https://github.com/bhaskarkrp/promptpedia",
    demo: "https://promptpedia-okpv.vercel.app",
    image: promptpedia,
  },
  {
    id: 2,
    projectName: "Ikea.com-clone",
    projectDesc:
      "I developed and designed a website using ReactJS and Materialui, hosted on Vercel Pages, to showcase an international shopping website Ikea for home furnishing that offers a wide range of well-designed, functional home furnishing products at prices so low.",
    tags: ["React", "Context-API", "Material Ui"],
    code: "https://github.com/bhaskarkrp/Ikea-Clone",
    demo: "https://ikea-clone2.vercel.app/",
    image: ikea_image,
  },
  {
    id: 1,
    projectName: "Travel Website clone",
    projectDesc:
      "I created a web application that provides users to choose affordable dream hotel rooms and dinings, using HTML5 and CSS3 Grid Layouts for design and hosted on GitHub Pages.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    code: "https://github.com/bhaskarkrp/Travel_clone/",
    demo: "https://bhaskarkrp.github.io/Travel_clone/",
    image: martine_image,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
