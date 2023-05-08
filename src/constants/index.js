import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  rds,
  python,
  nodejs,
  mongodb,
  sql,
  figma,
  scikit,
  dataprophet,
  hrtc,
  alleo,
  depauw,
  DTrack,
  til,
  iBudgets,
  tableau,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "R",
    icon: rds,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "scikit",
    icon: scikit,
  },
];

const experiences = [
  {
    title: "QA Business Analyst Intern",
    company_name: "Alleo",
    icon: alleo,
    iconBg: "#383E56",
    date: "May 2022 - Aug 2022",
    points: [
      "Lead issue tracking and resolution efforts, including logging issues, tracking their progress, and communicating updates to the product team.",
      "Collected data on competitors in the marketplace and created up-to-date organizational charts and maps.",
      "Developed comprehensive test cases linked to specific business requirements covering all relevant business and system functionality.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "DataProphet",
    icon: dataprophet,
    iconBg: "#383E56",
    date: "Jun 2021 - Aug 2021",
    points: [
      "Utilized Blender 3D graphics software and Python to create a pipeline that generated high-quality data.",
      "Industrial parts’ damage recognition and prediction, shorten the human resource by 98.3% - researched state-of-the-art object detection, segmentation and TensorFlow models.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "Himachal Road Transport Corporation (HRTC)",
    icon: hrtc,
    iconBg: "#E6DEDD",
    date: "May 2021 - Aug 2021",
    points: [
      "Designed and developed an online bus ticket reservation system.",
      "Built an intuitive Graphical User Interface (GUI) using Tkinter.",
      "Designed and configured database and backend applications and programs, contributing to operational continuity and increasing efficiency.",
    ],
  },
  {
    title: "STEM Liaison",
    company_name: "DePauw University",
    icon: depauw,
    iconBg: "#E6DEDD",
    date: "Nov 2020 - Dec 2021",
    points: [
      "Initiated and executed a social media action plan to drive engagement and promote current grant opportunities.",
      "Implemented the use of HTML5, ReactJS, CSS3, jQuery and Bootstrap 4 to create a website to highlight the resources, events and activities of the program. ",
      "Used MailChimp to create the newsletter and wrote relevant stories and articles each week.",
      "Reported performance of the campaign media using Microsoft Power BI and Tableau.",
      "Assisted the manager in tasks pertaining to the growth and success of underserved STEM students.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Suryansh is a talented web developer with a keen eye for design and user experience. With him, I created a website for a college course that exceeded the course goals and requirements. He's the best and I learned a lot from him!",
    name: "Taha Babar",
    designation: "Software Engineer",
    company: "Apple",
    image:
      "https://media.licdn.com/dms/image/C4E03AQEONpZbYzuXlw/profile-displayphoto-shrink_800_800/0/1657600845902?e=1683763200&v=beta&t=9t9jI40w-5TtPqTeox8VWzoZqcU3ASLBf37iB2WlUiU",
  },
  {
    testimonial:
      "Suryansh is a highly skilled and professional developer who consistently delivers high-quality work. He has a deep understanding of software development principles and is always up-to-date on the latest technologies.",
    name: "Keshav Kumar Singh",
    designation: "Software Development Engineer",
    company: "Amazon",
    image:
      "https://media.licdn.com/dms/image/D4D35AQF2b8AywmJQgw/profile-framedphoto-shrink_400_400/0/1635598643815?e=1684184400&v=beta&t=Ml2qB2nPAvpCLJMKlIqbqUqHK1WujTrBgy5Lwww-Q3Q",
  },
  {
    testimonial:
      "My classmate in Data Science is an absolute rockstar. His exceptional analytical skills and ability to turn complex data into actionable insights are truly impressive. I feel fortunate to have collaborated with him on various projects.",
    name: "Murtaza Hassan",
    designation: "Student",
    company: "DePauw University",
    image:
      "https://media.licdn.com/dms/image/D5603AQG1V2IWpXHiAw/profile-displayphoto-shrink_800_800/0/1667678683365?e=1683763200&v=beta&t=p7t_aT_hKyM0zXKV5WC5MGXAYIPBpd1UOj86i91WQnQ",
  },
];

const projects = [
  {
    name: "DTrack",
    description:
      "A MERN stack job tracking application where you can track your internship/job applications and get valuable insights.",
    tags: [
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
      {
        name: "CRUD",
        color: "pink-text-gradient",
      },
    ],
    image: DTrack,
    source_code_link: "https://github.com/suryanshchauhan/DTrack",
  },
  {
    name: "Today I Learned",
    description:
      "Today I Learned is a full-stack web application where users can add and share interesting facts they have learned. The app allows users to upvote or downvote facts and provides a category-based filtering system to browse the fact list more efficiently.",
    tags: [
      {
        name: "fullstack",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "orange-text-gradient",
      },
    ],
    image: til,
    source_code_link: "https://github.com/suryanshchauhan/today-i-learned",
  },
  {
    name: "iBudgets",
    description:
      "iBudgets is a simple and user-friendly web application for managing personal budgets. Users can assign amounts to categories, log expenses in those categories, and get a clear overview of their financial situation.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: iBudgets,
    source_code_link: "https://github.com/suryanshchauhan/iBudgets",
  },
];

export { services, technologies, experiences, testimonials, projects };
