import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import { MainWrapper } from './hero.styles';
import homeImage from '../../assets/home.jpg';
import getInvolvedImage from '../../assets/getinvolved.jpg';
import missionImage from '../../assets/mission.jpg';
import workImage from '../../assets/work.jpg';

const Hero = () => {
    const location = useLocation();

    const setBackgroundImage = () => {
        switch (location.pathname) {
            case '/':
                return homeImage;
            case '/get-involved':
                return getInvolvedImage;
            case '/our-work':
                return workImage;
            case '/our-mission':
                return missionImage;
            default:
                return homeImage;
        }
    }

  return (
    <>
      <MainWrapper wallImage={setBackgroundImage}>
        <Header />
      </MainWrapper>
      <Outlet />
    </>
  );
};

export default Hero;
