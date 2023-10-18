import { Header1, NavLinkStyled } from './Header.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const Header = () => {
  return (
    <Header1>
      <nav>
        {navItems.map((item, index) => (
          <NavLinkStyled key={index} to={item.href}>
            {item.text}
          </NavLinkStyled>
        ))}
      </nav>
    </Header1>
  );
};

