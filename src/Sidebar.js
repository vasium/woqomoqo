import { Link as LinkS } from "react-scroll";
import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Sidebar = ({ toggle, open }) => {
  // const [isOpen, setIsOpen] = useState(null);

  // const toggle1 = () => {
  //   setIsOpen(!isOpen);
  // };

  // useEffect(() => {
  //   setIsOpen(false);
  // }, []);

  const opacity = open ? "100%" : "0";
  const top = open ? "0" : "-100%";

  return (
    <aside
      className="sidebar-container"
      id="sidebar-container"
      // onClick={(toggle, toggle1)}
      style={{ opacity, top }}
    >
      <div className="icon" onClick={toggle}>
        <div className="close-icon">
          <FaTimes />
        </div>
      </div>
      <div className="sidebar-wrapper">
        <ul className="sidebar-menu">
          <LinkS
            className="sidebar-link"
            to="about"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            About
          </LinkS>
          <LinkS
            className="sidebar-link"
            to="skills"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Skills
          </LinkS>
          <LinkS
            className="sidebar-link"
            to="cv"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            CV
          </LinkS>
          <LinkS
            className="sidebar-link"
            to="portfolio"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Portfolio
          </LinkS>
          <LinkS
            className="sidebar-link"
            to="contact"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Contact
          </LinkS>
        </ul>
        <div className="side-btn-wrap">
          <div className="sidebar-route" to="/signin">
            Sign In
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
