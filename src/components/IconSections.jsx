import React from "react";
import amazon from "../assets/amazon.png";
import filpkart from "../assets/filpkart.png";
import glowroad from "../assets/glowroad.jpg";
import jiomart from "../assets/jiomart.png";
import meesho from "../assets/meesho2.png";
import walmart from "../assets/walmart.png";
import "./IconSections.css";

const IconSections = ({ speed = 5 }) => {
  const icons = [amazon, filpkart, meesho, glowroad, jiomart, walmart];

  return (
    <div className="icon-slider-container">
      <div className="icon-slider" style={{ animationDuration: `${speed}s` }}>
        {icons.concat(icons).map((icon, idx) => (
          <img key={idx} src={icon} alt="icon" className="icon-item" />
        ))}
      </div>
    </div>
  );
};

export default IconSections;
