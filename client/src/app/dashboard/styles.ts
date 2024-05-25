'use client';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0;

  main{
    display: flex;

    min-height: 500px;
    width: 100%;

    margin-top: 150px;
  }

  @media (max-width: 900px){
    main{
      flex-direction: column;
      
      gap: 20px;
      margin-top: 0;
    }
  }
`;
