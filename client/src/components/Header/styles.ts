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

  .informations{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .name{
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    color: white;
  }

  .logout{
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    border: none;

    cursor: pointer;
    transition: all .3s;

    &:hover{
      transform: scale(1.1);
    }
  }

  .logout img{
    width: 45px;
  }

  @media(max-width: 900px){
    .buttonWrapper{
      gap: 2rem;
    }

    margin-bottom: 50px;
  }
`;