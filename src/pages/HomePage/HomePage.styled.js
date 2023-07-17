import styled from "styled-components";
import Beer from "../../assets/beer.jpg";

export const ContainerHome = styled.div`
  padding: 30px;
  padding-top: 180px;
  height: 100vh;
  background-image: linear-gradient(
      90deg,
      rgba(6, 1, 1, 0.68) 0%,
      rgba(3, 15, 20, 0.69) 100%
    ),
    url(${Beer});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.54;
`;
