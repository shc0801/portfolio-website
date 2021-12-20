import styled from "styled-components";
import { Career } from "..";
import { MyImg } from "../../assets/images";

const Container = styled.div`
  display: flex;

  margin: 0 auto;

  @media only screen and (min-width: 1200px) {
    width: 85vw;
    height: 450px;
  }

  @media only screen and (min-width: 1600px) {
    width: 85vw;
    height: 650px;
  }

  @media only screen and (min-width: 2000px) {
    width: 75vw;
    height: 950px;
  }
`;

const AboutContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 30px 0 0 50px;

  @media only screen and (min-width: 2000px) {
    margin: 20px 0 0 50px;
  }
`;

const AboutGroup = styled.div`
  display: flex;
  flex-direction: column;

  transition: 0.5s;
  transform: translateX(-200px);

  opacity: 0;
`;

const TitleText = styled.span`
  font-size: 2em;
  font-weight: 800;

  @media only screen and (min-width: 1200px) {
    font-size: 1.5em;
  }

  @media only screen and (min-width: 2000px) {
    font-size: 2em;
  }
`;

const EnTitleText = styled.span`
  font-size: 3.5em;
  font-weight: 800;

  margin-top: 10px;

  @media only screen and (min-width: 1200px) {
    font-size: 2.5em;
  }

  @media only screen and (min-width: 2000px) {
    font-size: 3.5em;
  }
`;

const Tag = styled.div`
  width: 350px;

  font-family: "Noto Sans KR", sans-serif;
  line-height: 25px;
  word-spacing: 6px;
  font-weight: lighter;

  margin-top: 20px;

  @media only screen and (min-width: 1200px) {
    font-size: 0.7em;
    line-height: 15px;
    word-spacing: 4px;

    margin-top: 15px;
  }

  @media only screen and (min-width: 2000px) {
    font-size: 1em;
    line-height: 25px;
    word-spacing: 6px;
    margin-top: 20px;
  }
`;

const ProfileImg = styled.img`
  transition: 1s;
  transform: translateY(200px);

  margin-top: 30px;
  opacity: 0;

  @media only screen and (min-width: 1200px) {
    width: 230px;
  }

  @media only screen and (min-width: 1600px) {
    width: 350px;
  }

  @media only screen and (min-width: 2000px) {
    width: 54%;
  }
`;

const About = () => {
  return (
    <Container>
      <AboutContainer>
        <AboutGroup className="about_animation_1">
          <TitleText>황성철을 소개합니다.</TitleText>
          <EnTitleText>Hwang Seong-cheol</EnTitleText>
          <Tag>
            #JavaScript #TypeScript #React #Redux #Next.JS #HTML #CSS #Node.JS
            #Express #Mysql #PHP
          </Tag>
        </AboutGroup>
        <ProfileImg className="about_animation_2" src={MyImg} />
      </AboutContainer>
      <Career />
    </Container>
  );
};

export default About;
