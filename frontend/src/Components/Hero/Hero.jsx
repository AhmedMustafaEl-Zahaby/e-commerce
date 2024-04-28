import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <h2>NEW ARRIVALS ONLY</h2>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="hand" />
          </div>
          <p className="collections-text">collections</p>
          <p className="for-everyone-text">for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collections</div>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="hero" className="hero-image" />
      </div>
    </div>
  );
}

export default Hero;
