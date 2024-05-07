'use client';
import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  min-height: 500px;
  width: 400px;

  h1{
    font-family: 'Open Sans';
    font-size: 2.5rem;
  }

  .buttonsWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: 100%;
  }

  button, a{
    width: 100%;
    border: none;
  }

  .separator{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: 100%;
  }

  .separator::before{
    content: '';

    width: 40%;
    height: 1px;

    background-color: black;
  }

  .separator::after{
    content: '';

    width: 40%;
    height: 1px;

    background-color: black;
  }

  @media(max-width: 900px){
    gap: 20px;
  }

  @media(max-width: 300px){
    width: 100%;
  }
`;

export const InputWrapper = styled.section` 
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 500px){
    flex-wrap: wrap;
    gap: 10px;
  }
`;