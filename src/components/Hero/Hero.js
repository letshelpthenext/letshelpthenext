import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import { MainWrapper, ContentWrapper } from './hero.styles';
import homeImage from '../../assets/home.jpg';
import getInvolvedImage from '../../assets/getinvolved.jpg';
import missionImage from '../../assets/mission.jpg';
import workImage from '../../assets/work.jpg';
import homephone from '../../assets/homephone.jpg';
import getInvolvedphone from '../../assets/getinvolvedphone.jpg';
import missionphone from '../../assets/missionphone.jpg';
import workphone from '../../assets/workphone.jpg';

const Hero = () => {
  const location = useLocation();
  const [bigText, setBigText] = useState('');
  const [smallText, setSmallText] = useState('');

  const setHeroText = () => {
    if (location.pathname === '/home') {
      setBigText('You Are Not Alone');
      setSmallText('We are with you every step');
      return homeImage;
    }
    if (location.pathname === '/home/get-involved') {
      setBigText('Get Involved');
      setSmallText('You can be part of the change');
      return getInvolvedImage;
    }
    if (location.pathname === '/home/our-work') {
      setBigText('Our Work');
      setSmallText('We are with you through every step');
      return workImage;
    }
    if (location.pathname === '/home/our-mission') {
      setBigText('Our Mission');
      setSmallText('Better world through education');
      return missionImage;
    }
  };

  const setHeroTextPhone = () => {
    if (location.pathname === '/home') {
      setBigText('You Are Not Alone');
      setSmallText('We are with you every step');
      return homephone;
    }
    if (location.pathname === '/home/get-involved') {
      setBigText('Get Involved');
      setSmallText('You can be part of the change');
      return getInvolvedphone;
    }
    if (location.pathname === '/home/our-work') {
      setBigText('Our Work');
      setSmallText('We are with you through every step');
      return workphone;
    }
    if (location.pathname === '/home/our-mission') {
      setBigText('Our Mission');
      setSmallText('Better world through education');
      return missionphone;
    }
  };

  return (
    <>
      <MainWrapper wallImage={setHeroText} phoneImage={setHeroTextPhone}>
        <Header />
        <ContentWrapper>
          <h1 className="animate__animated animate__fadeInLeftBig">
            {bigText}
          </h1>
          <h5 className="animate__animated animate__fadeInRightBig">
            {smallText}
          </h5>
          {/* <a href='#newsLetter' className='btn btn-primary'>Newsletter</a> */}
        </ContentWrapper>
      </MainWrapper>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Hero;
