import { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
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
import { totals, formatCurrency, currentCohort, FOUNDED_YEAR } from '../../data/impact';
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
    // Every figure below comes from src/data/impact.js. Do not hardcode stats here.
    const impactStats = [
      { number: `${totals.studentsHelped}`, label: 'Students Helped' },
      { number: formatCurrency(totals.totalRaised), label: 'Awarded in Scholarships' },
      { number: `${totals.countriesRepresented}`, label: 'Countries' }
    ];

    const getHeroData = () => {
      // Student detail pages share the Our Students hero.
      const path = location.pathname.startsWith('/home/students/')
        ? '/home/students'
        : location.pathname;

      switch (path) {
        case '/home':
          return {
            title: 'You Are Not Alone',
            subtitle: 'We are with you every step of your educational journey',
            description: 'Supporting international students achieve their dreams through mentorship, scholarships, and comprehensive guidance.',
            backgroundImage: homeImage,
            mobileImage: homephone,
            badge: `🎓 A 501(c)(3) since ${FOUNDED_YEAR}`,
            stats: impactStats
          };
        case '/home/get-involved':
          return {
            title: 'Get Involved',
            subtitle: 'You can be part of the change in students\' lives',
            description: 'Join our mission to make education accessible for international students around the world.',
            backgroundImage: getInvolvedImage,
            mobileImage: getInvolvedphone,
            badge: '🤝 Join Our Community',
            stats: [
              { number: `${totals.countriesRepresented}`, label: 'Countries' },
              { number: '100%', label: 'Goes to Students' },
              { number: '100%', label: 'Volunteer Driven' }
            ]
          };
        case '/home/our-work':
          return {
            title: 'Our Work',
            subtitle: 'Making education accessible through support and mentorship',
            description: 'Discover how we\'re transforming lives through comprehensive student support programs.',
            backgroundImage: workImage,
            mobileImage: workphone,
            badge: '📚 Transforming Lives',
            stats: impactStats
          };
        case '/home/our-mission':
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
        case '/home/students':
          return {
            title: 'Meet Our Students',
            subtitle: 'Determination, resilience, and the courage to keep moving forward',
            description: 'The recipients are the reason we exist. These are their stories, in their own words.',
            backgroundImage: missionImage,
            mobileImage: missionphone,
            badge: '🌍 Their Stories',
            stats: impactStats
          };
        case '/home/apply':
          return {
            title: 'Apply for a Scholarship',
            subtitle: 'If a balance you cannot close is standing between you and next semester, talk to us',
            description: 'Need-based scholarships for international students studying in the United States. Free to apply.',
            backgroundImage: workImage,
            mobileImage: workphone,
            badge: '✍️ Applications Open',
            stats: [
              { number: `${currentCohort.studentsHelped}`, label: `Helped in ${currentCohort.year}` },
              { number: formatCurrency(currentCohort.raised), label: `Awarded in ${currentCohort.year}` },
              { number: '$0', label: 'Cost to Apply' }
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
            stats: impactStats
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
                    as={Link}
                    to="/home/get-involved"
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


export default HeroEnhanced;
