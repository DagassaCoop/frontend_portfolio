// Components
import Navbar from "@/components/shared/Navbar.component";

// Sections
import HeroSection from "./sections/Hero.section";
import AboutSection from "./sections/About.section";

// Assets
import "@/assets/styles/pages/root.layout.scss";

const Root = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  );
};

export default Root;
