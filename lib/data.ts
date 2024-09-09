import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import cryptoCrowdImg from '@/public/cryptocrowd2.png';
import ozdevsImg from '@/public/ozdevs-two.png';
import assetTradingImg from '@/public/asset-trading.jpg';
import euphorusImg from '@/public/euphorus-two.png';
import euphorusBackendImg from '@/public/euphorus-backend.png';
import techprowlImg from '@/public/techprowl-two.png';
import taskManagerImg from '@/public/task-manager.png';
import familyTreeImg from '@/public/bfsproject.jpg';
import binaryGameImg from '@/public//binary-game.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Education',
    hash: '#education',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Senior Full Stack Developer',
    location: 'Devsinc - Contract',
    description:
      'Implemented React Native for cross-platform apps and contributed to full-stack development using technologies like JavaScript, Node.js, and Python. I also developed RESTful APIs, conducted code reviews, and promoted collaboration using tools like Git, Jira, and Trello.',
    icon: React.createElement(CgWorkAlt),
    date: 'April 2024 - Present',
  },
  {
    title: 'Senior Software Engineer',
    location: 'Columbia Sportswear',
    description:
      'Collaborated with a team to design scalable web apps using React, Next.js, and Angular, while developing robust backend systems with Node.js, Java, and Spring Boot. Leveraged AWS, serverless architecture, and real-time data streaming with Apache Kafka, alongside Kubernetes and Docker for efficient deployment.',
    icon: React.createElement(CgWorkAlt),
    date: 'February 2022 - March 2024',
  },
  {
    title: 'Software Engineer',
    location: 'Albertsons',
    description:
      'Worked on both frontend and backend using PHP (Laravel), TypeScript (Vue, React, Node.js), and integrated payment gateways like PayPal and Stripe. Also implemented SSR for SEO optimization, used Jest/Mocha for testing, and built a Python/Django backend with AI algorithms, integrating Elasticsearch for efficient search functionality.',
    icon: React.createElement(CgWorkAlt),
    date: 'January 2018 - January 2022',
  },
  {
    title: 'Full Stack Developer',
    location: 'Uber',
    description:
      'Developed dynamic front-end applications with Vue, React, Tailwind CSS, and JavaScript for responsive UI, and built LAMP stack web apps using Laravel and Symfony. Also utilized jQuery for DOM manipulation and AJAX, while enhancing code quality through unit and integration testing with Jest and PHPUnit.',
    icon: React.createElement(CgWorkAlt),
    date: 'September 2016 - December 2017',
  },
] as const;

