import styled from "styled-components";

export const BeersPageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  width: 100%;
  height: calc(100vh - 100px);
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: #c7967d33;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ad846f99;
    border-radius: 8px;
  }
`;

export const BeersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
  width: 1400px;
  padding-bottom: 80px;
`;
