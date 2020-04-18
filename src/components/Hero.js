import React from "react";
import Button from "react-bootstrap/Button";

import HeroVideo from "../images/herovideo.mp4";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay muted loop className="hero__video">
        <source src={HeroVideo} type="video/mp4" />
      </video>
      <div className=" hero__content">
        <h1>Being naked is the #1 most sustainable option. We are #2</h1>
        <Button
          className="hero__button"
          variant="secondary"
          size="lg"
          // onClick={}
        >
          Check out our collection
        </Button>
      </div>
    </div>
  );
};

export default Hero;
