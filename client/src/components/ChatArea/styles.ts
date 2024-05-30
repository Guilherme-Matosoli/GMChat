
'use client';
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: white;

  height: calc(100vh - 20px - 50px - 70px - 10px);
  flex: 1;
  width: 100%;

  .topSide{
    position: relative;
    display: flex;
    align-items: center; 
    justify-content: space-between;

    padding: 20px;

    width: 100%;
    height: 90px;

    border-bottom: 1px solid #e1e1e1;
  }

  .topSide .info{
    display: flex;  
    align-items: center;
    gap: 25px;

    height: 100%;

    .profilePic{
      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;

      border-radius: 50%;
      border: 2px solid black;
    }

    .profilePic img{
      width: 60px;
    }

    .profilePic::before{
      content: '';
      display: block;

      position: absolute;
      right: 0;
      bottom: 0;

      width: 15px;
      height: 15px;

      background-color: #00EA1C;
      border-radius: 50%;
      border: 2px solid white;
    }

    .user{
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      height: 100%;
    }

    .user .name{
      font-family: 'Open Sans', sans-serif;
      font-size: 1.7rem;
    }

    .user .status{
      font-family: 'Open Sans', sans-serif;
      font-size: 1.3rem;
      font-weight: 500;
    }
  }

  .topSide .options{
    display: flex;
    align-items: center;

    height: 100%;


    border-left: 1px solid #e1e1e1;
    padding: 0 15px;

    .searchButton, .settingsButton{
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 10px;

      background-color: white;
      border-radius: 50%;
      border: none;

      cursor: pointer;
      transition: filter .3s;

      &:hover{
        filter: brightness(0.9);
      }
    } 

    .searchButton img, .settingsButton img{
      width: 30px;
    }
  }

  .messageArea{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    overflow: hidden;
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
    height: 100%;
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 20px 40px;
    
    overflow-y: auto;
  }
   
  .inputArea{
    display: flex;
    align-items: center;
    gap: 20px;

    padding: 10px;

    width: 100%;
    min-height: 70px;

    border-top: 1px solid #e1e1e1;
  }

  .sendButton{
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;

    background-color: #e1e1e1;
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

    width: 100%;
    height: 100vh;
    border-radius: 0;
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
