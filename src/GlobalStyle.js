import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: 'NanumSquare', sans-serif;
    };
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
    #fullpage {
        height: 100vh !important;
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
`;

export default GlobalStyle;
