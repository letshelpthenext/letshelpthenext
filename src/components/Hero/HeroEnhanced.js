import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  HeroContainer,
  BackgroundOverlay,
  ParticleEffect,
  HeroContent,
  HeroMain,
  LogoContainer,
  HeroLogo,
  HeroTextContainer,
  HeroBadge,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroActions,
  PrimaryButton,
  SecondaryButton,
  ButtonIcon,
  StatsContainer,
  StatsGrid,
  StatCard,
  StatNumber,
  StatLabel,
  ScrollIndicator,
  ScrollIcon,
  ScrollText,
  MainContent,
  containerVariants,
  itemVariants,
  statsVariants,
  statItemVariants
} from './hero.styles';
import Header from '../Header/Header';
import homeImage from '../../assets/home.jpg';
import getInvolvedImage from '../../assets/getinvolved.jpg';
import missionImage from '../../assets/mission.jpg';
import workImage from '../../assets/work.jpg';
import homephone from '../../assets/homephone.jpg';
import getInvolvedphone from '../../assets/getinvolvedphone.jpg';
import missionphone from '../../assets/missionphone.jpg';
import workphone from '../../assets/workphone.jpg';
import logo from '../../assets/whiteLogo.png';

const HeroEnhanced = () => {
  const location = useLocation();
  const [heroData, setHeroData] = useState({
    title: '',
    subtitle: '',
    description: '',
    backgroundImage: '',
    mobileImage: '',
    badge: '',
    stats: []
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
            badge: '🎓 Empowering Students Since 2020',
            stats: [
              { number: '20+', label: 'Students Helped' },
              { number: '$8,985', label: 'Donated in 2024' },
              { number: '100%', label: 'Visa Success Rate' }
            ]
          };
        case '/home/get-involved':
        case '/get-involved':
          return {
            title: 'Get Involved',
            subtitle: 'You can be part of the change in students\' lives',
            description: 'Join our mission to make education accessible for international students around the world.',
            backgroundImage: getInvolvedImage,
            mobileImage: getInvolvedphone,
            badge: '🤝 Join Our Community',
            stats: [
              { number: '5+', label: 'Countries' },
              { number: '24/7', label: 'Support' },
              { number: '100%', label: 'Volunteer Driven' }
            ]
          };
        case '/home/our-work':
        case '/our-work':
          return {
            title: 'Our Work',
            subtitle: 'Making education accessible through support and mentorship',
            description: 'Discover how we\'re transforming lives through comprehensive student support programs.',
            backgroundImage: workImage,
            mobileImage: workphone,
            badge: '📚 Transforming Lives',
            stats: [
              { number: '3+', label: 'Years Experience' },
              { number: '20+', label: 'Success Stories' },
              { number: '5+', label: 'Programs' }
            ]
          };
        case '/home/our-mission':
        case '/our-mission':
          return {
            title: 'Our Mission',
            subtitle: 'Creating a better world through education and opportunity',
            description: 'Learn about our commitment to supporting vibrant individuals achieve their educational dreams.',
            backgroundImage: missionImage,
            mobileImage: missionphone,
            badge: '🌟 Our Purpose',
            stats: [
              { number: '100%', label: 'Nonprofit' },
              { number: '0%', label: 'Admin Fees' },
              { number: '∞', label: 'Impact' }
            ]
          };
        default:
          return {
            title: 'Let\'s Help The Next',
            subtitle: 'Supporting international students in their educational journey',
            description: 'Empowering dreams through education, mentorship, and community support.',
            backgroundImage: homeImage,
            mobileImage: homephone,
            badge: '🎯 Making Dreams Reality',
            stats: [
              { number: '20+', label: 'Students' },
              { number: '$8,985', label: 'Raised' },
              { number: '5+', label: 'Countries' }
            ]
          };
      }
    };

    setHeroData(getHeroData());
  }, [location.pathname]);

  const showActions = location.pathname === '/home' || location.pathname === '/';
  const showStats = heroData.stats && heroData.stats.length > 0;

  return (
    <>
      <HeroContainer
        backgroundImage={heroData.backgroundImage}
        mobileImage={heroData.mobileImage}
      >
        <BackgroundOverlay />
        <ParticleEffect />

        <Header />

        <HeroContent>
          <HeroMain>
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
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ButtonIcon>💖</ButtonIcon>
                    Donate Now
                  </PrimaryButton>
                  <SecondaryButton
                    href="/get-involved"
                    aria-label="Learn more about volunteering opportunities"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ButtonIcon>🤝</ButtonIcon>
                    Get Involved
                  </SecondaryButton>
                </HeroActions>
              )}
            </HeroTextContainer>
          </HeroMain>

          {showStats && (
            <StatsContainer
              variants={statsVariants}
              initial="hidden"
              animate="visible"
            >
              <StatsGrid>
                {heroData.stats.map((stat, index) => (
                  <StatCard
                    key={index}
                    variants={statItemVariants}
                    custom={index}
                  >
                    <StatNumber>{stat.number}</StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatCard>
                ))}
              </StatsGrid>
            </StatsContainer>
          )}
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
          <ScrollIcon>↓</ScrollIcon>
          <ScrollText>Scroll to explore</ScrollText>
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


export default HeroEnhanced;
