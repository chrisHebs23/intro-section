import React from "react";
import menu from "../../components/images/icon-menu.svg";
import close from "../../components/images/icon-close-menu.svg";
import "../Header.css";
import FeaturesDrop from "./FeaturesDrop";

const MobileHeader = ({
  open,
  setOpen,
  openFeatures,
  setFeatures,
  openCompany,
  setCompany,
}) => {
  return (
    <>
      <img
        src={menu}
        alt="hamburger menu icon"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <>
          <div className="mobile-div">
            <div className="close-icon">
              <img
                src={close}
                alt="hamburger menu icon"
                onClick={() => setOpen(!open)}
              />
            </div>

            <nav className="mobile-nav">
              <li
                className="drop-down"
                onClick={() => setFeatures(!openFeatures)}
              >
                Features &nbsp;
                {openFeatures ? (
                  <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                    <path
                      stroke="#686868"
                      stroke-width="1.5"
                      fill="none"
                      d="m1 5 4-4 4 4"
                    />
                  </svg>
                ) : (
                  <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                    <path
                      stroke="#686868"
                      stroke-width="1.5"
                      fill="none"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                )}
              </li>
              {openFeatures && <FeaturesDrop />}
              <li
                className="drop-down"
                onClick={() => setCompany(!openCompany)}
              >
                Company &nbsp;
                {openCompany ? (
                  <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                    <path
                      stroke="#686868"
                      stroke-width="1.5"
                      fill="none"
                      d="m1 5 4-4 4 4"
                    />
                  </svg>
                ) : (
                  <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                    <path
                      stroke="#686868"
                      stroke-width="1.5"
                      fill="none"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                )}
              </li>
              {openCompany && (
                <ul>
                  <li>History</li>
                  <li>Our Team</li>
                  <li>Blog</li>
                </ul>
              )}
              <li>Careers</li>
              <li>About</li>

              <button className="login-button">Login</button>
              <button className="register-button">Register</button>
            </nav>
          </div>
          <div onClick={() => setOpen(!open)} className="underlay"></div>
        </>
      )}
    </>
  );
};

export default MobileHeader;
