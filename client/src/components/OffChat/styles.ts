import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;

  flex: 1;
  width: 100%;
  height: 100%;

  background-color: white;
  border-radius: 20px;
  
  img{
    width: 300px;

    filter: invert();
  }

  span{
    font-family: 'Montserrat', sans-srif;
    font-size: 20px;
    font-weight: 500;
  }
`;
