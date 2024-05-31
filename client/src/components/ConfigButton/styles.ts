import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  background-color: white;
  border-radius: 50%;
  border: none;

  cursor: pointer;
  transition: filter .3s;

  &:hover{
    filter: brightness(0.9);
  }

  img{
      width: 30px;
  }
`;
