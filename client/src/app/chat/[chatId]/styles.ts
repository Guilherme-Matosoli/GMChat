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
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 100%;
    flex: 1;

    background-color: rgba(0, 0, 0, .5);

    padding: 20px 40px;

    overflow-y: auto;
  }

  .chatArea .messageArea::-webkit-scrollbar{
    background-color: transparent;
    width: 10px;
  }

  .chatArea .messageArea::-webkit-scrollbar-thumb{
    background: #FF5D00;
    border-radius: 20px;
  }

  .chatArea .inputArea{
    display: flex;
    align-items: center;
    gap: 20px;

    padding: 10px;

    width: 100%;
    min-height: 70px;

    background-color: rgb(255,104,71);
  }

  .sendButton{
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    border: none;

    background-color: white;
    border-radius: 50%;

    cursor: pointer;
    transition: all .3s;

    &:hover{
      filter: brightness(0.9);
    }
  }

  .sendButton img{
    width: 50px;
  }

  @media(max-width: 900px){
    padding: 0;

    .chatArea{
      height: 100vh;

      border: none;
      border-radius: 0px;
    }

    header.header{
      display: none;
    }
  }
`;
