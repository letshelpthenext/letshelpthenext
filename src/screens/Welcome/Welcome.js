
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  BackgroundDecoration,
  WelcomeContainer,
  WelcomeHeader,
  LogoContainer,
  WelcomeLogo,
  WelcomeTitle,
  WelcomeSubtitle,
  ValuesGrid,
  ValueCard,
  CardImageContainer,
  CardContent,
  ValueTitle,
  ValueQuote,
  ActionButton,
  StyledNavLink,
  CardIcon,
  CustomDiv
} from './welcome.styles';
import { motion } from 'framer-motion';
import loveImage from '../../assets/home.jpg';
import supportImage from '../../assets/support.jpeg';
import liftImage from '../../assets/getinvolved.jpg';
import logo from '../../assets/whiteLogo.png';

const Welcome = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const values = [
    {
      title: 'Love',
      quote: 'Love embraces all, regardless of ability or stature.',
      icon: '💖',
      image: loveImage,
      overlayColor:
        'linear-gradient(135deg, rgba(239, 68, 68, 0.8) 0%, rgba(220, 38, 38, 0.9) 100%)',
      link: '/home/our-mission',
      action: 'Discover Our Mission',
    },
    {
      title: 'Support',
      quote: 'Empower the potential in everyone, for greatness lies in unexpected places.',
      icon: '🤝',
      image: supportImage,
      overlayColor:
        'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(37, 99, 235, 0.9) 100%)',
      link: '/home/get-involved',
      action: 'Get Involved',
    },
    {
      title: 'Lift Up',
      quote: 'Lift others up, for in their rise, we elevate humanity.',
      icon: '🚀',
      image: liftImage,
      overlayColor:
        'linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.9) 100%)',
      link: '/home/our-work',
      action: 'See Our Impact',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Welcome | Let's Help The Next</title>
        <meta
          name="description"
          content="Welcome to Let's Help The Next - a nonprofit organization dedicated to supporting international students through financial assistance, mentorship, and educational opportunities."
        />
        <meta
          name="keywords"
          content="nonprofit, international students, education, scholarships, support, love, community"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Let's Help The Next - Welcome" />
        <meta
          property="og:description"
          content="Supporting international students through love, support, and lifting them up in their educational journey."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Let's Help The Next - Welcome" />
        <meta
          property="twitter:description"
          content="Supporting international students through love, support, and lifting them up in their educational journey."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: "Let's Help The Next",
            alternateName: 'LHTN',
            description:
              'A nonprofit organization providing financial assistance and scholarships to international students studying in the U.S.',
            url: typeof window !== 'undefined' ? window.location.origin : '',
            logo: typeof window !== 'undefined' ? `${window.location.origin}/logo512.png` : '',
            foundingDate: '2020',
            areaServed: 'United States',
            mission:
              'To support international students through mentorship, financial aid, and educational guidance',
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'letshelpthenext@gmail.com',
              contactType: 'General Inquiry',
            },
          })}
        </script>
      </Helmet>

      <WelcomeContainer>
        <BackgroundDecoration />

        <WelcomeHeader>
          <LogoContainer
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <WelcomeLogo src={logo} alt="Let's Help The Next" />
          </LogoContainer>

          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <WelcomeTitle variants={itemVariants}>Welcome to Let's Help The Next</WelcomeTitle>

            <WelcomeSubtitle variants={itemVariants}>
              Empowering international students through love, support, and community. Choose your
              path to make a difference.
            </WelcomeSubtitle>
          </motion.div>
        </WelcomeHeader>

        <ValuesGrid variants={containerVariants} initial="hidden" animate="visible">
          {values.map((value, index) => (
            <StyledNavLink
              key={value.title}
              to={value.link}
              aria-label={`${value.action} - ${value.quote}`}
            >
              <ValueCard variants={cardVariants} whileHover={{ y: -8 }}>
                <CardImageContainer backgroundImage={value.image} overlayColor={value.overlayColor}>
                  {/* <CardIcon>{value.icon}</CardIcon> */}
                </CardImageContainer>

                <CardContent>
                  <div>
                    <ValueTitle>{value.title}</ValueTitle>
                    <ValueQuote>"{value.quote}"</ValueQuote>
                  </div>
                  <ActionButton>{value.action}</ActionButton>
                </CardContent>
              </ValueCard>
            </StyledNavLink>
          ))}
        </ValuesGrid>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
