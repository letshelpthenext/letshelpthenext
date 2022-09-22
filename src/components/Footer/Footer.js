import { NavLink } from "react-router-dom";
import { MenuWrapper, PhoneNumberWrapper, MySignWrapper, FooterWrapper } from './footer.styles'

const Footer = () => {
    return (
      <FooterWrapper className="bg-success">
        <MenuWrapper>
          <NavLink className='nav-item' to="/">Home</NavLink>
          <NavLink className='nav-item' to="/get-involved">Get Involved</NavLink>
          <NavLink className='nav-item' to="/our-work">Our Work</NavLink>
          <NavLink className='nav-item' to="/our-mission">Our Mission</NavLink>
          <a className='nav-item' target="_blank" rel="noreferrer" href="mailto:email@example.com">
            Email
          </a>
        </MenuWrapper>
        <PhoneNumberWrapper>
        <a target="_blank" rel="noreferrer" href="tel:1‪(000)000-0000‬">Call: ‪(000)000-0000‬</a> | <a target="_blank" rel="noreferrer" href="sms:1‪(000)000-0000‬">Text: ‪(000)000-0000‬</a>
        </PhoneNumberWrapper>
  
        <MySignWrapper>HELP THE NEXT (HTN) &copy; 2022 | Developed by Kwaku Appau-Nkansah</MySignWrapper>
      </FooterWrapper>
    );
  };
  

export default Footer