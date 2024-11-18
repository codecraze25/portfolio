import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import hulkCars from "@/public/hulk-cars.png";
import scribbleImg from "@/public/scribble.png";
import fjallravenImg from "@/public/fjallraven.png";
import juicedbikesImg from "@/public/juicedbikes.png";
import columbiaImg from "@/public/columbia.png";
import albertsonImg from "@/public/albertson.png";

import ozdevsImg from "@/public/ozdevs-two.png";
import assetTradingImg from "@/public/asset-trading.jpg";
import euphorusImg from "@/public/euphorus-two.png";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Full Stack Developer",
    location: "Devsinc - Contract",
    description:
      "Implemented React Native for cross-platform apps and contributed to full-stack development using technologies like JavaScript, Node.js, and Python. I also developed RESTful APIs, conducted code reviews, and promoted collaboration using tools like Git, Jira, and Trello.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2024 - Present",
  },
  {
    title: "Senior Software Engineer",
    location: "Columbia Sportswear",
    description:
      "Collaborated with a team to design scalable web apps using React, Next.js, and Angular, while developing robust backend systems with Node.js, Java, and Spring Boot. Leveraged AWS, serverless architecture, and real-time data streaming with Apache Kafka, alongside Kubernetes and Docker for efficient deployment.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2022 - March 2024",
  },
  {
    title: "Software Engineer",
    location: "Albertsons",
    description:
      "Worked on both frontend and backend using PHP (Laravel), TypeScript (Vue, React, Node.js), and integrated payment gateways like PayPal and Stripe. Also implemented SSR for SEO optimization, used Jest/Mocha for testing, and built a Python/Django backend with AI algorithms, integrating Elasticsearch for efficient search functionality.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2018 - January 2022",
  },
  {
    title: "Full Stack Developer",
    location: "Uber",
    description:
      "Developed dynamic front-end applications with Vue, React, Tailwind CSS, and JavaScript for responsive UI, and built LAMP stack web apps using Laravel and Symfony. Also utilized jQuery for DOM manipulation and AJAX, while enhancing code quality through unit and integration testing with Jest and PHPUnit.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2016 - December 2017",
  },
] as const;

export const projectsData = [
  {
    title: "Scribble",
    description:
      "I built this project using React. Scribble Together offers a collaborative online whiteboard, ideal for remote tutoring, meetings, and shared note-taking. It supports handwriting, diagram drawing, PDF markup, and works well with iPads and Apple Pencils.",
    tags: ["TypeScript", "Tailwind CSS", "React", "Stripe", "AWS"],
    icons: [
      "devicon:typescript",
      "logos:react",
      "devicon:tailwindcss",
      "logos:stripe",
      "logos:aws",
    ],
    imageUrl: scribbleImg,
    urlLink: "https://scribbletogether.com/",
  },
  {
    title: "FJALL RAVEN",
    description:
      "I built this project using React. Fjällräven is a Swedish outdoor brand known for its durable, functional, and eco-friendly products, including backpacks, clothing, and accessories. The company emphasizes sustainability, using materials like organic cotton and recycled polyester.",
    tags: ["TypeScript", "React", "ASP.NET", "AWS"],
    icons: [
      "logos:azure",
      "devicon:typescript",
      "logos:react",
      "logos:bootstrap",
      "simple-icons:dotnet",
    ],
    imageUrl: fjallravenImg,
    urlLink: "https://www.fjallraven.com/us/en-us/",
  },
  {
    title: "Juiced Bikes",
    description:
      "I contributed to the Juiced Bikes e-commerce platform using Shopify, creating a user-friendly and responsive website for their innovative electric bikes. Juiced Bikes is known for its high-performance, long-range e-bikes that combine cutting-edge technology with sustainable transportation solutions.",
    tags: ["Shopify", "Tailwind CSS"],
    icons: [
      "logos:shopify",
      "devicon:tailwindcss",
      "la:amazon-pay",
      "logos:mastercard",
      "cib:apple-pay",
    ],
    imageUrl: juicedbikesImg,
    urlLink: "https://www.juicedbikes.com/",
  },
  {
    title: "Hulk Cars",
    description:
      "I built this project using React. Hulk Cars offers car rental services, likely with a focus on integrating blockchain technology for vehicle tokenization. This approach may allow fractional ownership or secure transactions involving car assets.",
    tags: ["TypeScript", "React", "Node.js", "AWS"],
    icons: [
      "logos:react",
      "logos:w3c",
      "skill-icons:emotion-light",
      "logos:highcharts",
      "simple-icons:godaddy",
    ],
    imageUrl: hulkCars,
    urlLink: "https://hulkcars.com/",
  },
  {
    title: "Columbia Sportswear",
    description:
      "I contributed to the development of Columbia Sportswear's e-commerce platform using Java, enhancing the online shopping experience for their extensive range of outdoor apparel and equipment. Columbia Sportswear, established in 1938, is renowned for its durable and innovative products, including outerwear, sportswear, footwear, and accessories designed to withstand diverse weather conditions. The company emphasizes advanced technologies like Omni-Heat™ and Omni-Tech™ to provide superior warmth and protection for outdoor enthusiasts.",
    tags: ["Java", "MariaDB", "Swing"],
    icons: [
      "logos:java",
      "logos:mariadb-icon",
      "logos:bootstrap",
      "cib:apple-pay",
    ],
    imageUrl: columbiaImg,
    urlLink: "https://www.columbia.com/",
  },
  {
    title: "Albertson",
    description:
      "I contributed to the development of Albertsons' e-commerce platform, enhancing the online shopping experience for their extensive range of grocery products. Albertsons is a leading American grocery company, operating numerous stores across the United States, and is committed to providing quality products and services to its customers.",
    tags: ["TypeScript", "React", "Node.js", "AWS"],
    icons: [
      "logos:java",
      "devicon:angularjs",
      "devicon:mongodb",
      "logos:bootstrap",
      "devicon:okta",
      "logos:apache",
    ],
    imageUrl: albertsonImg,
    urlLink: "https://www.albertsons.com/",
  },
] as const;

export const skillsData = [
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Angular",
    icon: "devicon:angular",
  },
  {
    name: "Vue",
    icon: "devicon:vuejs",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "PHP",
    icon: "logos:php",
  },
  {
    name: "Laravel",
    icon: "logos:laravel",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Django",
    icon: "logos:django-icon",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "Spring Boot",
    icon: "logos:spring-icon",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "MongoDB",
    icon: "devicon:mongodb",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "Jenkins",
    icon: "devicon:jenkins",
  },
  {
    name: "Shopify",
    icon: "logos:shopify",
  },
] as const;
