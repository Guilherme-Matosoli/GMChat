'use client';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  
  margin: 0 auto;

  max-width: 1400px;
  min-height: 850px;

  @media(max-width: 900px){
    max-width: 1000px;

    padding: 0 20px;
  }
`;