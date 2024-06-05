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
  font-size: 16px;
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
    font-size: 14px;
  }

  @media(max-width: 300px){
    padding: 5px 20px;
  }
`;

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 80px;

  background-image: var(--button-gradient);
  border-radius: 50px;

  color: white;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  text-decoration: none;

  transition: filter .3s;
  &:hover{
    filter: brightness(1.1);
  }

  cursor: pointer;

  &.pending{
    padding: 10px 80px;
  }

  @media(max-width: 900px){
    max-width: 100%;
    font-size: 14px;
  }

  @media(max-width: 300px){
    padding: 5px 20px;
  }
`;
