import { useEffect, useState } from "react";
import "./About.css";
import Button from "./Button";

const About = ({
  topLine,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  lightBg,
  id,
  lightText,
  darkText,
  imgStart,
}) => {
  const background = lightBg ? "#fff" : "#000";

  const color1 = {
    color: lightText ? "#f7f8fa" : "#010606",
  };
  const color2 = {
    color: darkText ? "#010606" : "#fff",
  };

  // ---
  const gridTemplate = {
    gridTemplateAreas: imgStart
      ? `
                    'col2 col1'`
      : `'col1 col2' 
                `,
  };

  const myDivStyle = {
    gridTemplateAreas: `"col2 col1"`,
  };

  //---

  const newGridTemplate = imgStart ? "'col1 col2'" : "'col2 col1'";
  const mediaMatch = window.matchMedia("(min-width: 768px)");
  const [matches, setMatches] = useState(mediaMatch.matches);
  console.log(newGridTemplate);
  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  const styles = {
    container: (isRowBased) => ({
      // display: "flex",
      gridTemplateAreas: isRowBased
        ? newGridTemplate
        : `'col1 col1' 'col2 col2' 
  `,
      // justifyContent: "space-around",
    }),
  };

  //---
  return (
    <>
      <div className="about-container" style={{ background }} id={id}>
        <div className="about-wrapper">
          <div className="about-row" style={styles.container(matches)}>
            <div className="column-1">
              <div className="text-wrapper">
                <p className="top-line">{topLine}</p>
                <h1 className="heading" style={color1}>
                  {headLine}
                </h1>
                <p className="subtitle" style={color2}>
                  {description}
                </p>
                <div className="btn-wrap">
                  <Button
                    buttonLink={"home"}
                    primary={true}
                    secondary={true}
                    big={true}
                    dark={true}
                    fontBig={true}
                  >
                    {buttonLabel}
                  </Button>
                </div>
              </div>
            </div>
            <div className="column-2">
              <div className="img-wrap">
                <img className="img" src={img} alt={alt}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
