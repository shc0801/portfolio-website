import { slide as HamburgerMenu } from "react-burger-menu";

const Hamburger = () => {
  return (
    <HamburgerMenu stack width={"34.375rem"} right pageWrapId={"page-wrap"} outerContainerId={"App"}>
      <a id="home" className="menu-item" href="#firstPage">
        Home
      </a>
      <a id="about" className="menu-item" href="#secondPage">
        About Me
      </a>
      <a id="project" className="menu-item" href="#thirdPage">
        Projects
      </a>
      <a id="contact" className="menu-item" href="#lastPage">
        Contact
      </a>
    </HamburgerMenu>
  );
};

export default Hamburger;
