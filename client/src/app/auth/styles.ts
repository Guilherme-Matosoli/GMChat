'use client';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 80px 250px;

  min-height: 100vh;
  width: 100vw;

  background-color: var(--dark-background);

  .content{
    display: flex;
    position: relative;

    height: 750px;
    width: 100%;

    background-color: white;
    border-radius: 20px;
  }

  .content .formArea{
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    height: 100%;

    border-radius: inherit;
  }

  .content .formArea .form{
    width: 50%;
  }

  .content .aside{
    position: absolute;
    right: 0;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 50%;
    height: 100%;

    background-image: var(--gradient-background);
    border-radius: 100px 20px 20px 100px;
  }
`;