import styled from "styled-components";
import Beer from "../../assets/beer.jpg";

export const BeersPageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  padding-top: 120px;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      90deg,
      rgba(6, 1, 1, 0.68) 0%,
      rgba(3, 15, 20, 0.69) 100%
    ),
    url(${Beer});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const BeersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
  width: 1400px;
  padding-bottom: 80px;
`;
