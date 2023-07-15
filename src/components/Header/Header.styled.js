import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContainerHeader = styled.div`
  width: 100%;
  padding: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 40px;
`;

export const ItemLink = styled(NavLink)`
  font-size: 28px;
  color: #e2e8f0;
  &.active {
    color: #ddb29b;
  }
  &.active::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background-color: #ddb29b;
  }
  &:hover {
    color: #ff7521;
    cursor: pointer;
  }
  &:focus {
    color: #ff7521;
  }
  &:hover::after {
    background-color: #ff7521;
  }
  &:focus ::after {
    background-color: #ff7521;
  }
`;
