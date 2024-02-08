'use client';
import Link from "next/link";
import styled from "styled-components";

export const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 80px;

  background-image: var(--button-gradient);
  border-radius: 50px;
  border: 1px solid orange;

  color: white;
  font-size: 1.6rem;
  font-family: 'Inter', sans-serif;
  text-decoration: none;

  transition: all .3s;
  &:hover{
    filter: brightness(1.1);
  }

  &.white{
    background-image: none;
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &.white:hover{
    filter: brightness(0.9);
  }

  @media(max-width: 900px){
    padding: 15px 75px;

    font-size: 1.4rem;
  }

  @media(max-width: 300px){
    padding: 5px 20px;
  }
`;

export const ButtonContainer = styled.button`
  padding: 20px 80px;

  background-image: var(--button-gradient);
  border-radius: 50px;

  color: white;
  font-size: 1.6rem;
  font-family: 'Inter', sans-serif;
  text-decoration: none;

  transition: all .3s;
  &:hover{
    filter: brightness(1.1);
  }

  cursor: pointer;

  @media(max-width: 900px){
    padding: 15px 75px;

    font-size: 1.4rem;
    max-width: 100%;
  }

  @media(max-width: 300px){
    padding: 5px 20px;
  }
`;