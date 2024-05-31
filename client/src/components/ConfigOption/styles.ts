import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 40px;

  border: none;
  border-bottom: 1px solid #e1e1e1;
  background-color: white;

  cursor: pointer;
  transition: filter .3s;
  &:hover{
    filter: brightness(0.9);
  }
`;
