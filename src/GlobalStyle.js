import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    user-select: none;
  }
  body{
      padding: 0;
      margin: 0;
      font-family: 'NanumSquare', sans-serif;
  };
  a{
    text-decoration: none;
    color: inherit;
  }
  button{
      display: flex;
      cursor: pointer;
      outline: none;
      border-radius: 3px;
  };
  input{
      display: flex;
      outline: none;
      padding-left: 10px;
  };

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
  @media only screen and (min-width: 1200px) {
    .container {
      max-width: 1200px;
    }
  }
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  #black .header {
    color: #000;
  }
  #light .header {
    color: #fff;
  }

  #fullpage {
      height: 100vh !important;
  }
  #fullpage div:nth-child(2) #tsparticles {
      top: 100vh;
  }
  #black #navigation li {
      background-color: rgba(0, 0, 0, 0.1);
  }
  #light #navigation li {
      background-color: rgba(255, 255, 255, 0.1);
  }
  #black #navigation li::before {
      background-color: #000;
  }
  #light #navigation li::before {
      background-color: #fff;
  }
  
  #page-wrap {
    text-align: center;
    overflow: auto;
    top: 45%;
    position: relative;
  }

  .bm-item {
    display: inline-block;

    text-decoration: none;
    margin-bottom: 10px;
    color: #d1d1d1;
    transition: color 0.2s;
  }

  .bm-item:hover {
    color: white;
  }

  .bm-burger-button {
    position: fixed;
    width: 28px;
    height: 20.41px;
    right: 36px;
    top: 36px;
  }

  .bm-burger-bars {
    background: #fff;
    transition: 1s;
  }

  #black .bm-burger-bars {
    background: #373a47;
  }
  
  #light .bm-burger-bars {
    background: #fff;
  }

 .bm-cross-button  {
    left: 10% !important;
    top: 5% !important;
  } 

  .bm-cross {
    height: 3px !important;
    width: 25px !important;
    background: #bdc3c7;
  }

  .bm-menu {
    background: #101010;
    z-index: 200;
    padding-top: 5em;
    font-size: 2em;
    font-weight: bold;
    line-height: 4rem;
  }

  .bm-menu a { 
    padding-left: 2em;
  }

  .bm-morph-shape {
    fill: #373a47;
  }

  .bm-item-list {
    color: #b8b7ad;
  }

  .bm-overlay {
    display: none;
  }

`;

export default GlobalStyle;
