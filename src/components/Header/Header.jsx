import { ContainerHeader, ItemLink, NavList } from "./Header.styled";

const Header = () => {
  return (
    <ContainerHeader>
      <NavList>
        <li>
          <ItemLink to="/">HOME</ItemLink>
        </li>
        <li>
          <ItemLink to="/beers">BEERS</ItemLink>
        </li>
      </NavList>
    </ContainerHeader>
  );
};

export default Header;
