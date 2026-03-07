import propertyManagerImage from "../assets/projects/property_manager/2.webp";
import forgottenSpaceImage from "../assets/projects/forgotten_space/2.webp";
import equationGameImage from "../assets/projects/equation_game/1.webp";
import cityDefenseImage from "../assets/projects/city_defense/1.webp";

export const projects = [
  {
    slug: "property_manager",
    title: "Property Manager",
    headline: "Full-stack rental management platform for landlords and property managers.",
    summary:
      "Property managing application for property managers and landlords. The manager can create, update, view, and delete properties. Within each property, the manager can create, update, view, and delete units. This tool helps track which units belong to which properties.",
    tech: ["Node", "Express", "MongoDB", "React", "Redux"],
    category: "Web App",
    githubUrl: "https://github.com/aspalvieri/PropertyManager",
    image: propertyManagerImage,
    slideFolder: "projects/property_manager",
    slideCount: 3
  },
  {
    slug: "forgotten_space",
    title: "Ruins of Forgotten Space",
    headline: "A top-down sci-fi dungeon crawler with procedural exploration.",
    summary:
      "Top-down dungeon crawler set in the future. Travel to different planets and explore randomly generated maps. Gather resources to upgrade armor and weapons. Defeat enemies to level up your character and unlock stronger spells as you progress.",
    tech: ["C++", "SDL2"],
    category: "Game Dev",
    githubUrl: "https://github.com/aspalvieri/ForgottenSpace",
    image: forgottenSpaceImage,
    slideFolder: "projects/forgotten_space",
    slideCount: 4
  },
  {
    slug: "equation_game",
    title: "Random Equation Game",
    headline: "A configurable math game with score tracking and operation controls.",
    summary:
      "JavaScript number game where you choose a number range and allowed operations (addition, subtraction, multiplication, division). The game randomizes two numbers and an operation. Correct answers increase score while incorrect answers reduce score, and rounds are logged.",
    tech: ["JavaScript"],
    category: "Web Game",
    githubUrl: "https://github.com/aspalvieri/RandomEquationGame",
    image: equationGameImage,
    slideFolder: "projects/equation_game",
    slideCount: 3
  },
  {
    slug: "city_defense",
    title: "City Defense",
    headline: "City simulation meets tower defense in a hostile world.",
    summary:
      "City management simulator mixed with tower defense. Start with limited resources on a randomly generated map, build production and defense systems, and research new technologies as stronger enemies attack your city over time.",
    tech: ["C++", "SDL2"],
    category: "Game Dev",
    githubUrl: "https://github.com/aspalvieri/CityDefense",
    image: cityDefenseImage,
    slideFolder: "projects/city_defense",
    slideCount: 3
  }
];

export const projectBySlug = new Map(projects.map((project) => [project.slug, project]));

export const projectCategories = ["All", ...new Set(projects.map((project) => project.category))];
