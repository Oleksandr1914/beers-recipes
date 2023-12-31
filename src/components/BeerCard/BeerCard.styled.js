import { styled } from "styled-components";

export const CardContainer = styled.li.attrs((props) => ({
  className: props.className,
}))`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 12px;
  width: 240px;
  height: 380px;
  padding: 10px 14px;
  padding-bottom: 35px;
  border-radius: 20px;
  background-color: #c7967db5;
  border: 2px solid transparent;
  &:hover {
    cursor: pointer;
  }
  &.border {
    border: 2px solid red;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
`;

export const TitleCard = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
`;

export const TextCard = styled.p`
  font-size: 16px;
  line-height: 1.2;
`;

export const AboutBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const ImageBeer = styled.img`
  width: 46px;
  height: 194px;
`;
