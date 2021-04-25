import { Contributor } from "./types";

const CONTRIBUTORS: Contributor[] = [
  {
    link: "mailto:lopezrosemariev@gmail.com",
    name: "Rosemarie Lopez",
  },
  {
    link: "mailto:angelo.maala22@gmail.com",
    name: "Angelo Maala",
  },
  { link: "mailto:redneyjohn@gmail.com", name: "Redney Evangelista" },
].sort((a, b) => a.name.localeCompare(b.name));

export default CONTRIBUTORS;
