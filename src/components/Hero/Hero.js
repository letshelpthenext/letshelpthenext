import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from '../Header/Header';
import { colors, spacing, typography, breakpoints, borderRadius } from '../../styles/tokens';
import homeImage from '../../assets/home.jpg';
import getInvolvedImage from '../../assets/getinvolved.jpg';
import missionImage from '../../assets/mission.jpg';
import workImage from '../../assets/work.jpg';
import homephone from '../../assets/homephone.jpg';
import getInvolvedphone from '../../assets/getinvolvedphone.jpg';
import missionphone from '../../assets/missionphone.jpg';
import workphone from '../../assets/workphone.jpg';
import logo from '../../assets/whiteLogo.png';

const Hero = () => {
  const location = useLocation();
  const [heroData, setHeroData] = useState({
    title: '',
    subtitle: '',
    description: '',
    backgroundImage: '',
    mobileImage: '',
    badge: ''
  });

  useEffect(() => {
    const getHeroData = () => {
      switch (location.pathname) {
        case '/home':
          return {
            title: 'You Are Not Alone',
            subtitle: 'We are with you every step of your educational journey',
            description: 'Supporting international students achieve their dreams through mentorship and comprehensive guidance.',
            backgroundImage: homeImage,
            mobileImage: homephone,
            badge: 'Empowering Students Since 2020'
          };
        case '/home/get-involved':
        case '/get-involved':
          return {
            title: 'Get Involved',
            subtitle: 'You can be part of the change in students\' lives',
            description: 'Join our mission to make education accessible for international students around the world.',
            backgroundImage: getInvolvedImage,
            mobileImage: getInvolvedphone,
            badge: 'Join Our Community'
          };
        case '/home/our-work':
        case '/our-work':
          return {
            title: 'Our Work',
            subtitle: 'Making education accessible through support and mentorship',
            description: 'Discover how we\'re transforming lives through comprehensive student support programs.',
            backgroundImage: workImage,
            mobileImage: workphone,
            badge: 'Transforming Lives'
          };
        case '/home/our-mission':
        case '/our-mission':
          return {
            title: 'Our Mission',
            subtitle: 'Creating a better world through education and opportunity',
            description: 'Learn about our commitment to supporting vibrant individuals achieve their educational dreams.',
            backgroundImage: missionImage,
            mobileImage: missionphone,
            badge: 'Our Purpose'
          };
        default:
          return {
            title: 'Let\'s Help The Next',
            subtitle: 'Supporting international students in their educational journey',
            description: 'Empowering dreams through education, mentorship, and community support.',
            backgroundImage: homeImage,
            mobileImage: homephone,
            badge: 'Making Dreams Reality'
          };
      }
    };

    setHeroData(getHeroData());
  }, [location.pathname]);

  const showActions = location.pathname === '/home' || location.pathname === '/';

  return (
    <>
      <HeroContainer
        backgroundImage={heroData.backgroundImage}
        mobileImage={heroData.mobileImage}
      >
        <BackgroundOverlay />
        <Header />

        <HeroContent>
          <LogoContainer
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroLogo src={logo} alt="Let's Help The Next" />
          </LogoContainer>

          <HeroTextContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {heroData.badge && (
              <HeroBadge variants={itemVariants}>
                {heroData.badge}
              </HeroBadge>
            )}

            <HeroTitle
              variants={itemVariants}
              role="banner"
            >
              {heroData.title}
            </HeroTitle>

            <HeroSubtitle variants={itemVariants}>
              {heroData.subtitle}
            </HeroSubtitle>

            {heroData.description && (
              <HeroDescription variants={itemVariants}>
                {heroData.description}
              </HeroDescription>
            )}

            {showActions && (
              <HeroActions variants={itemVariants}>
                <PrimaryButton
                  href="https://www.zeffy.com/en-US/donation-form/868e9c58-5d07-41f6-8daf-ca648cc9dc8a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Make a donation to support international students"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Donate Now
                </PrimaryButton>
                <SecondaryButton
                  href="/get-involved"
                  aria-label="Learn more about volunteering opportunities"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Involved
                </SecondaryButton>
              </HeroActions>
            )}
          </HeroTextContainer>
        </HeroContent>
      </HeroContainer>

      <MainContent>
        <div className="container">
          <Outlet />
        </div>
      </MainContent>
    </>
  );
};

