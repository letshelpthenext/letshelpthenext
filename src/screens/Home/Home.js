import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import OurStory from '../../components/Our-Story/OurStory';
import AboutUs from '../../components/About-Us/AboutUs';
import ContactForm from '../../components/ContactForm/ContactForm';
import NewsLetterSignUp from '../../components/NewsLetterSignUp/NewsLetterSignUp';
import { colors, spacing, breakpoints, typography } from '../../styles/tokens';

const PageContainer = styled.div`
  min-height: 90vh;
  background: linear-gradient(135deg, ${colors.white} 0%, ${colors.gray50} 100%);
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${spacing[8]} ${spacing[4]};
`;

const Section = styled.section`
  margin-bottom: ${spacing[16]};

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize['3xl']};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.gray900};
  text-align: center;
  margin-bottom: ${spacing[12]};

  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize['2xl']};
    margin-bottom: ${spacing[8]};
  }
`;

const IntroSection = styled(motion.section)`
  text-align: center;
  padding: ${spacing[16]} 0;
  margin-bottom: ${spacing[16]};
`;

const IntroTitle = styled.h1`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize['4xl']};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.gray900};
  margin-bottom: ${spacing[6]};
  line-height: ${typography.lineHeight.tight};

  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize['3xl']};
  }
`;

const IntroText = styled.p`
  font-size: ${typography.fontSize.xl};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray600};
  max-width: 800px;
  margin: 0 auto ${spacing[8]} auto;

  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize.lg};
    padding: 0 ${spacing[4]};
  }
`;

const CTASection = styled.div`
  display: flex;
  gap: ${spacing[4]};
  justify-content: center;
  margin-top: ${spacing[8]};

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing[4]} ${spacing[8]};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightSemiBold};
  text-decoration: none;
  border-radius: 0.75rem;
  transition: all 0.2s ease;
  min-width: 200px;

  &.primary {
    background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
    color: ${colors.white};
    box-shadow: 0 4px 6px -1px rgba(31, 155, 207, 0.2);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(31, 155, 207, 0.3);
      color: ${colors.white};
      text-decoration: none;
    }
  }

  &.secondary {
    background: transparent;
    color: ${colors.primary};
    border: 2px solid ${colors.primary};

    &:hover {
      background: ${colors.primary};
      color: ${colors.white};
      text-decoration: none;
    }
  }

  &:focus {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, ${colors.gray300}, transparent);
  margin: ${spacing[16]} 0;
`;

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>Home | Let's Help The Next</title>
        <meta name="description" content="Let's Help The Next provides financial assistance and scholarships to international students studying in the U.S. who face financial difficulties. Supporting education through mentorship and aid." />
        <meta name="keywords" content="international students, scholarships, financial assistance, education support, nonprofit, student aid" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Let's Help The Next - Supporting International Students" />
        <meta property="og:description" content="Providing financial assistance and scholarships to international students studying in the U.S. who face financial difficulties." />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Let's Help The Next - Supporting International Students" />
        <meta property="twitter:description" content="Providing financial assistance and scholarships to international students studying in the U.S. who face financial difficulties." />
      </Helmet>

      <PageContainer>
        <Container>
          <IntroSection {...fadeInUp}>
            <IntroTitle>Supporting International Students' Dreams</IntroTitle>
            <IntroText>
              At Let's Help The Next, we believe that financial challenges shouldn't stand between
              talented international students and their educational goals. We provide scholarships,
              mentorship, and support to help students succeed in their academic journey.
            </IntroText>
            <CTASection>
              <CTAButton
                href="https://www.zeffy.com/en-US/donation-form/868e9c58-5d07-41f6-8daf-ca648cc9dc8a"
                className="primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Donate to support international students"
              >
                Donate Now
              </CTAButton>
              <CTAButton
                href="/home/get-involved"
                className="secondary"
                aria-label="Learn how to get involved with our mission"
              >
                Get Involved
              </CTAButton>
            </CTASection>
          </IntroSection>

          <Section>
            <SectionTitle>Our Story</SectionTitle>
            <OurStory />
          </Section>

          <Divider />

          <Section>
            <SectionTitle>About Our Mission</SectionTitle>
            <AboutUs />
          </Section>

          <Divider />

          <Section>
            <SectionTitle>Get In Touch</SectionTitle>
            <ContactForm />
          </Section>

          <NewsLetterSignUp />
        </Container>
      </PageContainer>
    </>
  );
};

export default Home;
