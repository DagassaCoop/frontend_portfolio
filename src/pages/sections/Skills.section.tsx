import Grid from "@mui/material/Grid2"

// Assets
import "@/assets/styles/pages/sections/skills.section.scss";

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
import bootstrap from "@/assets/images/bootstrap.png"
import storybook from "@/assets/images/storybook.svg"

// Assets > Databases
import mongodb from "@/assets/images/skills/mongodb.svg";
import firebase from "@/assets/images/skills/firebase.svg";

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
  {
    title: "Bootstrap",
    imgSrc: bootstrap
  },
  {
    title: "Storybook",
    imgSrc: storybook
  }
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

const SkillsSection = () => {
  return (
    <section className="skills-section w-full flex flex-col flex-wrap items-center">
      <h2 className="subtitle mb-12 md:mb-20" id="skills">
        Skills
      </h2>
      {SKILLS.map((group) => {
        return (
          <div key={group.title} className="skills-section__skills-group mb-12 md:w-full md:mb-20">
            <h3 className="skills-section__subhead mb-12 text-center md:text-start md:mb-16">{group.title}:</h3>
            <div className="overflow-y-auto max-h-screen w-full">
              <Grid container spacing={4}>
                {group.skills.map((skill) => {
                  return (
                    <Grid
                    size={{ xs: 12, md: 4, lg: 3 }}
                      key={skill.imgSrc}
                      className="skills-section__skill flex flex-col flex-wrap items-center"
                    >
                      <img
                        src={skill.imgSrc}
                        alt={skill.title}
                        className="skills-section__skill-icon mb-8"
                      />
                      <h4 className="skills-section__skill-title text-center uppercase text-xl tracking-widest">
                        {skill.title}
                      </h4>
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SkillsSection;
