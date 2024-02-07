'use client';
import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 500px;

  font-family: 'Open Sans';
  font-size: 1.5rem;

  .buttonsWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  button, a{
    width: 400px;
    border: none;
  }

  .separator{
    width: 400px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
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
    .buttonsWrapper{
      max-width: 100%;
    }

    .separator{
      max-width: 100%;
    }
  }
`;