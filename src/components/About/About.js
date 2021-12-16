import styled from "styled-components";
import { Career } from "..";

const Container = styled.div`
  width: 1600px;
  height: 100%;

  display: flex;

  margin: 0 auto;
  padding-top: 400px;
`;
const AboutContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  margin-top: 30px;
`;

const TitleText = styled.span`
  font-size: 1.7em;
  font-weight: 800;
`;

const EnTitleText = styled.span`
  font-size: 3em;
  font-weight: 800;
  
  margin-top: 10px;
`

const Tag = styled.div`
  width: 350px;

  font-family: 'Noto Sans KR', sans-serif;
  line-height: 25px;
  word-spacing: 6px;
  font-weight: lighter;

  margin-top: 20px;
`;

const About = () => {
  return (
    <Container>
      <AboutContainer>
        <TitleText>황성철을 소개합니다.</TitleText>
        <EnTitleText>Hwang Seong-cheol</EnTitleText>
        <Tag>
          #JavaScript #TypeScript #React #Redux #Next.JS #HTML #CSS #Node.JS
          #Express #Mysql #PHP
        </Tag>
      </AboutContainer>
      <Career />
    </Container>
  );
};

export default About;
