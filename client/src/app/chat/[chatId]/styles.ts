'use client';
import styled from "styled-components";

export const Container = styled.main`
  padding: 20px 0;

  .chatArea{
    width: 100%;
    height: 700px;

    background-color: red;
  }

  .chatArea .topSide{
    position: relative;
    display: flex;
    align-items: center;

    padding: 0 20px;

    width: 100%;
    height: 50px;

    button{
      display: flex;
      align-items: center;
      gap: 5px;

      background-color: transparent;
      border: none;

      font-size: 1.8rem;
      color: white;

      cursor: pointer;
      transition: all .3s;
    }

    button:hover{
      transform: scale(1.05);
    }

    button img{
      filter: invert(1);
      transform: rotate(180deg);
    }

    span{
      position: absolute;
      left: 50%;
      top: 50%;

      transform: translateX(-50%) translateY(-50%);

      font-family: 'Open Sans', sans-serif;
      font-size: 1.8rem;
      color: white;
    }
  }

`;