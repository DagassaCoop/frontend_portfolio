import { FC } from "react";

// Interfaces
import { IPortfolioItem } from "@/app/interfaces/portfolio";

// Components
import Button from "@/components/shared/Button.component";

// Assets
import "@/assets/styles/components/features/portfolio/portfolioItem.scss";

interface IPortfolioProps {
  item: IPortfolioItem;
}

const PortfolioItem: FC<IPortfolioProps> = ({ item }) => {
  return (
    <div
      className={[
        "portfolio-item relative flex justify-center items-center w-full",
        item.imgLightness === "white" ? "portfolio-item_black" : "",
      ].join(" ")}
    >
      <img
        src={item.img}
        alt="portfolio item bg"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="portfolio-item__blur absolute top-0 left-0 w-full h-full invisible opacity-0" />
      {/* invisible hover:visible */}
      <div className="portfolio-item__content relative flex justify-center flex-wrap">
        <h3 className="text-3xl lowercase mb-6 invisible opacity-0">
          {item.title}
        </h3>
        <p className="w-full mb-6 text-center text-md invisible opacity-0">
          {item.description}
        </p>
        <div className="w-full flex justify-center">
          <a href={item.demoLink} target="_blank">
            <Button
              variant={item.imgLightness === "black" ? "white" : "black"}
              classes="mr-4 invisible opacity-0"
            >
              Demo
            </Button>
          </a>
          <a href={item.gitLink} target="_blank">
            <Button
              variant={item.imgLightness === "black" ? "white" : "black"}
              classes="ml-4 invisible opacity-0"
            >
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
