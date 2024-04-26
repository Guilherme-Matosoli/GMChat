'use client';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0;

  main{
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 500px;
    width: 100%;

    border-left: 1px solid black;
    border-right: 1px solid black;

    h2{
      font-family: 'Open Sans', sans-serif;
      font-size: 2.5rem;
      color: white;
    }

    .contacts{
      display: flex;
      align-items: center;

      width: 100%;
    }
  }
`;
