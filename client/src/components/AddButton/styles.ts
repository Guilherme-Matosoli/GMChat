import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background-image: var(--gradient-background); 
  border: none;
  border-radius: 50%;

  width: 50px;
  height: 50px;

  font-size: 30px;
  font-weight: 200;
  color: white;

  cursor: pointer;
  transition: filter .3s;

  &:hover{
    filter: brightness(1.1);
  }

  img{
    transition: transform .5s;
    width: 70px;
  }

  @media(max-width: 600px){
    width: 40px;
    height: 40px;
  }
`;
