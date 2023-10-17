import { useTheme } from '@emotion/react';

import { Container } from 'components/App/App.styled';

import { Outlet } from 'react-router-dom';

import { routes } from 'routes';
import {
  LayoutWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';

export const Layout = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container>
          <LayoutWrapper>
            <LinkWrapper>
              <NavLinkStyled to={routes.HOME}>Home</NavLinkStyled>
              <NavLinkStyled to={routes.COUNTRY}>Countries</NavLinkStyled>
            </LinkWrapper>
          </LayoutWrapper>
        </Container>
      </NavBar>

      <Outlet />
    </>
  );
};
