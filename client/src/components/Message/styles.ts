import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  width: 400px;
  height: 100px;

  background-color: red;
  border-radius: 20px 20px 20px 0px;

  &::before{
    content: '';

    position: absolute;
    right: 100%;
    bottom: 0;

    border-top: 10px solid transparent;
    border-right: 10px solid red; 
    border-bottom: 10px solid red; 
    border-left: 10px solid transparent; 
  }
`;