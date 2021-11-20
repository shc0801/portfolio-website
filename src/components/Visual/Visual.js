import Particles from "react-tsparticles";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';

const Container = styled.div`
  width: 100%;

  color: #fff;
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  line-height: 70px;

  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: 100;

  & > span { margin-bottom: 10px }
`;

const TitleText = styled.i`
  font-size: 1.4rem;
  font-weight: normal;
  color: #fff;
  line-height: 30px;
  
  opacity: 0.8;
`

const MainPage = () => {
  return (
    <>
      <Container>
        <TitleText>
          황성철 Web Developer Portfolio
        </TitleText>
        <Typewriter
          options={{
            strings: "I’m Fullstack <br/> Developer;",
            autoStart: true,
          }}
        />
        
      </Container>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#252934",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#e83d84",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 1,
              width: 0.5,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 3000,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 1,
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default MainPage;
