import { FooterStyles, Icon } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyles>
      <div>
        <p>Israel 2023-2024 | Powered by</p>
        <a
          href="https://github.com/khalilda"
          target="_blank"
          rel="noreferrer"
          aria-label="link to github profile"
        >
          <Icon />
        </a>
      </div>
    </FooterStyles>
  );
};

export default Footer;
