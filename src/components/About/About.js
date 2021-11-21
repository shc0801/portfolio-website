import styled from "styled-components";

const FlexCenter = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  width: 800px;

  margin-bottom: 10px;
`;

const Box = styled.span`
  width: auto;

  font-size: 1.2em;
  font-weight: bold;

  padding: 5px 10px;
  margin-bottom: 20px;
  border: 2px solid #000;
`

const TitleText = styled.span`
  font-size: 2em;
  font-weight: bold;
  line-height: 45px;
`;

const Bottom = styled.div`
  color: #a8a8a8;
  line-height: 25px;
`

const About = () => {
  return (
    <FlexCenter>
      <Container>
        <Top>
          <Box>PORTFOLIO</Box><br /><br />
          <TitleText>
            console.log("안녕하세요"); <br /> Fullstack 개발자 황성철입니다.
          </TitleText>
        </Top>
        <Bottom>
          #JavaScript #TypeScript #React #Redux #Next.JS #HTML #CSS <br /> #Node.JS #Express #Mysql #PHP
        </Bottom>
      </Container>
    </FlexCenter>
  );
};

export default About;
