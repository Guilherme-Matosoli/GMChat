'use client';
import styled from "styled-components";
import Link from "next/link";

export const Container = styled(Link)`
  width: 12rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 1.6rem;
  font-family: 'Inter', sans-serif;
  text-decoration: none;

  transition: all .3s;

  border-radius: 30px;

  &.gradient{
    background-image: linear-gradient(90deg, rgba(255,104,71,1) 0%, rgba(255,153,0,1) 96%, rgba(254,154,4,1) 100%); 
    border: 1px solid rgba(255, 73, 33, 0.8);

    &:hover{
      filter: brightness(1.1);
    } 
  }

  &.white{ 
    background-color: white;
    background-image: none;
    color: black;

    &:hover{
      filter: brightness(0.9);
    } 
  }

  @media(max-width: 500px){
    width: 10rem;
  }
`;