import React, { useEffect, useState } from "react";
import LaptopHeader from "./components/LaptopHeader";
import MobileHeader from "./components/MobileHeader";
import "./Header.css";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [openFeatures, setFeatures] = useState(false);
  const [openCompany, setCompany] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      console.log("here");
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="nav-main-container">
      {/* main navigation */}
      <h2 className="logo">snap</h2>
      {windowWidth < 768 ? (
        <MobileHeader
          open={open}
          setOpen={setOpen}
          setFeatures={setFeatures}
          openFeatures={openFeatures}
          setCompany={setCompany}
          openCompany={openCompany}
        />
      ) : (
        <LaptopHeader
          setFeatures={setFeatures}
          openFeatures={openFeatures}
          setCompany={setCompany}
          openCompany={openCompany}
        />
      )}
    </div>
  );
};

export default Header;
