import waymark from "../assets/projectimages/waymark.png";
import nexa from "../assets/projectimages/NexaEstate.png";


export const featuredProject = {
  title: "WayMark",
  subtitle: "Travel Community Platform",

  image: waymark,

  description:
    "A full-stack travel community platform where users share travel memories, upload images, pin locations on an interactive map, discover travelers, like and comment on posts, manage bucket lists, and receive real-time notifications.",

  technologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Cloudinary",
    "Leaflet",
    "Tailwind",
  ],

  features: [
    "JWT Authentication",
    "Interactive Maps",
    "Image Uploads",
    "Likes & Comments",
    "Follow System",
    "Notifications",
    "Bucket List",
    "Swagger API",
  ],

  live: "https://way-mark-xi.vercel.app",

  github: "YOUR_GITHUB",
};

export const projects = [
  {
    title: "Nexa Estate",
    image: nexa,
    description:
      "Real estate platform with authentication, listings, advanced search, filters, and Cloudinary image uploads.",

    live: "https://nexa-real-estate.vercel.app",

    github: "YOUR_GITHUB",

    technologies: [
      "React",
      "Redux",
      "Node",
      "MongoDB",
    ],
  },
];