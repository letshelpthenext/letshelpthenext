import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, spacing, shadows, borderRadius, typography, breakpoints } from '../../styles/tokens';

const StoryContainer = styled(motion.section)`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  box-shadow: ${shadows.lg};
  overflow: hidden;
  border: 1px solid ${colors.gray200};
`;

const StoryHeader = styled.div`
  background: linear-gradient(135deg, ${colors.info} 0%, #2563EB 100%);
  color: ${colors.white};
  padding: ${spacing[6]} ${spacing[8]};
  text-align: center;
`;

const StoryTitle = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightBold};
  margin: 0;
`;

const StoryContent = styled.div`
  padding: ${spacing[8]};
`;

const StoryParagraph = styled.p`
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

const HighlightBox = styled.div`
  background: linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.secondaryLight} 100%);
  border-left: 4px solid ${colors.primary};
  padding: ${spacing[6]};
  border-radius: ${borderRadius.md};
  margin: ${spacing[6]} 0;
`;

const HighlightText = styled.p`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightMedium};
  color: ${colors.gray800};
  margin: 0;
  font-style: italic;
`;

const ServicesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${spacing[4]};
  list-style: none;
  padding: 0;
  margin: ${spacing[6]} 0;
`;

const ServiceItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${spacing[3]};
  padding: ${spacing[4]};
  background: ${colors.gray50};
  border-radius: ${borderRadius.md};
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.gray100};
    transform: translateY(-1px);
  }
`;

const ServiceIcon = styled.div`
  width: 24px;
  height: 24px;
  background: ${colors.primary};
  border-radius: ${borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: ${typography.fontSize.sm};
  flex-shrink: 0;
  margin-top: 2px;
`;

const ServiceText = styled.span`
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray700};
  line-height: ${typography.lineHeight.normal};
`;

const OurStory = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2 }
  };

  return (
    <StoryContainer {...fadeInUp}>
      <StoryHeader>
        <StoryTitle>Our Story</StoryTitle>
      </StoryHeader>

      <StoryContent>
        <StoryParagraph>
          International students, seeking opportunities that their home countries
          do not offer, often face dreadful financial crises and a lack of
          orientation at some point during their studies. Sometimes they even
          miss one-time opportunities due to a lack of resources. Let's Help The Next
          focuses on providing mentorship on orientation, self-reliance, and
          financial aid to international students in the United States.
        </StoryParagraph>

        <HighlightBox>
          <HighlightText>
            "Making their dream a reality is our way of paying it forward every chance we get."
          </HighlightText>
        </HighlightBox>

        <h4 style={{
          fontFamily: typography.fontSecondary,
          color: colors.gray900,
          marginBottom: spacing[4],
          fontSize: typography.fontSize.lg
        }}>
          How We Help
        </h4>

        <ServicesList>
          <ServiceItem>
            <ServiceIcon>🏠</ServiceIcon>
            <ServiceText>
              <strong>Mentorship Program:</strong> A home away from home with volunteers who have navigated this journey
            </ServiceText>
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>💪</ServiceIcon>
            <ServiceText>
              <strong>Self-Reliance Training:</strong> Employment guidance, budgeting skills, and life management
            </ServiceText>
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>💰</ServiceIcon>
            <ServiceText>
              <strong>Financial Assistance:</strong> Support for tuition, school supplies, and housing costs
            </ServiceText>
          </ServiceItem>
        </ServicesList>

        <StoryParagraph>
          Through our personal journey, we have received countless support, and to
          compensate we give our complete self, effort, and resources to advocate
          and make it happen for the applicants. Showing them the path, and
          teaching them self-reliance to create a life for themselves and to bring
          hope to their communities is our objective.
        </StoryParagraph>
      </StoryContent>
    </StoryContainer>
  );
};

export default OurStory;
