import { Link } from "react-router-dom";
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
          <Link className="sidebar-link" to="about">
            About
          </Link>
          <Link className="sidebar-link" to="skills">
            Skills
          </Link>
          <Link className="sidebar-link" to="portfolio">
            Portfolio
          </Link>
          <Link className="sidebar-link" to="cv">
            CV
          </Link>
          <Link className="sidebar-link" to="contact">
            Contact
          </Link>
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
