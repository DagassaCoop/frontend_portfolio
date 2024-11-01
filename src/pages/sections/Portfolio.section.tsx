import Grid from "@mui/material/Grid2";

// Assets
import "@/assets/styles/pages/sections/portfolio.section.scss";
import bg from "@/assets/images/portfolio_bg.png";
import portfolioItemSashaProduction from "@/assets/images/portfolio_item_sasha-production.png";

// Components
import PortfolioItem from "@/components/features/portfolio/PortfolioItem.component";
import { IPortfolioItem } from "@/app/interfaces/portfolio";

const PORTFOLIO: IPortfolioItem[] = [
  {
    id: "1",
    title: "Videographer portfolio",
    description: "Website on React for show video production works",
    img: portfolioItemSashaProduction,
    imgLightness: "black",
    demoLink: "http://sashaproduction.ca/",
    gitLink: "https://github.com/DagassaCoop/sasha_production",
    technologies: [],
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="flex justify-center relative">
        <img
          src={bg}
          alt="portfolio bg"
          className="portfolio-section__bg absolute top-0 left-0 w-full h-full object-cover object-top"
        />
        <div className="portfolio-section__blur absolute top-0 left-0 w-full h-full" />
        <h2 className="subtitle relative">Portfolio</h2>
      </div>
      <div>
        <Grid container spacing={4}>
          {PORTFOLIO.map((item) => {
            return (
              <Grid size={12} key={item.id}>
                <PortfolioItem item={item} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </section>
  );
};

export default Portfolio;
