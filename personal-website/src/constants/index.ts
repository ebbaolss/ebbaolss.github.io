import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  carrent,
  jobit,
  tripguide,
  ucberkeley,
  rebel,
  uio,
  vipps,
  aider,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About me",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "App development",
    icon: web,
  },
  {
    title: "Good solutions",
    icon: backend,
  },
  {
    title: "New technology",
    icon: mobile,
  },
  {
    title: "Creativness",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
];

const experiences = [
  {
    title: "Developer at Vipps MobilePay",
    company_name: "Vipps MobilePay",
    icon: vipps,
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "IOS-Developer working with swift and Xcode",
      "Project: Shared Reccuring Payments",
      "Link to the summer project: https://www.vipps.no/om-oss/nyheter/studenter-med-ukelønn-løsning-i-vipps/",
    ],
  },
  {
    title: "Systemutvikler",
    company_name: "Aider",
    icon: aider,
    iconBg: "#E6DEDD",
    date: "February 2024 - ",
    points: ["Low code on the Bubble IO platform"],
  },
  {
    title: "Event Manager Assistant",
    company_name: "Rebel Oslo",
    icon: rebel,
    iconBg: "#383E56",
    date: "September 2021 - June 2024",
    points: [
      "Rebel er en arena for kunnskapsdeling og denne jobben har lært meg mye om organisering, team-arbeid og skape produkter kunden ønsker.",
      "Bookinger, kundeansvarlig, kundebehandling, fakturering i Xledger, ansvar for eventer og konferanser i større skala og andre administrative tjenester.",
    ],
  },
  {
    title: "UiO - Studentambassadør for Institutt for informatikk  ",
    company_name: "University of Oslo",
    icon: uio,
    iconBg: "#E6DEDD",
    date: "March 2023",
    points: [
      "Var studentambassadør for UiO i forbindelse med åpen dag på informatikk bygget. Her presenterte jeg informatikkstudiet og hadde omvisning for videregående elever.",
    ],
  },
];

const education = [
  {
    institution: "University of California, Berkeley",
    icon: ucberkeley,
    iconBg: "#383E56",
    date: "Aug 2024 - Des 2024",
    degree: "Computer science - Exchange Semester",
    info: `During this semester at UC Berkeley, I am engaged in courses in artificial intelligence, algorithmic media design, and frontend architecture.
    The aim of this semester is to delve deeply into cutting-edge technologies, expand my professional expertise, and challenge myself both technically and linguistically. 
    This experience enhances my development as a software developer by providing insights and skills that strengthen my ability to contribute to innovative solutions and projects.
    In addition to my studies, I have joined the Cal Ski Club, and I play both golf and tennis. I am also active in the International Association of Norwegian Students Abroad (ANSA), which organizes events for norwegians.  
    `,
    points: ["Courses: ", "Extra: "],
  },
  {
    institution: "University of Oslo (UiO)",
    icon: uio,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - June 2025",
    degree: "MSc Informatics: Programming and Systemarchitecture",
    type: "University of Oslo",
    info: `
    I am pursuing a Master’s degree in Informatics with a focus on programming and system architecture. 
    Core subjects include frontend and app development programming, project work based on agile methodologies, IT management, and ethical hacking. 
    This education provides me with a comprehensive understanding of both technical skills and project management.`,
    points: ["Courses: ", "Extra: "],
  },
  {
    institution: "University of Oslo (UiO)",
    icon: uio,
    iconBg: "#E6DEDD",
    date: "August 2020 - June 2023",
    degree: "BSc Informatics: Programming and Systemarchitecture",
    type: "University of Oslo",
    info: `
    I have a Bachelor’s degree in Informatics, focusing on programming and system architecture.
     My coursework covered programming in Java, Python, and Kotlin, as well as data systems and information security.
      The degree also included a software engineering project, which is listed as "Sikt" in the Projects section of my portfolio.`,
    points: ["Courses: ", "Extra: "],
  },
];

const projects = [
  {
    name: "Car Rent",
    date: "Mars 2023 - June 2023",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    points: ["Kotlin", "React", "Pyton"],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    date: "Mars 2023 - June 2023",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    points: ["Kotlin", "React", "Pyton"],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    date: "Mars 2023 - June 2023",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    points: ["Kotlin", "React", "Pyton"],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects, education };
