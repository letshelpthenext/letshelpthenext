import { NavLink } from 'react-router-dom';
import { CustomDiv } from './welcome.styles';
import loveImage from '../../assets/home.jpg';
import supportImage from '../../assets/support.jpeg';
import liftImage from '../../assets/getinvolved.jpg';

const Welcome = () => {
  return (
    <>
      <NavLink style={{ textDecoration: 'none' }} to='/home'>
        <CustomDiv
          className='animate__animated animate__fadeInDownBig'
          overlayColor='#F2CFA3'
          textColor='#AEE1F4'
          backgroundImage={loveImage}
        >
          <div>
          Love
          </div>
          <p>"Love embraces all, regardless of ability or stature."</p>
        </CustomDiv>
      </NavLink>
      <NavLink style={{ textDecoration: 'none' }} to='/home/get-involved'>
        <CustomDiv
          className='animate__animated animate__fadeInLeftBig'
          overlayColor='#E75D56'
          textColor='#F2CFA3'
          backgroundImage={supportImage}
        >
          <div>
          Support
          </div>
          <p>"Empower the potential in everyone, for greatness lies in unexpected places."</p>
        </CustomDiv>
      </NavLink>
      <NavLink style={{ textDecoration: 'none' }} to='/home/our-work'>
        <CustomDiv
          className='animate__animated animate__fadeInUpBig'
          overlayColor='#AEE1F4'
          textColor='#E75D56'
          backgroundImage={liftImage}
        >
          <div>
          Lift Up
          </div>
          <p>"Lift others up, for in their rise, we elevate humanity."</p>
        </CustomDiv>
      </NavLink>
    </>
  );
};

export default Welcome;
