import ikea_image from "../assets/svg/projects/ikea.png";
import martine_image from "../assets/svg/projects/travel.png";
import promptpedia from "../assets/svg/projects/promptpedia.png";

export const projectsData = [
  {
    id: 1,
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
    id: 3,
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
