import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  #root {
    padding:0 !important; ;
  }
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #eeeff6;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
  }
  a:disabled, button:disabled {
    cursor: not-allowed;
  }
  a:enabled, button:enabled {
    cursor: pointer;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600 !important;
  }
  iframe[style*="z-index: 2147483647"] {
    display: none;
  }
`;
