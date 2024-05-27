'use client';
import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  width: 100%;
  min-height: 75px;

  box-sizing: border-box;
  padding: 0 20px;

  display: flex;
  align-items: center;
  gap: 25px;

  &::after{
    content: '';

    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    height: 1px;

    background-color: rgba(0, 0, 0, .2);
  }

  .avatar{
    width: 50px;
    border: 2px solid black;

    border-radius: 50%;
  }

  span{
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: black;
  }

  button.addButton{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;

    border: 1px solid black;
    background-color: white;
    border-radius: 50%;

    font-size: 20px;

    cursor: pointer;
    transition: all .3s;

    &:hover{
      filter: brightness(0.9);
    }
  }

  &.add{
    justify-content: space-between;
  }

  .goToChat{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;

    border: 1px solid black;
    background-color: transparent;
    border-radius: 50%;

    cursor: pointer;
    transition: all .3s;

    &:hover{
      transform: scale(1.1);
    }
  }

  .goToChat img{
  }

  .info{
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .info strong{
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: #929292;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    max-width: 150px;
  }

  @media(max-width: 900px){
    min-height: 50px;

    gap: 10px;
    padding: 0 15px;

    .avatar{
      width: 40px;
    }

    span{
      font-size: 15px;
    }

    .info strong{
      font-size: 10px;
    }

    button.addButton{
      width: 35px;
      height: 35px;

      font-size: 15px;
    }

    .goToChat{
      width: 35px;
      height: 35px;
    }

    .goToChat img{
      max-width: 15px;
    }
  }

  @media(max-width: 350px){
    .info strong{
      max-width: 70px;
    }
  }
`;
