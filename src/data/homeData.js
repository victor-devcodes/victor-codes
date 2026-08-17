import project1 from "../assets/images/property-1.jpg";
import project2 from "../assets/images/property-2.jpg";
import project3 from "../assets/images/property-3.jpg";
import {
  FiCode,
  FiLayers,
  FiSmartphone,
  FiDatabase,
} from "react-icons/fi";

export const projects = [
  {
    number: "01",
    title: "Nova Commerce",
    type: "E-commerce platform",
    description:
      "A modern commerce experience designed around clear product discovery, smooth interactions and a conversion-focused interface.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: project1,
  },
  {
    number: "02",
    title: "TaskFlow",
    type: "Productivity web app",
    description:
      "A focused productivity platform built to help teams organize work, manage tasks and keep projects moving.",
    tech: ["React", "TypeScript", "Firebase"],
    image: project2,
  },
  {
    number: "03",
    title: "Finora",
    type: "Analytics dashboard",
    description:
      "A data-driven dashboard that transforms complex information into a clean, readable and actionable experience.",
    tech: ["Next.js", "API", "Charts"],
    image: project3,
  },
];

export const services = [
  {
    title: "Web Development",
    text: "Fast, responsive websites and web applications built around your business goals.",
    icon: FiCode,
  },
  {
    title: "Frontend Development",
    text: "Polished interfaces using React, reusable components and thoughtful interactions.",
    icon: FiLayers,
  },
  {
    title: "Full-Stack Development",
    text: "Complete digital products with APIs, authentication, databases and deployment.",
    icon: FiDatabase,
  },
  {
    title: "Responsive Design",
    text: "Interfaces that remain beautiful, intuitive and functional across every screen size.",
    icon: FiSmartphone,
  },
];

export const process = [
  {
    number: "01",
    title: "Discover",
    text: "We define the goals, audience, requirements and direction before writing the first line of code.",
  },
  {
    number: "02",
    title: "Plan",
    text: "I turn the requirements into a clear structure, user flow and technical approach.",
  },
  {
    number: "03",
    title: "Build",
    text: "The product comes together through clean code, responsive layouts and purposeful interactions.",
  },
  {
    number: "04",
    title: "Launch",
    text: "After testing and refinement, your project is prepared for deployment and the real world.",
  },
];

export const technologies = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Firebase",
  "Git",
];
