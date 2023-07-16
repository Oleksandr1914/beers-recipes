import { styled } from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  padding: 0;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  z-index: 200;
`;

export const ModalCard = styled.div`
  padding: 40px;
  width: 920px;
  height: 680px;
  background-color: #c7967d;
  border-radius: 8px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: #c0927b;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e4bca7;
    border-radius: 8px;
  }
`;

export const TitleModal = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.4;
  text-align: center;
`;

export const TextModal = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
`;

export const BeerBox = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 40px;
`;

export const ImageModal = styled.img`
  width: 260px;
  height: 480px;
`;

export const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleBeerBox = styled.h3`
  position: relative;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.2;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ececec;
  }
`;

export const HopsMaltContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  padding-right: 50px;
  padding-top: 10px;
`;

export const IngredientType = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.2;
`;

export const IngredientsList = styled.ul`
  margin-top: 8px;
`;

export const IngredientsItem = styled.li`
  margin-top: 4px;
`;

export const TextBeerBox = styled.b`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
`;

export const YeastContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 18px;
`;
