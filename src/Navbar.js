import { Link as LinkR } from "react-router-dom";
import { Link as LinkS, animateScroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import logo from "../src/images/logo.svg";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const background = scrollNav ? "#000" : "transparent";

  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="nav" style={{ background }}>
          <div className="navbar-container">
            <LinkR className="nav-logo" to="/" onClick={toggleHome}>
              <img className="nav-logo-icon" src={logo} alt="" />
            </LinkR>
            <div className="mobile-icon" onClick={toggle}>
              <FaBars />
            </div>
            <ul className="nav-menu">
              <li className="nav-item">
                <LinkS
                  className="nav-links"
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  About
                </LinkS>
              </li>
              <li className="nav-item">
                <LinkS
                  className="nav-links"
                  to="skills"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Skills
                </LinkS>
              </li>
              <li className="nav-item">
                <LinkS
                  className="nav-links"
                  to="cv"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  CV
                </LinkS>
              </li>
              <li className="nav-item">
                <LinkS
                  className="nav-links"
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Portfolio
                </LinkS>
              </li>
              <li className="nav-item">
                <LinkS
                  className="nav-links"
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Contact
                </LinkS>
              </li>
            </ul>
            <div className="nav-btn">
              <LinkR className="nav-btn-link" to="/signin">
                Sign In
              </LinkR>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
