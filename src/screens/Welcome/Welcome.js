import { NavLink } from 'react-router-dom';
import { CustomDiv } from './welcome.styles';

const Welcome = () => {
  return (
    <NavLink style={{ textDecoration: 'none' }} to="/home">
      <CustomDiv divcolor="#F2CFA3">Love</CustomDiv>

      <CustomDiv divcolor="#E75D56">Support</CustomDiv>

      <CustomDiv divcolor="#AEE1F4">Lift Up</CustomDiv>
    </NavLink>
  );
};

export default Welcome;
