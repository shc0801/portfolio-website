import styled from "styled-components";
import { CarrerData } from "../../lib/static";
import CareerItem from "./CareerItem";

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  
  transition: 1.5s;
  transform: translateX(200px);

  margin-left: 100px;
  opacity: 0;
`;

const Career = () => {
  return (
    <Container className="about_animation_3">
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
