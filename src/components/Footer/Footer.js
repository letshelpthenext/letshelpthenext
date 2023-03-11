import {
  MenuWrapper,
  MySignWrapper,
  FooterWrapper,
  LinkWrapper,
  EmailWrapper,
} from './footer.styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <MenuWrapper>
        <LinkWrapper className='nav-item' to='/home'>
          Home
        </LinkWrapper>
        <LinkWrapper className='nav-item' to='/home/get-involved'>
          Get Involved
        </LinkWrapper>
        <LinkWrapper className='nav-item' to='/home/our-work'>
          Our Work
        </LinkWrapper>
        <LinkWrapper className='nav-item' to='/home/our-mission'>
          Our Mission
        </LinkWrapper>
        <EmailWrapper
          className='nav-item'
          target='_blank'
          rel='noreferrer'
          href='mailto:letshelpthenext@gmail.com'
        >
          Email Us
        </EmailWrapper>
      </MenuWrapper>

      <MySignWrapper>
        LET'S HELP THE NEXT (LHTN) &copy; 2022 | Developed by Kwaku
        Appau-Nkansah
      </MySignWrapper>
    </FooterWrapper>
  );
};

export default Footer;
