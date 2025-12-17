import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, spacing, shadows, borderRadius, typography, breakpoints } from '../../styles/tokens';

export const PageContainer = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(135deg, ${colors.gray50} 0%, ${colors.white} 100%);
  padding: ${spacing[8]} 0;

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]} 0;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${spacing[6]};

  @media (max-width: ${breakpoints.md}) {
    padding: 0 ${spacing[4]};
  }
`;

export const HeroSection = styled(motion.section)`
  text-align: center;
  margin-bottom: ${spacing[12]};
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const HeroTitle = styled.h1`
  font-family: ${typography.fontSecondary};
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin-bottom: ${spacing[4]};
  line-height: ${typography.lineHeight.tight};
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  color: ${colors.gray600};
  line-height: ${typography.lineHeight.relaxed};
  font-weight: ${typography.fontWeightMedium};
`;

export const MissionVisionSection = styled(motion.section)`
  margin-bottom: ${spacing[12]};
`;

export const MissionVisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: ${spacing[8]};

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: ${spacing[6]};
  }

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
  }

  @media (max-width: ${breakpoints.sm}) {
    gap: ${spacing[4]};
  }
`;

export const MissionCard = styled(motion.div)`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  box-shadow: ${shadows.xl};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};
  }
`;

export const VisionCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  box-shadow: ${shadows.lg};
  border: 1px solid ${colors.gray100};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.xl};
  }

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};
  }
`;

export const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${spacing[4]};
  text-align: center;
`;

export const CardTitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[6]};
  text-align: center;
  line-height: ${typography.lineHeight.tight};
`;

export const CardContent = styled.div`
  p {
    font-size: ${typography.fontSize.lg};
    line-height: ${typography.lineHeight.relaxed};
    margin-bottom: ${spacing[6]};
    text-align: center;
  }
`;

export const HighlightBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: ${spacing[4]};
  border-radius: ${borderRadius.lg};
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const HighlightText = styled.p`
  font-size: ${typography.fontSize.base};
  font-style: italic;
  margin: 0 !important;
  opacity: 0.9;
`;

export const VisionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const VisionItem = styled.li`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray700};
  margin-bottom: ${spacing[3]};
  padding-left: ${spacing[2]};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ImpactSection = styled(motion.section)`
  margin-bottom: ${spacing[12]};
`;

export const SectionTitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  text-align: center;
  margin-bottom: ${spacing[8]};
  line-height: ${typography.lineHeight.tight};
`;

export const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${spacing[6]};

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing[4]};
  }
`;

export const ImpactCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[6]};
  text-align: center;
  box-shadow: ${shadows.md};
  border: 1px solid ${colors.gray100};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.lg};
  }
`;

export const ImpactNumber = styled.div`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin-bottom: ${spacing[2]};
  line-height: ${typography.lineHeight.none};
`;

export const ImpactLabel = styled.div`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.gray800};
  margin-bottom: ${spacing[2]};
`;

export const ImpactDescription = styled.div`
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray600};
  line-height: ${typography.lineHeight.relaxed};
`;

export const TestimonialsSection = styled(motion.section)`
  margin-bottom: ${spacing[12]};
`;

export const TestimonialSubtitle = styled.p`
  font-size: ${typography.fontSize.lg};
  color: ${colors.gray600};
  text-align: center;
  margin-bottom: ${spacing[8]};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  gap: ${spacing[8]};

  @media (max-width: ${breakpoints.lg}) {
    gap: ${spacing[6]};
  }
`;

export const TestimonialCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  box-shadow: ${shadows.lg};
  border: 1px solid ${colors.gray100};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.xl};
  }

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};
  }
`;

export const TestimonialContent = styled.div`
  position: relative;
  margin-bottom: ${spacing[6]};
`;

export const QuoteIcon = styled.div`
  font-size: 4rem;
  color: ${colors.primary};
  opacity: 0.1;
  position: absolute;
  top: -10px;
  left: -10px;
  font-family: serif;
  line-height: 1;
`;

export const TestimonialText = styled.p`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray700};
  font-style: italic;
  position: relative;
  z-index: 1;
  margin-bottom: ${spacing[4]};
`;

export const OriginalQuote = styled.div`
  margin-top: ${spacing[4]};
  padding: ${spacing[4]};
  background: ${colors.gray50};
  border-radius: ${borderRadius.md};
  border-left: 4px solid ${colors.secondary};
`;

export const OriginalQuoteLabel = styled.div`
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.gray600};
  margin-bottom: ${spacing[2]};
`;

export const OriginalQuoteText = styled.p`
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray600};
  font-style: italic;
  margin: 0;
`;

export const TestimonialFooter = styled.div`
  border-top: 1px solid ${colors.gray200};
  padding-top: ${spacing[4]};
`;

export const AuthorInfo = styled.div``;

export const AuthorName = styled.div`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.gray800};
  margin-bottom: ${spacing[2]};
`;

export const AuthorDetails = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[2]};
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray600};
`;

export const CountryFlag = styled.span`
  font-size: ${typography.fontSize.lg};
`;

export const ValuesSection = styled(motion.section)`
  margin-bottom: ${spacing[12]};
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${spacing[6]};

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing[4]};
  }
`;

export const ValueCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[6]};
  text-align: center;
  box-shadow: ${shadows.md};
  border: 1px solid ${colors.gray100};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.lg};
  }
`;

export const ValueIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${spacing[4]};
`;

export const ValueTitle = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin-bottom: ${spacing[3]};
`;

export const ValueDescription = styled.p`
  font-size: ${typography.fontSize.sm};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray600};
  margin: 0;
`;

export const CallToActionSection = styled(motion.section)`
  text-align: center;
`;

export const CTAContent = styled.div`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  padding: ${spacing[12]} ${spacing[8]};
  border-radius: ${borderRadius['2xl']};
  box-shadow: ${shadows.xl};

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[8]} ${spacing[6]};
  }
`;

export const CTATitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[4]};
  line-height: ${typography.lineHeight.tight};
`;

export const CTADescription = styled.p`
  font-size: ${typography.fontSize.lg};
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing[8]};
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: ${spacing[4]};
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.md}) {
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

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing[4]} ${spacing[8]};
  border-radius: ${borderRadius.lg};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightSemiBold};
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 200px;
  border: 2px solid ${colors.white};

  ${props => props.secondary ? `
    background: transparent;
    color: ${colors.white};

    &:hover {
      background: ${colors.white};
      color: ${colors.primary};
      text-decoration: none;
    }
  ` : `
    background: ${colors.white};
    color: ${colors.primary};

    &:hover {
      background: transparent;
      color: ${colors.white};
      text-decoration: none;
      transform: translateY(-2px);
    }
  `}

  &:focus {
    outline: 2px solid ${colors.white};
    outline-offset: 2px;
  }
`;
