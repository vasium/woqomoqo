import "./Hero.css";
import Video from "../src/videos/video.mp4";
import Button from "./Button";
import { animateScroll } from "react-scroll";

const Hero = () => {
  const vid = document.getElementById("video-bg");

  if (vid) {
    vid.playbackRate = 0.5;
  }

  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

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
          <p className="hero-p">VR Developer | Web Developer | Programmer</p>
          <div className="hero-btn-wrapper">
            <Button
              buttonLink={toggleHome}
              primary={true}
              secondary={true}
              big={true}
              dark={true}
              fontBig={true}
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
