export interface IPortfolioItem {
  id: string;
  title: string;
  description: string;
  demoLink: string;
  gitLink: string;
  img: string;
  imgLightness: "black" | "white";
  technologies: string[];
}
