import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./GlobalStyle";
import { FullPage, Slide } from "react-full-page";
import { Visual } from "./components";

const FullpageWrapper = () => {
  return (
    <FullPage controls>
      <Slide>
        <h1>Inner slide content</h1>
      </Slide>
      <Slide>
        <h1>Another slide content</h1>
      </Slide>
    </FullPage>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <FullpageWrapper />
  </React.StrictMode>,
  document.getElementById("root")
);
