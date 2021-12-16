import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { About, Home, Menu, Career } from "./components";
import ReactFullpage from "@fullpage/react-fullpage";

const Section = styled.div`
  height: 100%;
`;

const Fullpage = () => (
  <ReactFullpage
    licenseKey='p@31h@M!s7'
    scrollingSpeed={1000}
    anchors={["firstPage", "secondPage", "thirdPage", "fourthPage", "lastPage"]}
    menu="#navigation"
    onLeave={(origin, destination) => {
      document.body.id = destination.item.attributes[1].value;
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
          <Section
            className="section fp-noscroll"
            data-brightness="black"
          ></Section>
          <Section
            className="section fp-noscroll"
            data-brightness="black"
          ></Section>
          <Section
            className="section fp-noscroll"
            data-brightness="black"
          ></Section>
          <Menu />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Fullpage />
  </React.StrictMode>,
  document.getElementById("root")
);
