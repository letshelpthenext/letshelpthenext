import { NavLink } from "react-router-dom";
import { MenuWrapper, MySignWrapper, FooterWrapper } from './footer.styles'

const Footer = () => {
    return (
      <FooterWrapper>
        <MenuWrapper>
          <NavLink className='nav-item' to="/home">Home</NavLink>
          <NavLink className='nav-item' to="/home/get-involved">Get Involved</NavLink>
          <NavLink className='nav-item' to="/home/our-work">Our Work</NavLink>
          <NavLink className='nav-item' to="/home/our-mission">Our Mission</NavLink>
          {/* <a className='nav-item' target="_blank" rel="noreferrer" href="mailto:email@example.com">
            Email
          </a> */}
        </MenuWrapper>
  
        <MySignWrapper>HELP THE NEXT (HTN) &copy; 2022 | Developed by Kwaku Appau-Nkansah</MySignWrapper>
      </FooterWrapper>
    );
  };
  

export default Footer