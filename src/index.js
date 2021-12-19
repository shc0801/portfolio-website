import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { About, Home, Menu, Project, Contact } from "./pages";
import { Header, Hamburger } from "./components";
import ReactFullpage from "@fullpage/react-fullpage";

const Section = styled.div`
  height: 100%;
`;

const Fullpage = () => (
  <ReactFullpage
    licenseKey="p@31h@M!s7"
    scrollingSpeed={1000}
    anchors={["firstPage", "secondPage", "thirdPage", "lastPage"]}
    menu="#navigation"
    onLeave={(origin, destination) => {
      document.body.id = destination.item.attributes[1].value;
      if(destination.index === 1) {
        document.querySelector(".about_animation_1").style.transform = "translateX(0)"
        document.querySelector(".about_animation_1").style.opacity = 1

        document.querySelector(".about_animation_2").style.transform = "translateY(0)"
        document.querySelector(".about_animation_2").style.opacity = 1
        
        document.querySelector(".about_animation_3").style.transform = "translateX(0)"
        document.querySelector(".about_animation_3").style.opacity = 1
      } else {
        document.querySelector(".about_animation_1").style.transform = "translateX(-200px)"
        document.querySelector(".about_animation_1").style.opacity = 0

        document.querySelector(".about_animation_2").style.transform = "translateY(200px)"
        document.querySelector(".about_animation_2").style.opacity = 0
        
        document.querySelector(".about_animation_3").style.transform = "translateX(200px)"
        document.querySelector(".about_animation_3").style.opacity = 0
      }
    }}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Section className="section fp-noscroll" data-brightness="light">
            <Home />
          </Section>
          <Section className="section fp-noscroll" data-brightness="black">
            <About />
          </Section>
          <Section className="section fp-noscroll" data-brightness="light">
            <Project />
          </Section>
          <Section className="section fp-noscroll" data-brightness="light">
            <Contact />
          </Section>
          <Menu />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Hamburger />
    <Fullpage />
  </React.StrictMode>,
  document.getElementById("root")
);
