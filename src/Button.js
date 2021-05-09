import { Link } from "react-router-dom";
import "./Button.css";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { useEffect, useState } from "react";

const Button = ({ children, buttonLink }) => {
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setHover(false);
  }, []);

  const hoverOn = () => {
    setHover(true);
  };

  const hoverOff = () => {
    setHover(false);
  };

  return (
    <Link
      to={buttonLink}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      className="button"
    >
      {children}
      {hover ? (
        <MdArrowForward className="arrow-forward" />
      ) : (
        <MdKeyboardArrowRight className="arrow-right" />
      )}
    </Link>
  );
};

export default Button;
