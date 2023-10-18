// import { Header1, NavLinkStyled } from './Header.styled';

// const navItems = [
//   { href: '/', text: 'Home' },
//   { href: '/movies', text: 'Movies' },
// ];

// export const Header = () => {
//   return (
//     <Header1>
//       <nav>
//         {navItems.map((item, index) => (
//           <NavLinkStyled key={index} to={item.href}>
//             {item.text}
//           </NavLinkStyled>
//         ))}
//       </nav>
//     </Header1>
//   );
// };

import { Header1 } from './Header.styled';
import { Link } from 'react-router-dom';

const navItems = [
  { to: '/', text: 'Home' },
  { to: '/movies', text: 'Movies' },
];

export const Header = () => {
  return (
    <Header1>
      <nav>
        {navItems.map((item, index) => (
          <Link key={index} to={item.to}>
            {item.text}
          </Link>
        ))}
      </nav>
    </Header1>
  );
};
