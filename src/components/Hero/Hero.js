import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import { MainWrapper, ContentWrapper } from './hero.styles';
import homeImage from '../../assets/home.jpg';
import getInvolvedImage from '../../assets/getinvolved.jpg';
import missionImage from '../../assets/mission.jpg';
import workImage from '../../assets/work.jpg';

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

  return (
    <>
      <MainWrapper wallImage={setHeroText}>
        <Header />
        <ContentWrapper>
          <h1 className='animate__animated animate__fadeInLeftBig'>{bigText}</h1>
          <h5 className='animate__animated animate__fadeInRightBig'>{smallText}</h5>
        </ContentWrapper>
      </MainWrapper>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Hero;
