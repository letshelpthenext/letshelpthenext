import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  NotFoundContainer,
  BackgroundDecoration,
  ContentWrapper,
  ErrorNumber,
  ErrorTitle,
  ErrorMessage,
  NavigationGrid,
  NavigationCard,
  CardIcon,
  CardTitle,
  CardDescription,
  PrimaryButton,
  FloatingShape,
  HelpSection,
  HelpTitle,
  HelpList,
  HelpItem,
  HelpIcon,
  HelpText,
} from './notFound.styles';

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const navigationOptions = [
    {
      icon: '🏠',
      title: 'Home',
      description: 'Return to our homepage',
      path: '/home',
    },
    {
      icon: '🤝',
      title: 'Get Involved',
      description: 'Join our community',
      path: '/home/get-involved',
    },
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'Learn about our goals',
      path: '/home/our-mission',
    },
    {
      icon: '💼',
      title: 'Our Work',
      description: 'See our impact',
      path: '/home/our-work',
    },
  ];

  const helpTips = [
    {
      icon: '🔍',
      text: 'Check the URL for typos or formatting errors',
    },
    {
      icon: '🔗',
      text: 'Use the navigation menu to find what you\'re looking for',
    },
    {
      icon: '📧',
      text: 'Contact us at letshelpthenext@gmail.com if you need assistance',
    },
    {
      icon: '🏠',
      text: 'Visit our homepage to explore all available content',
    },
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
        <title>Page Not Found | Let's Help The Next</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Explore our mission to support international students or return to our homepage."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <NotFoundContainer>
        <BackgroundDecoration />

        {/* Floating shapes for visual interest */}
        <FloatingShape
          variants={floatingVariants}
          animate="animate"
          style={{
            width: '100px',
            height: '100px',
            top: '10%',
            left: '10%',
          }}
        />
        <FloatingShape
          variants={floatingVariants}
          animate="animate"
          style={{
            width: '60px',
            height: '60px',
            top: '20%',
            right: '15%',
            animationDelay: '2s',
          }}
        />
        <FloatingShape
          variants={floatingVariants}
          animate="animate"
          style={{
            width: '80px',
            height: '80px',
            bottom: '15%',
            left: '20%',
            animationDelay: '4s',
          }}
        />

        <ContentWrapper
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ErrorNumber variants={itemVariants}>404</ErrorNumber>
          <ErrorTitle variants={itemVariants}>
            Oops! Page Not Found
          </ErrorTitle>
          <ErrorMessage variants={itemVariants}>
            We're sorry, but the page you're looking for doesn't exist or has been moved.
            Don't worry though – let's help you find what you need!
          </ErrorMessage>

          <NavigationGrid variants={itemVariants}>
            {navigationOptions.map((option, index) => (
              <NavigationCard
                key={option.path}
                to={option.path}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <CardIcon>{option.icon}</CardIcon>
                <CardTitle>{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </NavigationCard>
            ))}
          </NavigationGrid>

          <PrimaryButton
            to="/"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>🏠</span>
            Take Me Home
          </PrimaryButton>

          <HelpSection variants={itemVariants}>
            <HelpTitle>Need Help?</HelpTitle>
            <HelpList>
              {helpTips.map((tip, index) => (
                <HelpItem key={index}>
                  <HelpIcon>{tip.icon}</HelpIcon>
                  <HelpText>{tip.text}</HelpText>
                </HelpItem>
              ))}
            </HelpList>
          </HelpSection>
        </ContentWrapper>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
