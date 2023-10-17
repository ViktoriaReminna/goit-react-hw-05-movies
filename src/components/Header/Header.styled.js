import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header1 = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 15px;
  border-bottom: solid 1px #1e1e1e;
  box-shadow: 0 0 13px 3px #1e1e1e;

  > nav {
    display: flex;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #ffff;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #1e1e1e;
  }
`;
