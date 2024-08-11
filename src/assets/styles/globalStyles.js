import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: #FFFFFF;
    font-family: "Rethink Sans", sans-serif;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;