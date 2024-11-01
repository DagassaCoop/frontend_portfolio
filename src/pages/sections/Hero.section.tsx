// Assets
import "@/assets/styles/pages/sections/hero.section.scss";
import bg from "@/assets/images/hero_bg.jpeg";
import separator from "@/assets/images/separator_white.png";

// Icons
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";

const MAIL = "dagassacoop@gmail.com";
const GIT_URL = "https://github.com/DagassaCoop";
const LINKEDIN_URL = "https://www.linkedin.com/in/dmytro-bondar/";

const HeroSection = () => {
  return (
    <section className="hero-section relative flex justify-center items-center text-white">
      <img
        src={bg}
        alt="hero bg"
        className="hero-section__bg absolute top-0 left-0 w-full h-full object-cover "
      />
      <div className="relative">
        <h3 className="text-center text-lg mb-2">my name is Dmytro</h3>
        <h1 className="font-semibold text-3xl uppercase tracking-wider mb-6">
          I`m a developer
        </h1>
        <img src={separator} alt="separator" className="m-auto mb-8" />
        <div className="flex justify-around items-center">
          <a href={"mailto: " + MAIL}>
            <AlternateEmailIcon fontSize="large" />
          </a>

          <a href={GIT_URL} target="_blank">
            <GitHub fontSize="large" />
          </a>
          <a href={LINKEDIN_URL} target="_blank">
            <LinkedIn fontSize="large" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
