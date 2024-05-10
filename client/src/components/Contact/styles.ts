'use client';
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 75px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;

  background-image: var(--button-gradient);
  border-radius: 20px;
  border: 2px solid #FF5D00;

  .avatar{
    width: 60px;
    border: 2px solid black;

    border-radius: 50%;
  }

  span{
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: white;
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

    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    color: black;

    cursor: pointer;
    transition: all .3s;

    &:hover{
      transform: scale(1.1);
    }
  }

  .info{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info strong{
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
  }
`;