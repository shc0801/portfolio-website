import styled from "styled-components";
import { Career } from "..";
import { MyImg } from "../../assets/images";

const Container = styled.div`
  width: 65vw;
  height: 950px;

  display: flex;

  margin: 0 auto;
`;

const AboutContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 30px 0 0 50px;
`;

const AboutGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.span`
  font-size: 2em;
  font-weight: 800;
`;

const EnTitleText = styled.span`
  font-size: 3.5em;
  font-weight: 800;

  margin-top: 10px;
`;

const Tag = styled.div`
  width: 350px;

  font-family: "Noto Sans KR", sans-serif;
  line-height: 25px;
  word-spacing: 6px;
  font-weight: lighter;

  margin-top: 20px;
`;

const ProfileImg = styled.img`
  width: 450px;

  margin-top: 30px;
`;

const About = () => {
  return (
    <Container>
      <AboutContainer>
        <AboutGroup>
          <TitleText>황성철을 소개합니다.</TitleText>
          <EnTitleText>Hwang Seong-cheol</EnTitleText>
          <Tag>
            #JavaScript #TypeScript #React #Redux #Next.JS #HTML #CSS #Node.JS
            #Express #Mysql #PHP
          </Tag>
        </AboutGroup>
        <ProfileImg src={MyImg} />
      </AboutContainer>
      <Career />
    </Container>
  );
};

export default About;
