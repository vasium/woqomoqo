import { Link as LinkS } from "react-scroll";
import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ toggle }) => {
  return (
    <aside
      className="sidebar-container"
      id="sidebar-container"
      onClick={toggle}
    >
      <div className="icon" onClick={toggle}>
        <div className="close-icon">
          <FaTimes />
        </div>
      </div>
      <div className="sidebar-wrapper">
        <ul className="sidebar-menu">
          <LinkS className="sidebar-link" to="about">
            About
          </LinkS>
          <LinkS className="sidebar-link" to="skills">
            Skills
          </LinkS>
          <LinkS className="sidebar-link" to="portfolio">
            Portfolio
          </LinkS>
          <LinkS className="sidebar-link" to="cv">
            CV
          </LinkS>
          <LinkS className="sidebar-link" to="contact">
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
