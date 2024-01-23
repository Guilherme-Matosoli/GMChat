'use client';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    max-width: 100vw;
    overflow-x: hidden;

    background-color: rgb(255,153,0);
    background-image: var(--gradient-background);
  }

  html{
    font-size: 10px;
  }


  @media(max-width: 900px){
    html { font-size: 8px; }
  }

  @media(min-width: 2500px){
    html { font-size: 12px; }
  }

  :root{
    --gradient-background: linear-gradient(90deg, rgba(255,153,0,1) 0%, rgba(254,154,4,1) 3%, rgba(255,104,71,1) 100%);
    --button-gradient: linear-gradient(90deg, rgba(255,104,71,1) 0%, rgba(255,46,0,1) 100%);
  }
`;