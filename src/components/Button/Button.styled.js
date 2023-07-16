import { styled } from "styled-components";

export const ButtonDete = styled.button`
  position: absolute;
  top: 20px;
  right: 60px;
  padding-left: 38px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: #e2e8f0;
  background-color: #ff000099;
  &:hover,
  :focus {
    border-color: #ff2a2a;
  }

  img {
    position: absolute;
    top: 0.6em;
    left: 12px;
    width: 16px;
  }
`;
