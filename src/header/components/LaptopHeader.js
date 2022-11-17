import React from "react";
import FeaturesDrop from "./FeaturesDrop";
import "../Header.css";

const LaptopHeader = ({
  openFeatures,
  setFeatures,
  openCompany,
  setCompany,
}) => {
  return (
    <div className="mobile-div">
      <nav className="mobile-nav">
        <div className="nav-items">
          <li onClick={() => setFeatures(!openFeatures)}>
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
          {openFeatures && (
            <div className="drop-down-container box-1">
              <FeaturesDrop />
            </div>
          )}
          <li onClick={() => setCompany(!openCompany)}>
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
            <div className="drop-down-container box-2">
              <ul>
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            </div>
          )}
          <li>Careers</li>
          <li>About</li>
        </div>

        <div>
          <button className="login-button">Login</button>
          <button className="register-button">Register</button>
        </div>
      </nav>
    </div>
  );
};

export default LaptopHeader;
