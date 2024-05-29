
'use client';
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
//  gap: 20px;
  border-radius: 20px;
  background: white;

  height: 100%;
  flex: 1;

  .topSide{
    position: relative;
    display: flex;
    align-items: center;

    padding: 20px;

    width: 100%;
    height: 90px;
  }

  .messageArea{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    flex: 1;

    width: 100%;

    overflow-y: auto;
  }

  .messageArea::-webkit-scrollbar{
    background-color: transparent;
    width: 10px;
  }

  .messageArea::-webkit-scrollbar-thumb{
    background: #FF5D00;
    border-radius: 20px;
  }

  .messageList{
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 20px 40px;
  }

  .inputArea{
    display: flex;
    align-items: center;
    gap: 20px;

    padding: 10px;

    width: 100%;
    min-height: 70px;
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
  }

  @media(max-width: 600px){ 
    .topSide{
      justify-content: space-between;
      align-items: center;

      img{
        max-width: 40px;
      }
    }

    .topSide span{
      position: initial;

      transform: none;
    }

    .topSide a, .topSide span{
      font-size: 1.4rem;
    }   
  }
`;
