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

  .topSide{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;

    width: 100%;
    padding: 20px;

    background-color: white;
    border-radius: 15px;
  }

  .topSide.search{
    flex-direction: row-reverse;
  }

  .topSide.search h2{
    display: none;
  }

  .topSide.search button img{
    transform: rotate(45deg);
  }

  .topSide h2{
    font-family: 'Open Sans', sans-serif;
    font-size: 2.5rem;
    color: black;
  }

  .topSide input{
    flex: 1;
    height: 50px;

    background-color: #dbdbdb; 

    border: none;
    border-radius: 20px;
    outline: none;

    padding: 0 20px;
    transition: filter .5s ease;
  }

  .topSide input:focus{
    filter: brightness(0.9);
  }

  .contacts{
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: auto;
      
    width: 100%;
    height: 100%;

    background-color: white;
    border-radius: 15px;
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
