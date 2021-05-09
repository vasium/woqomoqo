import "./Hero.css";
import Video from "../src/videos/video.mp4";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { useState } from "react";
import Button from "./Button";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const hoverMe = (hover) => {
    console.log("hover");
    {
      hover ? (
        <MdArrowForward className="arrow-forward" />
      ) : (
        <MdKeyboardArrowRight className="arrow-right" />
      );
    }
  };

  const vid = document.getElementById("video-bg");

  if (vid) {
    vid.playbackRate = 0.5;
  }

  return (
    <div>
      <div className="hero-container">
        <div className="hero-bg">
          <video
            id="video-bg"
            className="video-bg"
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
          ></video>
        </div>
        <div className="hero-content">
          <h1 className="hero-h1">Vasilis Zotikas</h1>
          <p className="hero-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            velit non nobis, distinctio quisquam numquam at eius? Veniam ea vel
            expedita, nostrum cupiditate unde soluta excepturi totam! Animi,
            modi iste?
          </p>
          <div className="hero-btn-wrapper">
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
              Get started{hoverMe}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
