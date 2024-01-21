"use client";
import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;

  border: none;
  background-color: #6657A1;
  border-radius: 20px;

  font-size: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: white;

  cursor: pointer;
  transition: all .3s;
  
  &:hover{
    filter: brightness(0.8);
    transform: scale(1.1);
  }
`;