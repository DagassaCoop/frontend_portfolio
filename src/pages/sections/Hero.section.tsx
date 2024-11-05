// Assets
import "@/assets/styles/pages/sections/hero.section.scss";
import bg from "@/assets/images/hero_bg.jpeg";
import separator from "@/assets/images/separator_white.png";
import person from "@/assets/images/person_no_bg.png";

// Icons
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";

// Components
import Navbar from "@/components/shared/Navbar.component";

const MAIL = "dagassacoop@gmail.com";
const GIT_URL = "https://github.com/DagassaCoop";
const LINKEDIN_URL = "https://www.linkedin.com/in/dmytro-bondar/";

const HeroSection = () => {
  return (
    <section className="hero-section relative flex justify-center items-center md:justify-between">
      <Navbar />
      <img
        src={bg}
        alt="hero bg"
        className="hero-section__bg absolute top-0 left-0 w-full h-full object-cover md:hidden"
      />
      <div className="hero-section__text relative text-white md:hidden">
        <h3 className="text-center text-xl tracking-wider mb-2 advent-pro">
          my name is Dmytro
        </h3>
        <h1 className="font-semibold text-3xl uppercase tracking-wider mb-6 text-center">
          I`m a frontend developer
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
      <div className="hidden md:block w-1/3 flex flex-col items-start">
        <h3 className="text-2xl tracking-wider mb-8 font-semibold">Hi, I am</h3>
        <h1 className="font-semibold text-4xl tracking-wide mb-1">
          Dmytro Bondar
        </h1>
        <h4 className="hero-section__subtitle mb-12 font-bold">
          Front-end Developer
        </h4>
        <div className="flex justify-start items-center">
          <a href={"mailto: " + MAIL} className="hero-section__icon mr-8">
            <AlternateEmailIcon fontSize="large" />
          </a>

          <a href={GIT_URL} target="_blank" className="mr-8 hero-section__icon">
            <GitHub fontSize="large" />
          </a>
          <a href={LINKEDIN_URL} target="_blank" className="hero-section__icon">
            <LinkedIn fontSize="large" />
          </a>
        </div>
      </div>
      <div className="hero-section__person relative hidden md:block z-10">
        <img src={person} alt="my photo" />
      </div>
      <div className="hero-section__bg-black hidden md:block absolute top-0 w-2/3 h-full bg-black" />
    </section>
  );
};

export default HeroSection;
