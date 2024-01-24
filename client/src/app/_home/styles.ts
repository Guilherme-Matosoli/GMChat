'use client';
import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  /* max-width: 100vw; */
  height: auto;

  padding: 20px 0;

  section{
    background-image: url("landingBackgroundImg.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70rem;
  }

  .mainContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rem;
    flex-grow: 1;

    width: 100%;

    margin-top: -100px;

    h2{
      font-size: 4rem;
      font-family: 'Open Sans', sans-serif;
      color: white;
    }

    p, span{
      text-align: center;
      font-size: 2rem;
      font-family: 'Inter', sans-serif;
      color: white;
    }
  }

  .mainContent .introduction{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .mainContent .box{
    width: 100%;
    min-height: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.5);

    padding: 20px;

    p{
      margin: 0;
    }

    a{
      position: relative;
      text-decoration: none;
      color: white;
    }

    a::after{
      position: absolute;
      left: 50%;
      bottom: 0;

      content: '';
      background-color: white;
      height: 1px;
      width: 0;

      transition: all .3s;
    }

    a:hover::after{
      left: 0;
      width: 100%;
    }
  }

  footer{
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }

  @media(max-width: 900px){
    padding: 10px 0;

    section{
      background-size: 100%;
    }

    .mainContent{
      /* gap: 0; */
    }

    .mainContent .box{
      padding: 10px;

      gap: 0;
    }

    .mainContent .box p,
    .mainContent .box a,
    .mainContent .box span{
      font-size: 1.4rem;
    }

    footer{
      font-size: 1.2rem;
    }
  }
`;