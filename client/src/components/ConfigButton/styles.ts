import styled from "styled-components";

export const Container = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
  border-radius: 50%;
  border: none;

  img{
    background-color: white;
    border-radius: 50%;

    width: 40px;
    cursor: pointer;
    transition: filter .3s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;


export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;

  width: 200px;
  height: auto;

  background: white;
  border-radius: 20px;

  box-shadow: 0px 0px 5px black;
  overflow: hidden;
`;
