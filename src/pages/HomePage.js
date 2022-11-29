import React from "react";
import "./HomePage.css";
import databiz from "../components/images/client-databiz.svg";
import audiophile from "../components/images/client-audiophile.svg";
import meet from "../components/images/client-meet.svg";
import maker from "../components/images/client-maker.svg";

const HomePage = () => {
  return (
    <main>
      <div className="homepage-container">
        {/* text div */}
        <div className="container">
          {/* Text */}
          <div className="text-container">
            <h1>Make remote work</h1>
            <p>
              Get your team in sync, no mater your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button>Learn more</button>
          </div>
          {/* Logos */}
          <div className="logo-container">
            <img src={databiz} alt="databiz logo" />
            <img src={audiophile} alt="audiophile logo" />
            <img src={meet} alt="meet logo" />
            <img src={maker} alt="maker logo" />
          </div>
        </div>
        {/* Image div */}
        <div className="hero-image"></div>
      </div>
    </main>
  );
};

export default HomePage;
