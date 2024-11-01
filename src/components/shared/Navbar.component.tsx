import { useState, useRef, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Assets
import "@/assets/styles/components/shared/navbar.scss";
import logo from "@/assets/images/logo.svg";

// Hooks
import { useScrollContext } from "@/hooks/useScrollContext";

const NAVBAR_HEIGHT = 58;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const context = useScrollContext();

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

  return (
    <>
      {/* Mobile */}
      {context && context.scroll.top > NAVBAR_HEIGHT ? (
        <div className="navbar__divider" />
      ) : null}
      <div
        className={[
          "navbar w-full sm:hidden flex items-center px-8 bg-inherit",
          open ? "justify-between" : "justify-end",
          context && context.scroll.top > NAVBAR_HEIGHT
            ? "fixed top-0 left-0"
            : "",
        ].join(" ")}
      >
        {open ? (
          <>
            <img
              className="navbar__logo cursor-pointer"
              src={logo}
              alt="logo"
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
          className="navbar__drawer sm:hidden"
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
                  <span className="cursor-pointer text-sm font-semibold">
                    {link.title}
                  </span>
                </div>
              );
            })}
          </div>
        </Drawer>
      </div>
      {/* Desktop */}
      <div></div>
    </>
  );
};

export default Navbar;
