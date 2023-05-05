import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  * {
    padding: 0px;
    margin: 0px;
    border: 0px;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :focus,
  :active {
    outline: none;
  }

  a:focus,
  a:active {
    outline: none;
  }

  html,
  body {
    height: 100%;
    min-width: 320px;
  }

  body {
    color: #000;
    line-height: 1;
    font-family: 'Poppins',sans-serif;
    font-size: 14px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: scroll;
  }

  input,
  button,
  textarea {
    font-family: inherit;
    font-size: inherit;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    color: inherit;
    background-color: inherit;
  }

  a {
    color: inherit;
  }

  a:link,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }
`