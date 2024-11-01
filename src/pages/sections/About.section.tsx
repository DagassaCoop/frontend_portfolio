// Assets
import "@/assets/styles/pages/sections/about.section.scss";
import separator from "@/assets/images/separator_black.png";
import designIcon from "@/assets/images/about_service_design.png";
import devIcon from "@/assets/images/about_service_dev.png";
import supportIcon from "@/assets/images/about_service_support.png";

// Assets > Languages
import html from "@/assets/images/skills/html.svg";
import css from "@/assets/images/skills/css.svg";
import javascript from "@/assets/images/skills/javascript.svg";
import typescript from "@/assets/images/skills/typescript.svg";
import docker from "@/assets/images/skills/docker.webp";
import nodejs from "@/assets/images/skills/node.js.svg";

// Assets > Frameworks
import react from "@/assets/images/skills/react.svg";
import nextjs from "@/assets/images/skills/next.js.svg";
import vue from "@/assets/images/skills/vue.png";

// Assets > Technologies
import git from "@/assets/images/skills/git.png";
import graphql from "@/assets/images/skills/graphql.png";
import sass from "@/assets/images/skills/sass.svg";
import mui from "@/assets/images/skills/mui.png";
import tailwind from "@/assets/images/skills/tailwindcss.png";

// Assets > Databases
import mongodb from "@/assets/images/skills/mongodb.svg";
import firebase from "@/assets/images/skills/firebase.svg";

// Components
import Button from "@/components/shared/Button.component";

interface ISkill {
  title: string;
  imgSrc: string;
}

const LANGUAGES: ISkill[] = [
  {
    title: "Html",
    imgSrc: html,
  },
  {
    title: "Css",
    imgSrc: css,
  },
  {
    title: "JavaScript",
    imgSrc: javascript,
  },
  {
    title: "TypeScript",
    imgSrc: typescript,
  },
  {
    title: "Docker",
    imgSrc: docker,
  },
  {
    title: "Node.js",
    imgSrc: nodejs,
  },
];

const FRAMEWORKS: ISkill[] = [
  {
    title: "React",
    imgSrc: react,
  },
  {
    title: "Next.js",
    imgSrc: nextjs,
  },
  {
    title: "Vue",
    imgSrc: vue,
  },
];

const TECHNOLOGIES: ISkill[] = [
  {
    title: "Git",
    imgSrc: git,
  },
  {
    title: "GraphQL",
    imgSrc: graphql,
  },
  {
    title: "Sass",
    imgSrc: sass,
  },
  {
    title: "Material UI",
    imgSrc: mui,
  },
  {
    title: "Tailwind CSS",
    imgSrc: tailwind,
  },
];

const DATABASES: ISkill[] = [
  {
    title: "MongoDB",
    imgSrc: mongodb,
  },
  {
    title: "Firebase",
    imgSrc: firebase,
  },
];

const SKILLS: {
  title: string;
  skills: ISkill[];
}[] = [
  {
    title: "Languages",
    skills: LANGUAGES,
  },
  {
    title: "Frameworks",
    skills: FRAMEWORKS,
  },
  {
    title: "Technologies",
    skills: TECHNOLOGIES,
  },
  {
    title: "Databases",
    skills: DATABASES,
  },
];

const AboutSection = () => {
  return (
    <section className="about-section flex flex-col flex-wrap items-center">
      <div className="about-section__personal-info w-full flex flex-col flex-wrap items-center">
        <h2 className="subtitle mb-10">About me</h2>
        <p className="mb-6 text-justify">
          My name is Tomasz Gajda, I'm a third year Applied Computer Science
          student at the AGH University of Science and Technology in Krakow. I
          have been learning Front-End technologies for a year and this time was
          just enough for me to make sure that this is my place in the industry.
        </p>
        <p className="mb-8 text-justify">
          Membership in the science club developed my design skills, which
          quickly turned into a new hobby. I am fluent in English (spoken and
          written) and intermediate Spanish. Apart from designing and
          programming websites, my passion is all kinds of motorsport - from
          rallies to the very king of motorsport - formula 1.
        </p>
        <Button styles={{ marginBottom: "60px" }}>Explore</Button>
        <img
          src={separator}
          alt="separator black"
          style={{ marginBottom: "60px" }}
        />
      </div>

      <div className="about-section__services w-full mt-5">
        <div className="about-section__service">
          <h3 className="about-section__service-title">
            <img
              src={designIcon}
              alt=""
              className="about-section__service-icon"
            />
            Design
          </h3>
          <p className="text-justify">
            I can design the website based on your needs and suggestions. I can
            also create it from scratch by consulting with you during work.
          </p>
        </div>
        <div className="about-section__service">
          <h3 className="about-section__service-title">
            <img src={devIcon} alt="" className="about-section__service-icon" />
            Development
          </h3>
          <p className="text-justify">
            Based on a project created by me or another one, sent by you, I can
            program the website to be fully functional and responsive.
          </p>
        </div>
        <div className="about-section__service">
          <h3 className="about-section__service-title">
            <img
              src={supportIcon}
              alt=""
              className="about-section__service-icon"
            />
            Maintenance
          </h3>
          <p className="text-justify">
            In case of any problems or the need for changes, I can introduce new
            functionalities and solutions.
          </p>
        </div>
      </div>
      <div className="about-section__skills w-full flex flex-col flex-wrap items-center">
        <h2 className="subtitle mb-12">Skills</h2>
        {SKILLS.map((group) => {
          return (
            <div
              key={group.title}
              className="about-section__skills-group mb-12"
            >
              <h3 className="about-section__skills-subhead mb-12">
                {group.title}:
              </h3>
              <div className="overflow-scroll max-h-screen w-full">
                <div className="flex flex-col flex-wrap items-center ">
                  {group.skills.map((skill) => {
                    return (
                      <div
                        key={skill.imgSrc}
                        className="about-section__skill w-full flex flex-col flex-wrap items-center"
                      >
                        <img
                          src={skill.imgSrc}
                          alt={skill.title}
                          className="about-section__skill-icon mb-8"
                        />
                        <h4 className="about-section__skill-title text-center uppercase text-xl tracking-widest">
                          {skill.title}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;
