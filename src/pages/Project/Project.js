import styled from "styled-components";
import Globe from "react-globe.gl";
import NanumSquare from "../../assets/font/NanumSquare_ac Bold_Regular.json";
import { LabelData } from "../../lib/static";

const TItle = styled.span`
  font-weight: bold;
  color: #fff;

  position: absolute;
  left: 5vw;
  z-index: 1000;

  @media only screen and (min-width: 1200px) {
    font-size: 3em;
    top: 15vh;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 4em;
    top: 10vh;
  }

  @media only screen and (min-width: 2000px) {
    font-size: 5em;
    top: 10vh;
  }
`;

const Project = () => {
  return (
    <>
      <TItle>PROJECTS</TItle>
      <Globe
        backgroundColor="rgb(0, 0, 0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        labelsData={LabelData}
        labelText="label"
        labelTypeFace={NanumSquare}
        labelSize={2.5}
        labelDotRadius={2}
        labelLabel={(d) => `
      <div class="project_container">
        <img src="${d.img}" width="${d.width}"/>
      </div>
    `}
        onLabelClick={(d) => window.open(d.url, "_blank")}
      />
    </>
  );
};

export default Project;
