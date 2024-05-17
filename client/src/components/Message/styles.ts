import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  width: 400px;
  height: auto;

  padding: 10px 20px;

  background-color: white;
  border-radius: 20px 20px 20px 0px;

  &.mine{
    align-self: flex-end;

    border-radius: 20px 20px 0px 20px;

    background-color: black;
  }

  &.mine::after{
    content: '';

    position: absolute;
    left: 100%;
    bottom: 0;

    border-top: 10px solid transparent;
    border-left: 10px solid black;
    border-right: 10px solid transparent;
    border-bottom: 10px solid black; 
  }

  &.mine::before{
    display: none;
  }

  &::before{
    content: '';

    position: absolute;
    right: 100%;
    bottom: 0;

    border-top: 5px solid transparent;
    border-right: 5px solid white; 
    border-bottom: 5px solid white; 
    border-left: 5px solid transparent; 
  }

  .userName{
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.7);
  }

  &.mine .userName{
    color: white;
  }

  .messageContent{
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5rem;
    color: black;

    margin-top: 10px;
  }

  &.mine .messageContent{
    color: white;
  }

  .time{
    align-self: flex-end;

    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
  }

  &.mine .time{
    color: white;
  }
`;