export const projectsData = [
  {
    title: 'CryptoCrowd',
    description:
      'Cryptocurrency sentiment analysis website based on Twitter posts. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on what people are currently posting on Twitter. Users can also see keywords and an average sentiment score. Stateless application that uses Elasticache and S3 on AWS. It also used EC2 and auto-scaling to manage demand.',
    tags: ['JavaScript', 'React', 'Express.js', 'AWS'],
    icons: [
      'logos:aws',
      'logos:javascript',
      'logos:react',
      'logos:bootstrap',
      'logos:express',
    ],
    imageUrl: cryptoCrowdImg,
    githubLink: 'https://github.com/ben04rogers/cab432-assignment-2',
    demoLink: 'https://www.youtube.com/watch?v=uhyC0M4WIl4',
  },
  {
    title: 'OzDevs',
    description:
      'Reverse Job board for companies looking to hire developers in Australia. Filter by experience, location and keyboards.  Companies can pay a monthly fee to be able to message developers on the site and view their information.',
    tags: ['PHP', 'Laravel', 'JavaScript', 'Tailwind', 'MySQL'],
    icons: [
      'logos:laravel',
      'logos:php',
      'logos:javascript',
      'devicon:tailwindcss',
      'logos:mysql',
    ],
    imageUrl: ozdevsImg,
    urlLink: 'https://clownfish-app-48u2r.ondigitalocean.app/',
    githubLink: 'https://github.com/ben04rogers/ozdevs-v2',
  },
  {
    title: 'Company Asset Trading',
    description:
      'Client-server system written in Java for trading of virtual assets within departments of a company. Facilitated trades via a marketplace model where users can buy and sell assets. Admins of an organisation can create assets, users and modify details. Uses MariaDB as a database and Swing for the GUI.',
    tags: ['Java', 'MariaDB', 'Swing'],
    icons: ['logos:java', 'logos:mariadb-icon'],
    imageUrl: assetTradingImg,
    githubLink: 'https://github.com/ben04rogers/organisation-asset-trading',
  },
  // {
  //   title: "Euphorus",
  //   description:
  //     "React application for viewing country happiness data collected from the World Happiness Report initiative. Users can filter by year, country and search limit. AG Grid and Chart.js were used to present the data.",
  //   tags: ["JavaScript", "React", "Bootstrap"],
  //   icons: ["logos:javascript", "logos:react", "logos:bootstrap"],
  //   imageUrl: euphorusImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment1",
  // },
  // {
  //   title: "Country Happiness API",
  //   description:
  //     "Developed and deployed an Express API to support the front-end of the Euphorus Happiness Data web application. Routes support query parameters and authorization using JWT. Includes endpoints for countries, rankings, factors, registration, login, and profile. Tested software extensively with Jest and created Swagger documentation for the API as well.      ",
  //   tags: ["JavaScript", "Node.js", "Express.js", "Swagger", "MySQL"],
  //   icons: ["logos:javascript", "logos:express", "logos:swagger", "cib:mysql"],
  //   imageUrl: euphorusBackendImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment2",
  // },
  {
    title: 'Techprowl Computer Auction',
    description:
      'Computer auction application built with Flask. The site allows users to register, bid on items, leave reviews, post new listings, manage listings, search by keyword, and keep a watch list. ',
    tags: ['Python', 'Flask', 'Bootstrap', 'SQLite'],
    icons: ['logos:python', 'logos:bootstrap', 'logos:sqlite'],
    imageUrl: techprowlImg,
    githubLink: 'https://github.com/ben04rogers/computer-auction',
    urlLink: 'https://techprowl.herokuapp.com',
  },
  {
    title: 'Task Manager Console App',
    description:
      "Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.",
    tags: ['C#'],
    icons: ['devicon:csharp'],
    imageUrl: taskManagerImg,
    githubLink: 'https://github.com/ben04rogers/task-manager',
  },
  {
    title: 'Family Tree Shortest Path',
    description:
      'Python program that implements a breadth-first search algorithm to generate a minimal spanning tree. Problem was to calculate a shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree',
    tags: ['Python'],
    icons: ['logos:python'],
    imageUrl: familyTreeImg,
    githubLink: 'https://github.com/ben04rogers/breadth-first-search',
    demoLink: 'https://www.youtube.com/watch?v=VXCZKsqupxA',
  },
  {
    title: 'Arduino Binary Game',
    description:
      'Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.',
    tags: ['C'],
    icons: ['devicon:c'],
    imageUrl: binaryGameImg,
    githubLink: 'https://github.com/ben04rogers/binary-game-microcontroller',
    demoLink: 'https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be',
  },
] as const;

export const skillsData = [
  {
    name: 'JavaScript',
    icon: 'logos:javascript',
  },
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
  },
  {
    name: 'React',
    icon: 'logos:react',
  },
  {
    name: 'Node.js',
    icon: 'logos:nodejs-icon',
  },
  {
    name: 'PHP',
    icon: 'logos:php',
  },
  {
    name: 'Laravel',
    icon: 'logos:laravel',
  },
  {
    name: 'Symfony',
    icon: 'logos:symfony',
  },
  {
    name: 'Python',
    icon: 'logos:python',
  },
  {
    name: 'Java',
    icon: 'logos:java',
  },
  {
    name: 'HTML',
    icon: 'vscode-icons:file-type-html',
  },
  {
    name: 'CSS',
    icon: 'vscode-icons:file-type-css',
  },
  {
    name: 'SCSS',
    icon: 'logos:sass',
  },
  {
    name: 'Git',
    icon: 'logos:git-icon',
  },
  {
    name: 'MySQL',
    icon: 'logos:mysql',
  },
  {
    name: 'Linux',
    icon: 'flat-color-icons:linux',
  },
  {
    name: 'AWS',
    icon: 'logos:aws',
  },
  {
    name: 'Docker',
    icon: 'logos:docker-icon',
  },
  {
    name: 'Jenkins',
    icon: 'devicon:jenkins',
  },
  {
    name: 'Shopify',
    icon: 'logos:shopify',
  },
] as const;
