import styled from "styled-components";
import { ContactBackground } from "../../assets/images";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackgroundImg = styled.img`
  width: 100vw;
  height: 100vh;

  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;

  object-fit: cover;
  filter: brightness(10%);
`;

const Title = styled.span`
  font-size: 4em;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  color: #fff;

  margin-bottom: 2rem;
`;

const SubTitle = styled.span`
  font-size: 1.4em;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  color: #fff;
`;

const Content = styled.span`
  font-weight: lighter;
  color: rgba(255, 255, 255, 0.5);
  line-height: 2rem;

  margin-top: 1.8rem;
`;

const Contact = () => {
  return (
    <Container className="container">
      <BackgroundImg src={ContactBackground} />
      <Title>Contact Me</Title>
      <SubTitle>"나는 아직 배고프다"</SubTitle>
      <Content>
        안녕하십니까, 풀스택 개발자 황성철입니다. <br />
        고등학교 생활동안 다양한 프로젝트와 기능반 과정에서 다양한 경험을 얻었고, <br />
        이를 통해 웹 개발 업무 프로세스의 전반적인 능력을 얻었습니다. <br />
        가장 좋은 IT 서비스는 사용자의 입장에서 쓰기편한 서비스라 생각하고{" "}
        <br />늘 사용자의 관점을 고안하며 더 나아가는 개발자가 되기 위해
        노력하고 있습니다.
      </Content>
    </Container>
  );
};

export default Contact;
