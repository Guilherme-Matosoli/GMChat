'use client';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{ font-size: 16px; }

  @media(max-width: 900px) { html{ font-size: 14px; } }
  @media(min-width: 3450px) { html{ font-size: 18px; } }

  :root{
    --primary-color: #8F82C8;
  }
`;