import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  position: relative;

  width: 400px;
  height: auto;

  padding: 10px 20px;

  background-color: white;
  border-radius: 20px 20px 20px 0px;

  &.mine{
    align-self: flex-end;

    border-radius: 20px 20px 0px 20px;
  }

  &.mine::after{
    content: '';

    position: absolute;
    left: 100%;
    bottom: 0;

    border-top: 10px solid transparent;
    border-left: 10px solid white;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white; 
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

  .messageContent{
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5rem;
    color: black;
  }
`;