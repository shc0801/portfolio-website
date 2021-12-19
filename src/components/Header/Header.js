import styled from "styled-components";

const Container = styled.div`
  height: 100px;

  font-size: 0.9em;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  color: #fff;

  transition: 1s;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  left: 3vw;
  top: 0;
  z-index: 1000;
`;

const Phone = styled.a``;

const Slash = styled.div`
  padding: 0 20px;
`;

const Email = styled.a``;

const Header = () => {
  return (
    <Container className="header">
      <Phone href="tel:+821095112638">+82 10-9511-2638</Phone> <Slash>/</Slash>{" "}
      <Email href="mailto:backlog0801@gmail.com">backlog0801@gmail.com</Email>
    </Container>
  );
};

export default Header;
