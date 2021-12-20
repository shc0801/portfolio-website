import styled from "styled-components";

const Container = styled.div`
  display: flex;

  margin-bottom: 5px;
  padding: 30px 0 0 10px;
  border-top: 2px solid #ddd;

  @media only screen and (min-width: 1200px) {
    padding: 20px 0 0 10px;
  }

  @media only screen and (min-width: 2000px) {
    padding: 30px 0 0 10px;
  }
`;

const CareerLeft = styled.div``;

const CareerTitle = styled.span`
  width: 180px;
  display: flex;
  flex-direction: column;
`;

const CareerName = styled.span`
  font-weight: 800;

  @media only screen and (min-width: 1600px) {
    font-size: 1.5em;
  }

  @media only screen and (min-width: 2000px) {
    font-size: 1.8em;
  }
`;

const CareerEName = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  line-height: 30px;
  word-spacing: 6px;
  font-weight: lighter;
`;

const CareerRight = styled.div`
  width: 100%;
  & > div:first-child {
    padding-top: 0;
  }
`;

const Career = styled.div`
  width: 100%;
  display: flex;

  font-size: 1.2em;

  @media only screen and (min-width: 1200px) {
    font-size: 0.5em;
    padding: 5px 0;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 0.8em;
    padding: 10px 0;
  }

  @media only screen and (min-width: 2000px) {
    font-size: 1.2em;
    padding: 15px 0;
  }
`;

const CareerText = styled.span`
  font-weight: bold;
  margin-left: 25px;
`;

const CareerItem = ({ name, ename, icon, data }) => {
  return (
    <Container>
      <CareerLeft>
        {/* <Icon src={icon}/> */}
        <CareerTitle>
          <CareerName>{name}</CareerName>
          <CareerEName>{ename}</CareerEName>
        </CareerTitle>
      </CareerLeft>
      <CareerRight>
        {data.map((item, i) => (
          <Career key={i}>
            {item.year}. {item.month}
            <CareerText>{item.text}</CareerText>
          </Career>
        ))}
      </CareerRight>
    </Container>
  );
};

export default CareerItem;
