'use client';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20rem;
  
  margin: 0 auto;

  max-width: 1200px;
  min-height: 800px;

  @media(max-width: 900px){
    padding: 0 20px;

    gap: 15rem;
  }
`;