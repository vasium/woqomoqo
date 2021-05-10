import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ toggle }) => {
  return (
    <>
      <div className="nav">
        <div className="navbar-container">
          <LinkR className="nav-logo" to="/">
            Woqomoqo
          </LinkR>
          <div className="mobile-icon" onClick={toggle}>
            <FaBars />
          </div>
          <ul className="nav-menu">
            <li className="nav-link">
              <LinkS className="nav-links" to="about">
                About
              </LinkS>
            </li>
            <li className="nav-link">
              <LinkS className="nav-links" to="skills">
                Skills
              </LinkS>
            </li>
            <li className="nav-link">
              <LinkS className="nav-links" to="portfolio">
                Portfolio
              </LinkS>
            </li>
            <li className="nav-link">
              <LinkS className="nav-links" to="cv">
                CV
              </LinkS>
            </li>
            <li className="nav-link">
              <LinkR className="nav-links" to="contact">
                Contact
              </LinkR>
            </li>
          </ul>
          <div className="nav-btn">
            <button className="nav-btn-link" to="/signin/">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
