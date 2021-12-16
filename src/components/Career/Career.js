import styled from "styled-components";
import { CarrerData } from "../../lib/static";
import CareerItem from "./CareerItem";
console.log(CarrerData);

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Career = () => {
  return (
    <Container>
      {CarrerData.data.map((item, i) => (
      <CareerItem
          key={i}
          name={item.name}
          ename={item.ename}
          icon={item.icon}
          data={item.data}/>
      ))}
    </Container>
  );
};

export default Career;
