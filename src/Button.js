import { Link } from "react-router-dom";
import "./Button.css";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { useEffect, useState } from "react";

const Button = ({
  children,
  buttonLink,
  primary,
  secondary,
  big,
  dark,
  fontBig,
}) => {
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

  const [open, setOpen] = useState(null);

  useEffect(() => {
    setOpen(true);
  }, []);

  const prim = primary ? "#2e89c5" : "#010606";
  const sec = secondary ? "#fff" : "#2e89c5";
  const fontSize = fontBig ? "20px" : "16px";
  const color = dark ? "#010606" : "#fff";
  const padding = big ? "14px 48px" : "12px 30px";
  const background = !hover ? prim : sec;

  return (
    <Link
      to={buttonLink}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      className="button"
      style={{
        background,
        fontSize,
        color,
        padding,
      }}
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
