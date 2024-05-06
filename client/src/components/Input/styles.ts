'use client'; 
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

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

  .errorDesc{
    font-family: 'Open Sans', sans-serif;
    color: red;
    margin-left: 20px;
  }
`;