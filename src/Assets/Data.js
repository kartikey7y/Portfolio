import photo from "./photo.png";
import project1 from "./project1.png";
import project2 from "./project2.png";
import project3 from "./project3.png";

/* this data for intro page*/
export const MainData = {
  id: "1",
  name: "Kartikey Yadav",
  photo: photo,
  degination: "a Software Engineer",
  subheading:
    "currently focused on building user experiences that drive growth.",
  linkdin:
    "https://www.linkedin.com/in/kartikey-yadav-4a7a612b6/?trk=public-profile-join-page",
  github: "https://github.com/kartikey7y",
};

/* this data for work page*/
export const Projects = [
  {
    id: "1",
    projectTitle: "Deffinder",
    projectImage: project1,
    description:
      "Deffinder is a website dedicated to providing comprehensive explanations of words in English. Whether you're looking to expand your vocabulary, understand nuanced meanings, or simply clarify definitions, Deffinder offers a user-friendly interface that facilitates easy exploration of words and their explanations.",
    projectLink: "https://deffinder-fe.vercel.app/",
    githubLink: "https://github.com/kartikey779/deffinder_fe",
    skills: ["HTML", "Css", "ReactJs", "NodeJs", "MongoDb", "Scrapy/Python"],
  },
  {
    id: "2",
    projectTitle: "Elecdhan",
    projectImage: project2,
    description:
      "Elecdhan is a website designed to efficiently store and manage data related to elections. It provides a centralized platform for organizing and accessing election-related information, ensuring transparency and ease of use for stakeholders.",
    projectLink: "https://elecdhan-fa.vercel.app/",
    githubLink: "https://github.com/kartikey779/elecdhan_fa",
    skills: ["React", "Bootstrap", "NodeJs"],
  },
  {
    id: "3",
    projectTitle: "Text Editor",
    projectImage: project3,
    description:
      "Text Editor is website mabe for editing text according to our need.I design this site using librery named as tiptap. This is a assignment given by a company.It did not have all functionalities",
    projectLink: "https://text-editor-lemon-iota.vercel.app/",
    githubLink: "https://github.com/kartikey7y/Text_editor",
    skills: ["React", "Bootstrap", "NodeJs", "Tiptap"],
  },
];

/* this data for about page*/
export const aboutPageData = {
  mainHeading: "I am eager to design creative and innovative websites.",
  paragraph:
    "I am a passionate software developer and MCA student with a strong academic foundation, having graduated with a Bachelor of Arts degree. I specialize in frontend development, leveraging technologies like HTML, CSS, Bootstrap, Tailwind CSS, and React to craft engaging user interfaces. On the backend, I work with Node.js to build robust and scalable applications. My goal is to create innovative and impactful solutions that combine functionality with an exceptional user experience.",
  skils: [
    {
      id: 1,
      tool: "Frontend Tools",
      toolData:
        "JavaScript(ES6+), React, Next.js, TypeScript, Redux, Redux Toolkit, React Query, HTML5, Git/GitHub, React Hook Form, Formik.",
    },
    {
      id: 2,
      tool: "UI libraries",
      toolData: "CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Bootstrap.",
    },
    { id: 3, tool: "Backend Tools", toolData: "Python/Django,NodeJs." },
  ],
};

/* this data for about page*/
export const ContactData = {
    email:"abhi7.kartik@gmail.com"
}
