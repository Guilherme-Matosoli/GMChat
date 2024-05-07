import styled from "styled-components";

export const Container = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 50%;

  border: 5px solid white;
  border-top: 5px solid orange;

  animation: rotat .7s ease-in-out infinite;

  @keyframes rotat{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
`;