import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";

import { animateScroll } from "react-scroll";
import "./Footer.css";
import {
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import logo from "../src/images/logo.svg";

const Footer = () => {
  const toggleHome = () => {
    animateScroll.scrollToTop();
  };
  return (
    <>
      <div className="footer-container">
        <div className="footer-wrap">
          <div className="footer-links-container">
            <div className="footer-links-wrapper">
              <div className="footer-links-items">
                <h1 className="footer-link-title">About</h1>
                <LinkR className="footer-link" to="/">
                  Facebook
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Twitter
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Pinterest
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Behance
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Dribble
                </LinkR>
              </div>
              <div className="footer-links-items">
                <h1 className="footer-link-title">Skills</h1>
                <LinkR className="footer-link" to="/">
                  Facebook
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Twitter
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Pinterest
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Behance
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Dribble
                </LinkR>
              </div>
              <div className="footer-links-items">
                <h1 className="footer-link-title">Portfolio</h1>
                <LinkR className="footer-link" to="/">
                  Facebook
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Twitter
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Pinterest
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Behance
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Dribble
                </LinkR>
              </div>
              <div className="footer-links-items">
                <h1 className="footer-link-title">CV</h1>
                <LinkR className="footer-link" to="/">
                  Facebook
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Twitter
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Pinterest
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Behance
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Dribble
                </LinkR>
              </div>
              <div className="footer-links-items">
                <h1 className="footer-link-title">Contact</h1>
                <LinkR className="footer-link" to="/">
                  Facebook
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Twitter
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Pinterest
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Behance
                </LinkR>
                <LinkR className="footer-link" to="/">
                  Dribble
                </LinkR>
              </div>
            </div>
          </div>
          <div className="socialmedia">
            <div className="socialmedia-wrap">
              {/* <LinkS
                className="socialmedia-logo"
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                to="/"
              >
                <img className="footer-logo-icon" src={logo} alt="" />
              </LinkS> */}

              <LinkR className="socialmedia-logo" to="/" onClick={toggleHome}>
                <img className="footer-logo-icon" src={logo} alt="" />
              </LinkR>

              <small className="website-rights">
                Vasilis Zotikas (woqomoqo) © {new Date().getFullYear()}. All
                rights reserved
              </small>
              <div className="socialmedia-icons">
                <LinkR
                  className="socialmedia-icon-link"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  to=""
                >
                  <FaFacebook />
                </LinkR>
                <LinkR
                  className="socialmedia-icon-link"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  to=""
                >
                  <FaInstagram />
                </LinkR>
                <LinkR
                  className="socialmedia-icon-link"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Youtube"
                  to=""
                >
                  <FaYoutube />
                </LinkR>
                <LinkR
                  className="socialmedia-icon-link"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  to=""
                >
                  <FaTwitter />
                </LinkR>
                <a
                  className="socialmedia-icon-link"
                  href="//www.linkedin.com/in/vasilis-zotikas-265272175"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Linkedin"
                  to=""
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
