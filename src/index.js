import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { About, Home, Menu } from "./components";
import ReactFullpage from "@fullpage/react-fullpage";

const Section = styled.div`
  height: 100%;

`;

const Fullpage = () => (
  <ReactFullpage
    scrollingSpeed={1000}
    anchors={["firstPage", "secondPage", "thirdPage", "fourthPage", "lastPage"]}
    menu="#navigation"
    onLeave={(origin, destination) => {
      document.body.id = destination.item.attributes[1].value
    }}
    render={({ state, fullpageApi }) => {
      console.log(state, fullpageApi);
      return (
        <ReactFullpage.Wrapper>
          <Section className="section fp-noscroll" data-brightness="light">
            <Home />
          </Section>
          <Section className="section fp-noscroll" data-brightness="black">
            <About />
          </Section>
          <Section className="section fp-noscroll" data-brightness="black">
            <About />
          </Section>
          <Section className="section fp-noscroll" data-brightness="black">
            <About />
          </Section>
          <Section className="section fp-noscroll" data-brightness="black">
            <About />
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
    <Fullpage />
  </React.StrictMode>,
  document.getElementById("root")
);
