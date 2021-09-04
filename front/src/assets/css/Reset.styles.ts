import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  @keyframes treme {
    0% {margin-left: 0;}
    25% {margin-left: 5px;}
    50% {margin-left: 0;}
    75% {margin-left: -5px;}
    100% {margin-left: 0;}
  }
`;

export default Reset;