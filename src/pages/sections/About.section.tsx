// Assets
import "@/assets/styles/pages/sections/about.section.scss";
import separator from "@/assets/images/separator_black.png";
import designIcon from "@/assets/images/about_service_design.png";
import devIcon from "@/assets/images/about_service_dev.png";
import supportIcon from "@/assets/images/about_service_support.png";

// Components
import LoadFileButton from "@/components/shared/LoadFileButton.component";

const AboutSection = () => {
  return (
    <section className="about-section flex flex-col flex-wrap items-center">
      <div className="about-section__personal-info w-full flex flex-col flex-wrap items-center">
        <h2 className="subtitle mb-10 md:mb-16" id="aboutMe">
          About me
        </h2>
        <p className="mb-6 text-justify open-sans">
          My name is Tomasz Gajda, I'm a third year Applied Computer Science
          student at the AGH University of Science and Technology in Krakow. I
          have been learning Front-End technologies for a year and this time was
          just enough for me to make sure that this is my place in the industry.
        </p>
        <p className="mb-8 text-justify open-sans md:mb-16">
          Membership in the science club developed my design skills, which
          quickly turned into a new hobby. I am fluent in English (spoken and
          written) and intermediate Spanish. Apart from designing and
          programming websites, my passion is all kinds of motorsport - from
          rallies to the very king of motorsport - formula 1.
        </p>
        <LoadFileButton classes={"mb-14 md:mb-20"}>Resume</LoadFileButton>
        <img src={separator} alt="separator black" className="mb-14 md:mb-20" />
      </div>

      <div className="about-section__services w-full mt-5 md:flex md:flex-wrap md:justify-center">
        <div className="about-section__service md:w-1/2 md:pr-10">
          <h3 className="about-section__service-title">
            <img
              src={designIcon}
              alt=""
              className="about-section__service-icon"
            />
            Design
          </h3>
          <p className="text-justify open-sans">
            I can design the website based on your needs and suggestions. I can
            also create it from scratch by consulting with you during work.
          </p>
        </div>
        <div className="about-section__service md:w-1/2 md:pl-10">
          <h3 className="about-section__service-title">
            <img src={devIcon} alt="" className="about-section__service-icon" />
            Development
          </h3>
          <p className="text-justify open-sans">
            Based on a project created by me or another one, sent by you, I can
            program the website to be fully functional and responsive.
          </p>
        </div>
        <div className="about-section__service md:w-1/2 md:mt-10">
          <h3 className="about-section__service-title">
            <img
              src={supportIcon}
              alt=""
              className="about-section__service-icon"
            />
            Maintenance
          </h3>
          <p className="text-justify open-sans">
            In case of any problems or the need for changes, I can introduce new
            functionalities and solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
