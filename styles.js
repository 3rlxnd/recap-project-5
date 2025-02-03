import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    height: 100vh;
  }

  footer {
  position: fixed;
bottom: 0;
  width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  nav {
  display: flex;
  gap: 10px
  }
`;
