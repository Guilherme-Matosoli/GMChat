'use client';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0;

  main{
    display: flex;

    min-height: 500px;
    width: 100%;

    h2{
      font-family: 'Open Sans', sans-serif;
      font-size: 2.5rem;
      color: white;
    }

    .contactsList{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      
      width: 100%;

      border-right: 1px solid black;
    }

    .contacts{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      overflow-y: auto;
      
      max-height: 500px;
      width: 100%;
      padding: 0 20px;
    }

    .contacts::-webkit-scrollbar{
      background-color: transparent;
      width: 10px;
    }

    .contacts::-webkit-scrollbar-thumb{
      background: #FF5D00;
      border-radius: 20px;
    }

    .newChat{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      width: 100%;
    }

    .searchArea{
      width: 100%;

      padding: 0 20px;
    }
  }
`;
