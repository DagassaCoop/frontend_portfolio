// Assets
import "@/assets/styles/pages/root.layout.scss";

// Components
// import Navbar from "@/components/shared/Navbar.component";
import Footer from "@/components/shared/Footer.component";

// Sections
import HeroSection from "./sections/Hero.section";
import AboutSection from "./sections/About.section";
import SkillsSection from "./sections/Skills.section";
import PortfolioSection from "./sections/Portfolio.section";
import ContactSection from "./sections/Contact.section";

// Hooks
import { useScrollContext } from "@/hooks/useScrollContext";

const Root = () => {
  const context = useScrollContext();

  const updateScrollContext = (e: React.UIEvent<HTMLElement>) => {
    context?.setScroll({
      top: e.currentTarget.scrollTop,
      left: e.currentTarget.scrollLeft,
    });
    // console.log("context >> ", context?.scroll)
  };

  return (
    <div className="root-layout montserrat" onScroll={updateScrollContext}>
      {/* <Navbar /> */}
      <main>
        {/* <Navbar /> */}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
