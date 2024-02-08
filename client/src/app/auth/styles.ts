'use client';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  padding: 50px 250px;

  min-height: 100vh;
  width: 100vw;

  background-color: var(--dark-background);

  .logo{ display: none; }

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
    display: flex;
    align-items: center;
    justify-content: center;

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

  @media(max-width: 1700px){
    padding: 80px 100px;
  }
  @media(max-width: 1100px){
    padding: 80px 20px;
  }

  @media(max-width: 900px){
    background-color: var(--linear-background);
    padding: 20px;

    .logo{
      display: inline;
      max-width: 95px;
    }

    .content{
      height: 600px;
      padding: 0px 20px;
    }

    .content .formArea, .content .formArea .form{
      width: 100%;
    }

    .content .aside{
      display: none;
    }
  }
`;