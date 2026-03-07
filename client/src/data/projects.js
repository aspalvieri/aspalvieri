import forgottenSpaceImage from "../assets/projects/forgotten_space/2.webp";
import equationGameImage from "../assets/projects/equation_game/1.webp";
import cityDefenseImage from "../assets/projects/city_defense/1.webp";

export const projects = [
  {
    slug: "forgotten_space",
    title: "Ruins of Forgotten Space",
    headline: "A top-down sci-fi dungeon crawler focused on procedural exploration.",
    summary:
      "Explore hostile planets through procedurally generated maps, collect resources, and upgrade your loadout between runs. Enemy encounters scale with progress, pushing players to balance risk, combat, and long-term character growth.",
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
    headline: "A configurable browser math game with scoring and operation controls.",
    summary:
      "Players choose number ranges and enabled operations, then solve generated equations under a live score system. The game tracks each round and rewards accuracy, turning arithmetic practice into a fast, replayable challenge.",
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
    headline: "A city builder and tower defense hybrid set in a hostile world.",
    summary:
      "Start with limited resources on a randomized map, build production lines and defenses, and unlock technologies as attacks intensify. The design combines long-term city planning with real-time survival pressure.",
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
