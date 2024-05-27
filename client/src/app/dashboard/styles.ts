'use client';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  height: 100vh;

  main{
    display: flex;

    height: 100%;
    min-height: 500px;
    width: 100%;
    flex: 1;

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
