import { useState, useRef, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Assets
import "@/assets/styles/components/shared/navbar.scss";
import logoWhite from "@/assets/images/logo_white.svg";
import logoBlack from "@/assets/images/logo_black.svg";

const NAVBAR_HEIGHT = 58;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const skillsSectionRef = useRef<HTMLElement | null>(null);
  const portfolioSectionRef = useRef<HTMLElement | null>(null);
  const contactSectionRef = useRef<HTMLElement | null>(null);

  const LINKS: {
    ref: React.MutableRefObject<HTMLElement | null>;
    title: string;
  }[] = [
    { ref: aboutSectionRef, title: "About me" },
    {
      ref: skillsSectionRef,
      title: "Skills",
    },
    {
      ref: portfolioSectionRef,
      title: "Portfolio",
    },
    {
      ref: contactSectionRef,
      title: "Contact me",
    },
  ];

  useEffect(() => {
    aboutSectionRef.current = document.querySelector(".about-section");
    skillsSectionRef.current = document.querySelector(".skills-section");
    portfolioSectionRef.current = document.querySelector(".portfolio-section");
    contactSectionRef.current = document.querySelector(".contact-section");
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const scrollIntoRef = (ref: React.MutableRefObject<HTMLElement | null>) => {
    const topPosition = ref.current?.offsetTop;
    if (!topPosition) return;

    document
      .querySelector(".root-layout")
      ?.scrollTo({ top: topPosition - NAVBAR_HEIGHT, behavior: "smooth" });
    setOpen(false);
  };

  const scrollToTop = () => {
    document
      .querySelector(".root-layout")
      ?.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* Mobile */}
      <div
        className={[
          "navbar w-full md:hidden flex items-center px-8 bg-inherit fixed top-0 left-0",
          open ? "justify-between" : "justify-end",
        ].join(" ")}
      >
        {open ? (
          <>
            <img
              className="navbar__logo cursor-pointer"
              src={logoWhite}
              alt="logo"
              onClick={scrollToTop}
            />
            <CloseIcon
              onClick={handleDrawerClose}
              fontSize="large"
              className="cursor-pointer"
            />
          </>
        ) : (
          <MenuIcon
            onClick={handleDrawerOpen}
            fontSize="large"
            className="cursor-pointer"
          />
        )}

        <Drawer
          className="navbar__drawer md:hidden"
          anchor="top"
          open={open}
          onClose={handleDrawerClose}
          PaperProps={{ sx: { background: "transparent" } }}
        >
          <div className="flex flex-col">
            <div className="navbar__link" />
            {LINKS.map((link) => {
              return (
                <div
                  className={[
                    "navbar__link w-full flex justify-center items-center",
                  ].join(" ")}
                  key={link.title}
                  onClick={() => scrollIntoRef(link.ref)}
                >
                  <span className="cursor-pointer text-md font-semibold">
                    {link.title}
                  </span>
                </div>
              );
            })}
          </div>
        </Drawer>
      </div>
      {/* Desktop */}
      <div className="navbar hidden md:flex justify-between items-center absolute top-16 left-0 w-full">
        <img
          className="navbar__logo cursor-pointer black"
          src={logoBlack}
          alt="logo"
          onClick={scrollToTop}
        />
        <div className="flex">
          {LINKS.map((link) => {
            return (
              <div
                className={[
                  "navbar__link w-full flex justify-center items-center px-6",
                ].join(" ")}
                key={link.title}
                onClick={() => scrollIntoRef(link.ref)}
              >
                <span className="cursor-pointer text-md font-semibold whitespace-nowrap">
                  {link.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
