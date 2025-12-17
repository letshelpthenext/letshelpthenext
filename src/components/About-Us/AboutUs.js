import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, spacing, shadows, borderRadius, typography, breakpoints } from '../../styles/tokens';

const AboutContainer = styled(motion.section)`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  box-shadow: ${shadows.lg};
  overflow: hidden;
  border: 1px solid ${colors.gray200};
`;

const AboutHeader = styled.div`
  background: linear-gradient(135deg, ${colors.warning} 0%, #F59E0B 100%);
  color: ${colors.gray900};
  padding: ${spacing[6]} ${spacing[8]};
  text-align: center;
`;

const AboutTitle = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightBold};
  margin: 0;
`;

const AboutContent = styled.div`
  padding: ${spacing[8]};
`;

const AboutParagraph = styled.p`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray700};
  margin-bottom: ${spacing[6]};

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize.sm};
  }
`;

const ValuesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${spacing[6]};
  margin: ${spacing[8]} 0;
`;

const ValueCard = styled.div`
  background: linear-gradient(135deg, ${colors.gray50} 0%, ${colors.white} 100%);
  padding: ${spacing[6]};
  border-radius: ${borderRadius.lg};
  border: 1px solid ${colors.gray200};
  text-align: center;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.md};
  }
`;

const ValueIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  border-radius: ${borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${spacing[4]} auto;
  font-size: ${typography.fontSize.xl};
  color: ${colors.white};
`;

const ValueTitle = styled.h4`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.gray900};
  margin-bottom: ${spacing[2]};
`;

const ValueDescription = styled.p`
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray600};
  line-height: ${typography.lineHeight.normal};
  margin: 0;
`;

const StatsSection = styled.div`
  background: linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.secondaryLight} 100%);
  padding: ${spacing[6]};
  border-radius: ${borderRadius.lg};
  margin: ${spacing[8]} 0;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${spacing[4]};
`;

const StatItem = styled.div`
  padding: ${spacing[2]};
`;

const StatNumber = styled.div`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin-bottom: ${spacing[1]};
`;

const StatLabel = styled.div`
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray700};
  font-weight: ${typography.fontWeightMedium};
`;

const AboutUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.4 }
  };

  return (
    <AboutContainer {...fadeInUp}>
      <AboutHeader>
        <AboutTitle>About Us</AboutTitle>
      </AboutHeader>

      <AboutContent>
        <AboutParagraph>
          We are a non-profit organization dedicated to helping international
          students succeed in their academic pursuits. We understand that
          navigating the school application process and settling into a new
          environment can be challenging, which is why we are here to offer our
          support every step of the way.
        </AboutParagraph>

        <ValuesList>
          <ValueCard>
            <ValueIcon>🎓</ValueIcon>
            <ValueTitle>Expert Guidance</ValueTitle>
            <ValueDescription>
              Our team has extensive knowledge in education and visa processes
            </ValueDescription>
          </ValueCard>
          <ValueCard>
            <ValueIcon>🌍</ValueIcon>
            <ValueTitle>Global Reach</ValueTitle>
            <ValueDescription>
              Supporting students from countries around the world
            </ValueDescription>
          </ValueCard>
          <ValueCard>
            <ValueIcon>🤝</ValueIcon>
            <ValueTitle>Personal Support</ValueTitle>
            <ValueDescription>
              One-on-one mentorship throughout the entire journey
            </ValueDescription>
          </ValueCard>
        </ValuesList>

        <StatsSection>
          <h4 style={{
            fontFamily: typography.fontSecondary,
            color: colors.gray900,
            marginBottom: spacing[4],
            fontSize: typography.fontSize.lg
          }}>
            Our Impact
          </h4>
          <StatsGrid>
            <StatItem>
              <StatNumber>500+</StatNumber>
              <StatLabel>Students Helped</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>$200K+</StatNumber>
              <StatLabel>Scholarships Awarded</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>50+</StatNumber>
              <StatLabel>Countries Represented</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>95%</StatNumber>
              <StatLabel>Success Rate</StatLabel>
            </StatItem>
          </StatsGrid>
        </StatsSection>

        <AboutParagraph>
          At our organization, we believe that every student should have access
          to a quality education, regardless of their background or
          circumstances. That's why we work tirelessly to ensure that
          international students receive the support they need to succeed and
          thrive in their academic journeys.
        </AboutParagraph>

        <AboutParagraph>
          We are proud to have helped countless international students from all
          over the world, and we look forward to continuing to make a positive
          impact in the lives of those we serve. Thank you for visiting our
          website, and we hope that you will consider partnering with us to
          support our mission.
        </AboutParagraph>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutUs;
