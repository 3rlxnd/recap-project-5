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

  main {
  padding: 20px;
  padding-bottom: 60px;
  }

  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: white;
  }

  nav {
  display: flex;
  gap: 10px
  }

  .piece {
  position: relative;
  width: 400px;
  display: flex;
  flex-direction: column;
  background-color:rgb(225, 225, 225);
  }

  .like-button {
  position: absolute;
  margin: 0;
  top: 20px;
  right: 20px;
  border: none;
  padding: 10px;
  border-radius: 100%;
  background-color: white;
  }

  img {
  height: 400px;
  object-fit: cover;
  }

  .piece-wrapper {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  }

  .icon {
  font-size: 20px;
  }
`;

