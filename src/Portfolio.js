import "./Portfolio.css";
import Icon1 from "../src/images/svg-1.svg";
import Icon2 from "../src/images/svg-2.svg";
import Icon3 from "../src/images/svg-3.svg";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio-container" id={"portfolio"}>
        <h1 className="portfolio-h1">Portfolio</h1>
        <div className="portfolio-wrapper">
          <div className="portfolio-card">
            <img className="portfolio-icon" alt="" src={Icon1}></img>
            <h2 className="portfolio-h2">Project 1</h2>
            <p className="portfolio-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="portfolio-card">
            <img className="portfolio-icon" alt="" src={Icon2}></img>
            <h2 className="portfolio-h2">Project 2</h2>
            <p className="portfolio-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="portfolio-card">
            <img className="portfolio-icon" alt="" src={Icon3}></img>

            <h2 className="portfolio-h2">Project 3</h2>
            <p className="portfolio-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
