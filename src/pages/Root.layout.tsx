// Assets
import "@/assets/styles/pages/root.layout.scss";

// Components
import Navbar from "@/components/shared/Navbar.component";

// Sections
import HeroSection from "./sections/Hero.section";
import AboutSection from "./sections/About.section";
import Portfolio from "./sections/Portfolio.section";

const Root = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <Portfolio />
      </main>
    </div>
  );
};

export default Root;
