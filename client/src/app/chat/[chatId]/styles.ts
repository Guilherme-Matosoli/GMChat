'use client';
import styled from "styled-components";

export const Container = styled.main`
  padding: 20px 0;

  .chatArea{
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 700px;

    border: 1px solid black;
    border-radius: 20px;
    overflow: hidden;
  }

  .chatArea .topSide{
    position: relative;
    display: flex;
    align-items: center;

    background-color: rgba(255,104,71,1);

    padding: 0 20px;

    width: 100%;
    height: 70px;

    a{
      display: flex;
      align-items: center;
      gap: 5px;

      background-color: transparent;
      border: none;

      font-family: 'Open Sans', sans-serif;
      font-size: 1.8rem;
      text-decoration: none;
      color: white;

      cursor: pointer;
      transition: all .3s;
    }

    a:hover{
      transform: scale(1.05);
    }

    a img{
      filter: invert();
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

  .chatArea .messageArea{
    width: 100%;
    flex: 1;

    background-color: rgba(0, 0, 0, .5);

    padding: 20px 40px;
  }

  .chatArea .inputArea{
    width: 100%;
    height: 70px;

    background-color: rgb(255,104,71);
  }
`;