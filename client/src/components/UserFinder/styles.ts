import styled from "styled-components";


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;

  h2{
    font-family: 'Open Sans', sans-serif;
    font-size: 2.5rem;
    color: white;
  }

  .searchArea{
    width: 100%;

    padding: 0 20px;
  }

  .result{
    padding: 10px 0;

    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 100%;
    max-height: 500px;
  }

  .result::-webkit-scrollbar{
    background-color: transparent;
    width: 10px;
  }

  .result::-webkit-scrollbar-thumb{
    background: #FF5D00;
    border-radius: 20px;
  }

`;
