import { NavLink } from 'react-router-dom';
import { CustomDiv } from './welcome.styles';

const Welcome = () => {
  return (
    <NavLink style={{ textDecoration: 'none' }} to="/home">
      <CustomDiv className='animate__animated animate__fadeInDownBig' divcolor="#F2CFA3">Love</CustomDiv>

      <CustomDiv className='animate__animated animate__fadeInLeftBig' divcolor="#E75D56">Support</CustomDiv>

      <CustomDiv className='animate__animated animate__fadeInUpBig' divcolor="#AEE1F4">Lift Up</CustomDiv>
    </NavLink>
  );
};

export default Welcome;
