'use client';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
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

  .toast{
    padding: 10px;
    font-size: 18px;

    font-family: 'Open Sans', sans-serif;
  }

input[type="color"],
input[type="date"],
input[type="datetime"],
input[type="datetime-local"],
input[type="email"],
input[type="month"],
input[type="number"],
input[type="password"],
input[type="search"],
input[type="tel"],
input[type="text"],
input[type="time"],
input[type="url"],
input[type="week"],
select:focus,
textarea {
  font-size: 16px;
}

  :root{
    --gradient-background: linear-gradient(90deg, rgba(255,153,0,1) 0%, rgba(254,154,4,1) 3%, rgba(255,104,71,1) 100%);
    --button-gradient: linear-gradient(90deg, rgba(255,104,71,1) 0%, rgba(255,46,0,1) 100%);
    
    --dark-background: #2D2828;
  }
`;
