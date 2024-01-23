'use client';
import Link from "next/link";
import styled from "styled-components";

export const LinkContainer = styled(Link)`
  padding: 20px 80px;

  background-image: var(--button-gradient);
  border-radius: 20px;

  color: white;
  font-size: 1.6rem;
  font-family: 'Inter', sans-serif;
  text-decoration: none;

  transition: all .3s;
  &:hover{
    filter: brightness(1.1);
  }
`;

export const ButtonContainer = styled.button`

`;