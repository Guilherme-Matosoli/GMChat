import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
      
  width: 500px;
  height: 100%;

  border-right: 1px solid white; 
  padding-right: 20px;

  h2{
    font-family: 'Open Sans', sans-serif;
    font-size: 2.5rem;
    color: white;
  }

  .contacts{
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: auto;
      
    width: 100%;

    background-color: white;
    border-radius: 10px;
  }

  .contacts::-webkit-scrollbar{
    background-color: transparent;
    width: 10px;
  }

  .contacts::-webkit-scrollbar-thumb{
    background: #FF5D00;
    border-radius: 20px;
  }


  @media(max-width: 900px){
    border-right: none;
  }

`;
