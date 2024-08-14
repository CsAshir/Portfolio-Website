import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  c,
  cSharp,
  reactjs,
  tailwind,
  meta,
  jobit,
  tripguide,
  threejs,
  shopify,
  weather,
  portfolio
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
    title: "Game Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
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
    name: "C",
    icon: c, // Use the correct 'c' icon
  },
  {
    name: "C#",
    icon: cSharp, // Use the correct 'c' icon
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Unity C# Developer",
    company_name: "2D Plaformer Game",
    icon: meta,
    iconBg: "#383E56",
    date: "June 2024 - June 2024",
    points: [
      "Classic Side-Scrolling Action, navigate through vibrant, hand-crafted levels filled with obstacles and enemies.",
      "Collect unique crystals and unlock new level and explore new areas.",
      "Follow a captivating narrative with charming characters and unexpected twists that drive the gameplay forward..",
      "Enjoy nostalgic pixel art and an upbeat chiptune soundtrack that pay homage to classic platformer games.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Weather App",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2022",
    points: [
      "Real-Time Weather Data: Fetch and display up-to-date weather information for any location using reliable weather APIs.",
      "Interactive UI: Intuitive and responsive design with features like search and location-based updates.",
      "Comprehensive Weather Insights: Offer users detailed current conditions, multi-day forecasts, and trends over time for a thorough understanding of the weather.",
      "Showing temperature in Celsius/Fahrenheit units.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "React Portfolio",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2022 - Feb 2022",
    points: [
      "Developed the portfolio using React, leveraging the flexibility and efficiency of this popular JavaScript library.",
      "Utilized Tailwind CSS for styling, ensuring a responsive and visually appealing design.",
      "Integrated Three.js to add dynamic 3D graphics and animations for an engaging user experience.",
      "Implemented EmailJS and its API to enable direct email communication, allowing users to contact me seamlessly through the portfolio.",
    ],
  },
];

const projects = [
  {
    name: "Weather App",
    description:
      "This Weather App allows users to get real-time weather information by entering the name of a city. The app fetches weather data using an API and displays details such as the location, current temperature, weather conditions, and wind speed. The user interface features intuitive icons for a visually appealing and user-friendly experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-feather",
        color: "green-text-gradient",
      },
    ],

    image: weather,
    source_code_link: "https://github.com/CsAshir",
  },
  {
    name: "2D Platformer Game",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/CsAshir",
  },
  {
    name: "React Portfolio",
    description:
      "Developed a modern portfolio using React.js, incorporating the powerful Three.js library for 3D graphics. This portfolio showcases my projects, skills, and experience through an interactive and visually engaging interface, highlighting my proficiency in front-end development and 3D web design. The seamless integration of Three.js allows for dynamic animations and 3D models, providing a unique and immersive user experience.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/CsAshir",
  },
];

export { services, technologies, experiences, projects };
