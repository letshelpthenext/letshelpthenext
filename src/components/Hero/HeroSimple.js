import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from '../Header/Header';
import { colors, spacing, typography, breakpoints, shadows, borderRadius } from '../../styles/tokens';
import homeImage from '../../assets/home.jpg';
import getInvolvedImage from '../../assets/getinvolved.jpg';
import missionImage from '../../assets/mission.jpg';
import workImage from '../../assets/work.jpg';
import homephone from '../../assets/homephone.jpg';
import getInvolvedphone from '../../assets/getinvolvedphone.jpg';
import missionphone from '../../assets/missionphone.jpg';
import workphone from '../../assets/workphone.jpg';
import logo from '../../assets/whiteLogo.png';

const HeroSimple = () => {
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
            description: 'Supporting international students achieve their dreams through mentorship, scholarships, and comprehensive guidance.',
            backgroundImage: homeImage,
            mobileImage: homephone,
            badge: '🎓 Empowering Students Since 2020'
          };
        case '/home/get-involved':
        case '/get-involved':
          return {
            title: 'Get Involved',
            subtitle: 'You can be part of the change in students\' lives',
            description: 'Join our mission to make education accessible for international students around the world.',
            backgroundImage: getInvolvedImage,
            mobileImage: getInvolvedphone,
            badge: '🤝 Join Our Community'
          };
        case '/home/our-work':
        case '/our-work':
          return {
            title: 'Our Work',
            subtitle: 'Making education accessible through support and mentorship',
            description: 'Discover how we\'re transforming lives through comprehensive student support programs.',
            backgroundImage: workImage,
            mobileImage: workphone,
            badge: '📚 Transforming Lives'
          };
        case '/home/our-mission':
        case '/our-mission':
          return {
            title: 'Our Mission',
            subtitle: 'Creating a better world through education and opportunity',
            description: 'Learn about our commitment to supporting vibrant individuals achieve their educational dreams.',
            backgroundImage: missionImage,
            mobileImage: missionphone,
            badge: '🌟 Our Purpose'
          };
        default:
          return {
            title: 'Let\'s Help The Next',
            subtitle: 'Supporting international students in their educational journey',
            description: 'Empowering dreams through education, mentorship, and community support.',
            backgroundImage: homeImage,
            mobileImage: homephone,
            badge: '🎯 Making Dreams Reality'
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                >
                  <ButtonIcon>💖</ButtonIcon>
                  Donate Now
                </PrimaryButton>
                <SecondaryButton
                  href="/get-involved"
                  aria-label="Learn more about volunteering opportunities"
                >
                  <ButtonIcon>🤝</ButtonIcon>
                  Get Involved
                </SecondaryButton>
              </HeroActions>
            )}

            <QuickStats variants={itemVariants}>
              <StatItem>
                <StatNumber>20+</StatNumber>
                <StatLabel>Students Helped</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>$8,985</StatNumber>
                <StatLabel>Donated in 2024</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>100%</StatNumber>
                <StatLabel>Success Rate</StatLabel>
              </StatItem>
            </QuickStats>
          </HeroTextContainer>
        </HeroContent>

        <ScrollIndicator
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1
          }}
        >
          ↓
        </ScrollIndicator>
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
  overflow: hidden;

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
    rgba(31, 155, 207, 0.8) 0%,
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
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 10;

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]} ${spacing[4]};
  }
`;

const LogoContainer = styled(motion.div)`
  margin-bottom: ${spacing[6]};
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: ${spacing[4]};
  }
`;

const HeroLogo = styled.img`
  height: 80px;
  width: auto;

  @media (max-width: ${breakpoints.md}) {
    height: 60px;
  }
`;

const HeroTextContainer = styled(motion.div)`
  z-index: 10;
`;

const HeroBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${borderRadius.full};
  padding: ${spacing[2]} ${spacing[4]};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeightMedium};
  margin-bottom: ${spacing[6]};
  box-shadow: ${shadows.lg};

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: ${spacing[4]};
    font-size: ${typography.fontSize.xs};
    padding: ${spacing[1]} ${spacing[3]};
  }
`;

const HeroTitle = styled(motion.h1)`
  font-family: ${typography.fontSecondary};
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: ${typography.fontWeightBold};
  line-height: ${typography.lineHeight.tight};
  margin-bottom: ${spacing[6]};
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: ${spacing[4]};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.25rem, 4vw, 1.75rem);
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
  font-size: clamp(1rem, 3vw, 1.25rem);
  font-weight: ${typography.fontWeightNormal};
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing[8]};
  opacity: 0.9;
  max-width: 600px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: ${spacing[6]};
  }
`;

const HeroActions = styled(motion.div)`
  display: flex;
  gap: ${spacing[4]};
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${spacing[8]};

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: ${spacing[3]};
    margin-bottom: ${spacing[6]};
  }
`;

const ButtonIcon = styled.span`
  margin-right: ${spacing[2]};
  font-size: 1.2em;
`;

const PrimaryButton = styled.a`
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
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border: 2px solid transparent;
  min-width: 200px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
    color: ${colors.white};
    text-decoration: none;
  }

  &:focus {
    outline: 2px solid ${colors.white};
    outline-offset: 2px;
  }

  @media (max-width: ${breakpoints.sm}) {
    min-width: 250px;
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: ${colors.white};
  padding: ${spacing[4]} ${spacing[8]};
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: ${borderRadius.full};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightSemiBold};
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 200px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
    text-decoration: none;
  }

  &:focus {
    outline: 2px solid ${colors.white};
    outline-offset: 2px;
  }

  @media (max-width: ${breakpoints.sm}) {
    min-width: 250px;
  }
`;

const QuickStats = styled(motion.div)`
  display: flex;
  gap: ${spacing[6]};
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.sm}) {
    gap: ${spacing[4]};
  }
`;

const StatItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${borderRadius.lg};
  padding: ${spacing[3]} ${spacing[4]};
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  min-width: 120px;

  @media (max-width: ${breakpoints.sm}) {
    min-width: 100px;
    padding: ${spacing[2]} ${spacing[3]};
  }
`;

const StatNumber = styled.div`
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[1]};
  color: ${colors.white};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

const StatLabel = styled.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  font-weight: ${typography.fontWeightMedium};
  color: ${colors.white};
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${spacing[8]};
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: ${colors.white};
  opacity: 0.7;
  cursor: pointer;

  @media (max-width: ${breakpoints.md}) {
    bottom: ${spacing[6]};
  }
`;

const MainContent = styled.div`
  background: ${colors.white};
  margin-top: -${spacing[8]};
  border-radius: ${borderRadius['2xl']} ${borderRadius['2xl']} 0 0;
  position: relative;
  z-index: 5;
  box-shadow: ${shadows.xl};
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default HeroSimple;
