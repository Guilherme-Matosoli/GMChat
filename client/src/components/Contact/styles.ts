'use client';
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 75px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  gap: 25px;

  background-image: var(--button-gradient);
  border-radius: 20px;
  border: 2px solid #FF5D00;

  img{
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


  button{
    display: none;

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

  &.add button{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;

    border: 1px solid black;
    background-color: white;
    border-radius: 50%;
  }
`;