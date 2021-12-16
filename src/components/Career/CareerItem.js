import styled from "styled-components";

const Container = styled.div`
  display: flex;

  margin-bottom: 5px;
  padding: 30px 0 0 10px;
  border-top: 2px solid #ddd;
`;

const CareerLeft = styled.div``;

const Icon = styled.img`
  width: 40px;
`;

const CareerTitle = styled.span`
  width: 150px;
  display: flex;
  flex-direction: column;
`;

const CareerName = styled.span`
  font-size: 1.5em;
  font-weight: 800;
`;

const CareerEName = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  line-height: 25px;
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

  padding: 15px 0;
`

const CareerText = styled.span`
  font-weight: bold;
  margin-left: 20px;
`

const CareerItem = ({ name, ename, icon, data }) => {
  console.log(name, icon, data);
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
        {data.map(item => (
          <Career>
            {item.year}. {item.month}
            <CareerText>{item.text}</CareerText>
          </Career>
        ))}
      </CareerRight>
    </Container>
  );
};

export default CareerItem;
