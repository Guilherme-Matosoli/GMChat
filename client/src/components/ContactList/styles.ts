import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
      
  width: 500px;
  height: 100%;

  padding-right: 20px;

  .topSide{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;

    width: 100%;
    height: 90px;
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

  .contacts .whitoutChats{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    span{
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      text-align: center;

      width: 250px;
    }
  }


  @media(max-width: 900px){
    border-right: none;

    width: 100%;
  }

  @media(max-width: 600px){
    gap: 0;
    padding: 0;

    background-color: white;
    border-radius: 20px;
    overflow: hidden;

    .topSide{
      gap: 10px;
      justify-content: space-between;

      padding: 10px;

      border-radius: 0;
      width: 100%;
      border-bottom: 1px solid #e1e1e1;
    }

    .topSide h2{
      font-size: 2rem;
    }

    .topSide input{
      height: 40px;
      width: 100%;
      border-radius: 15px;
    }
  }
`;
