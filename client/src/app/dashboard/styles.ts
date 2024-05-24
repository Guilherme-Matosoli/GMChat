'use client';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0;

  main{
    display: flex;

    min-height: 500px;
    width: 100%;

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

    .result{
      padding: 10px 0;

      display: flex;
      flex-direction: column;
      gap: 10px;

      width: 100%;
      max-height: 500px;
    }

    .result::-webkit-scrollbar{
      background-color: transparent;
      width: 10px;
    }

    .result::-webkit-scrollbar-thumb{
      background: #FF5D00;
      border-radius: 20px;
    }
  }
`;
