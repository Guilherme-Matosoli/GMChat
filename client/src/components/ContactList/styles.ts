import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
      
  width: 100%;

  border-right: 1px solid black; 

  h2{
    font-family: 'Open Sans', sans-serif;
    font-size: 2.5rem;
    color: white;
  }

  .contacts{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    overflow-y: auto;
      
    max-height: 500px;
    width: 100%;
    padding: 0 20px;
  }

  .contacts::-webkit-scrollbar{
    background-color: transparent;
    width: 10px;
  }

  .contacts::-webkit-scrollbar-thumb{
    background: #FF5D00;
    border-radius: 20px;
  }

`;
