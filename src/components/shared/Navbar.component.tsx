import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Assets
import "@/assets/styles/components/shared/navbar.scss";
import logo from "@/assets/images/logo.svg"

const LINKS = ["About me", "Skills", "Portfolio", "Contact me"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="navbar w-full">
      <div className={["navbar__header sm:hidden w-screen flex items-center px-8 bg-inherit", open ? "justify-between" : "justify-end"].join(" ")}>
        
        {open ? (<><img className="navbar__logo" src={logo} alt="logo" /><CloseIcon onClick={handleDrawerClose} fontSize="large" /></>) : <MenuIcon onClick={handleDrawerOpen} fontSize="large" />}
      </div>
      <Drawer
        className="navbar__drawer sm:hidden"
        anchor="top"
        open={open}
        onClose={handleDrawerClose}
        PaperProps={{sx: {background: "transparent"}}}
      >
        <div className="flex flex-col">
          <div className="navbar__link" />
          {LINKS.map((link) => {
            return (
              <div
                className="navbar__link w-full flex justify-center items-center"
                key={link}
              >
                <span className="cursor-pointer text-sm font-semibold">
                  {link}
                </span>
              </div>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
