import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  h1{
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    color: white;
  }

  .buttons-wrapper{
    display: flex;
    gap: 10px;
  }
`;