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

  //   const setBackgroundImage = () => {
  //     switch (location.pathname) {
  //       case '/':
  //         return homeImage;
  //       case '/get-involved':
  //         return getInvolvedImage;
  //       case '/our-work':
  //         return workImage;
  //       case '/our-mission':
  //         return missionImage;
  //       default:
  //         return homeImage;
  //     }
  //   };

  const setHeroText = () => {
    if (location.pathname === '/') {
      setBigText('Home');
      setSmallText('Pass on the good');
      return homeImage;
    }
    if (location.pathname === '/get-involved') {
      setBigText('Get Involved');
      setSmallText('You can be part of the change');
      return getInvolvedImage;
    }
    if (location.pathname === '/our-work') {
      setBigText('Our Work');
      setSmallText('We are with you through every step');
      return workImage;
    }
    if (location.pathname === '/our-mission') {
      setBigText('Our Mission');
      setSmallText('Make the world a better place through education');
      return missionImage;
    }
  };

  return (
    <>
      {/* <MainWrapper wallImage={setBackgroundImage}> */}
      <MainWrapper wallImage={setHeroText}>
        <Header />
        <ContentWrapper>
          <h1>{bigText}</h1>
          <h5>{smallText}</h5>
        </ContentWrapper>
      </MainWrapper>
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};

export default Hero;
