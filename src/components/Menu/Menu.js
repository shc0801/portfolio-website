import styled from "styled-components";

const Navigation = styled.ul`
  position: fixed;
  top: 50%;
  left: 60px;
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style-type: none;

  transition: opacity 0.3s 0.5s cubic-bezier(0.46, 0.03, 0.52, 0.96);
  transform: translate(0, -50%);
`;

const NavigationItem = styled.li`
  width: 2.5px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  
  position: relative;
  transition: .5s;

  &::before {
    width: 2.5px;
    height: 30px;
    background-color: #fff;

    display: block;

    position: absolute;
    left: 0;
    top: 0;
    transition: 0.5s;

    content: "";
  }

  &.active ~ li:before {
    height: 0;
  }
`;

const Menu = () => {
  return (
    <Navigation id="navigation">
      <NavigationItem
        data-menuanchor="firstPage"
        className="active"
      ></NavigationItem>
      <NavigationItem data-menuanchor="secondPage"></NavigationItem>
      <NavigationItem data-menuanchor="thirdPage"></NavigationItem>
      <NavigationItem data-menuanchor="fourthPage"></NavigationItem>
      <NavigationItem data-menuanchor="lastPage"></NavigationItem>
    </Navigation>
  );
};

export default Menu;
