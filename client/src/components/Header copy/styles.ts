'use client';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    width: 11.5rem;
  }

  .buttonWrapper{
    width: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
  }
`;