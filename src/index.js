import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { Visual } from "./components";
import ReactFullpage from "@fullpage/react-fullpage";

const Section = styled.div`
  height: 100%;
`;

const Fullpage = () => (
  <ReactFullpage
    scrollingSpeed={1000} /* Options here */
    navigation={true}
    slidesNavigation={true}
    navigationPosition='left'
    sectionSelector='.section'
    render={({ state, fullpageApi }) => {
      console.log(state, fullpageApi);
      return (
        <ReactFullpage.Wrapper>
          <Section className="section">
            <Visual />
          </Section>
          <Section className="section"></Section>
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
