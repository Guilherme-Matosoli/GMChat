'use client'; 
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 400px;
  min-width: 100px;

  font-family: 'Open Sans', sans-serif;
  font-size: 1.3rem;

  label{
    margin-left: 20px;
  }

  input{
    padding: 20px 30px;
    border-radius: 50px;

    outline: none;
    border: 1px solid black;
  }

  @media(max-width: 900px){
    max-width: 100%;
  }
`;