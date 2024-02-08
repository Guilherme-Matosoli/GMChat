'use client';
import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 500px;
  width: 400px;

  h1{
    font-family: 'Open Sans';
    font-size: 2.5rem;
  }

  @media(max-width: 300px){
    width: 100%;
  }
`;