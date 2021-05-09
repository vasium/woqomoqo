import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="navbar-container">
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
              <Link className="nav-links" to="skills">
                Skills
              </Link>
            </li>
            <li className="nav-link">
              <Link className="nav-links" to="portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-link">
              <Link className="nav-links" to="cv">
                CV
              </Link>
            </li>
            <li className="nav-link">
              <Link className="nav-links" to="contact">
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
