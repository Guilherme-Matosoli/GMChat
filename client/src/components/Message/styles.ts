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