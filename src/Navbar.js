// import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Styles.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-bar-container">
          <Link className="nav-logo" to="/">
            Woqomoqo
          </Link>
          <div className="mobile-icon">
            <FaBars />
          </div>
          <ul className="nav-menu">
            <li className="nav-link">
              <Link className="nav-links" to="about">
                About
              </Link>
            </li>
            <li className="nav-link">
              <Link className="nav-links" to="about">
                Skills
              </Link>
            </li>
            <li className="nav-link">
              <Link className="nav-links" to="about">
                Portfolio
              </Link>
            </li>
            <li className="nav-link">
              <Link className="nav-links" to="about">
                CV
              </Link>
            </li>
            <li className="nav-link">
              <Link className="nav-links" to="about">
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-btn">
            <Link className="nav-btn-link" to="/signin/">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
