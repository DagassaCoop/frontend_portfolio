// Assets
import "@/assets/styles/pages/root.layout.scss";

// Components
import Navbar from "@/components/shared/Navbar.component";

// Sections
import HeroSection from "./sections/Hero.section";
import AboutSection from "./sections/About.section";
import PortfolioSection from "./sections/Portfolio.section";
import ContactSection from "./sections/Contact.section";

const Root = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Root;
