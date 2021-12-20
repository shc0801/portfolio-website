import Particles from "react-tsparticles";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const Container = styled.div`
  width: 100%;

  color: #fff;
  text-align: center;
  font-weight: bold;

  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: 100;

  & > span {
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2.3rem;
    line-height: 40px;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 2.8rem;
    line-height: 40px;
  }

  @media only screen and (min-width: 2000px) {
    line-height: 60px;
    font-size: 3.5rem;
  }
`;

const TitleText = styled.i`
  font-size: 1.4rem;
  font-weight: normal;
  color: rgba(255, 255, 2555, 0.5);
  line-height: 45px;

  @media only screen and (min-width: 1200px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 2000px) {
    font-size: 1.4rem;
  }
`;

const Home = () => {
  return (
    <>
      <Container>
        <TitleText>Fullstack Developer Portfolio</TitleText>
        <Typewriter
          options={{
            strings: "저는 개발자 황성철 입니다.",
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

export default Home;