// Styled Components
const HeroContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: ${colors.white};

  @media (max-width: ${breakpoints.md}) {
    background-image: ${props => `url(${props.mobileImage})`};
    background-attachment: scroll;
  }
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(31, 155, 207, 0.75) 0%,
    rgba(26, 123, 160, 0.85) 50%,
    rgba(21, 94, 117, 0.9) 100%
  );
  z-index: 1;
`;

const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${spacing[8]} ${spacing[4]};
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 10;

  @media (max-width: ${breakpoints.lg}) {
    max-width: 700px;
    padding: ${spacing[7]} ${spacing[4]};
  }

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]} ${spacing[4]};
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: ${spacing[4]} ${spacing[3]};
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${spacing[3]} ${spacing[2]};
  }
`;

const LogoContainer = styled(motion.div)`
  margin-bottom: ${spacing[6]};
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: ${spacing[4]};
  }
`;

const HeroLogo = styled.img`
  height: 70px;
  width: auto;

  @media (max-width: ${breakpoints.md}) {
    height: 55px;
  }
`;

const HeroTextContainer = styled(motion.div)`
  z-index: 10;
`;

const HeroBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: ${borderRadius.full};
  padding: ${spacing[2]} ${spacing[5]};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeightMedium};
  margin-bottom: ${spacing[6]};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: ${spacing[4]};
    font-size: ${typography.fontSize.xs};
    padding: ${spacing[2]} ${spacing[4]};
  }
`;

const HeroTitle = styled(motion.h1)`
  font-family: ${typography.fontSecondary};
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  font-weight: ${typography.fontWeightBold};
  line-height: ${typography.lineHeight.tight};
  margin-bottom: ${spacing[5]};
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: ${spacing[4]};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 4vw, 1.6rem);
  font-weight: ${typography.fontWeightMedium};
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing[4]};
  opacity: 0.95;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: ${spacing[3]};
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: ${typography.fontWeightNormal};
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing[8]};
  opacity: 0.88;
  max-width: 550px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: ${spacing[6]};
  }
`;

const HeroActions = styled(motion.div)`
  display: flex;
  gap: ${spacing[4]};
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.lg}) {
    gap: ${spacing[3]};
  }

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: ${spacing[3]};
  }

  @media (max-width: ${breakpoints.xs}) {
    gap: ${spacing[2]};
  }
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${colors.success} 0%, #059669 100%);
  color: ${colors.white};
  padding: ${spacing[4]} ${spacing[8]};
  border-radius: ${borderRadius.full};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightSemiBold};
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  border: 2px solid transparent;
  min-width: 180px;

  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
    color: ${colors.white};
    text-decoration: none;
  }

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.6);
    outline-offset: 2px;
  }

  @media (max-width: ${breakpoints.sm}) {
    min-width: 220px;
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  color: ${colors.white};
  padding: ${spacing[4]} ${spacing[8]};
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  border-radius: ${borderRadius.full};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightSemiBold};
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 180px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
    text-decoration: none;
  }

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.6);
    outline-offset: 2px;
  }

  @media (max-width: ${breakpoints.sm}) {
    min-width: 220px;
  }
`;

const MainContent = styled.div`
  background: ${colors.white};
  margin-top: -${spacing[6]};
  border-radius: ${borderRadius['2xl']} ${borderRadius['2xl']} 0 0;
  position: relative;
  z-index: 5;
  box-shadow: 0 -4px 25px rgba(0, 0, 0, 0.1);
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default Hero;
