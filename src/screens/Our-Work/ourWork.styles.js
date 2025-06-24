import styled from 'styled-components';import { motion } from 'framer-motion';
import { colors, spacing, shadows, borderRadius, typography, breakpoints } from '../../styles/tokens';
// import media from '../../utilities/media';

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

export const ContentSection = styled(motion.section)`
  margin-bottom: ${spacing[12]};
`;

export const SectionCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  margin-bottom: ${spacing[8]};
  box-shadow: ${shadows.lg};
  border: 1px solid ${colors.gray100};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.xl};
  }

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[4]};
  margin-bottom: ${spacing[4]};
`;

export const CardIcon = styled.div`
  font-size: 2.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

export const CardTitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin: 0;
  line-height: ${typography.lineHeight.tight};
`;

export const CardSubtitle = styled.h3`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.secondary};
  margin-bottom: ${spacing[4]};
  line-height: ${typography.lineHeight.snug};
`;

export const Emphasis = styled.p`
  font-style: italic;
  color: ${colors.gray600};
  font-size: ${typography.fontSize.lg};
  margin-bottom: ${spacing[6]};
  padding: ${spacing[4]};
  background: ${colors.gray50};
  border-left: 4px solid ${colors.secondary};
  border-radius: ${borderRadius.md};
`;

export const CardContent = styled.div`
  p {
    font-size: ${typography.fontSize.base};
    line-height: ${typography.lineHeight.relaxed};
    color: ${colors.gray700};
    margin-bottom: ${spacing[4]};

    &:last-child {
      margin-bottom: 0;
    }
  }
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

export const InitiativesSection = styled(motion.section)`
  margin-bottom: ${spacing[12]};
`;

export const InitiativesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${spacing[8]};

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

export const InitiativeCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  box-shadow: ${shadows.md};
  border: 1px solid ${colors.gray100};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.xl};
  }

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};
  }
`;

export const InitiativeIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${spacing[4]};
  text-align: center;
`;

export const InitiativeTitle = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  text-align: center;
  margin-bottom: ${spacing[4]};
  line-height: ${typography.lineHeight.snug};
`;

export const InitiativeContent = styled.div`
  p {
    font-size: ${typography.fontSize.base};
    line-height: ${typography.lineHeight.relaxed};
    color: ${colors.gray700};
    margin-bottom: ${spacing[4]};
  }
`;

export const HighlightBox = styled.div`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  padding: ${spacing[6]};
  border-radius: ${borderRadius.lg};
  margin-top: ${spacing[6]};
`;

export const HighlightTitle = styled.h4`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[4]};
  text-align: center;
`;

export const ImpactStats = styled.div`
  display: flex;
  justify-content: space-around;
  gap: ${spacing[4]};
`;

export const ImpactStat = styled.div`
  text-align: center;
`;

export const StatNumber = styled.div`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[2]};
`;

export const StatLabel = styled.div`
  font-size: ${typography.fontSize.sm};
  opacity: 0.9;
  font-weight: ${typography.fontWeightMedium};
`;

export const ProcessSection = styled(motion.section)`
  margin-bottom: ${spacing[12]};
`;

export const ProcessGrid = styled.div`
  display: grid;
  gap: ${spacing[8]};
`;

export const ProcessStep = styled(motion.div)`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${spacing[6]};
  align-items: start;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeightBold};
  box-shadow: ${shadows.lg};
  flex-shrink: 0;

  @media (max-width: ${breakpoints.md}) {
    margin: 0 auto ${spacing[4]} auto;
  }
`;

export const StepContent = styled.div`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  box-shadow: ${shadows.md};
  border: 1px solid ${colors.gray100};

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};
  }
`;

export const StepTitle = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin-bottom: ${spacing[4]};
`;

export const StepDescription = styled.p`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray700};
  margin-bottom: ${spacing[6]};
`;

export const StepList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StepListItem = styled.li`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray700};
  margin-bottom: ${spacing[3]};
  padding-left: ${spacing[2]};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const VisaSection = styled(motion.div)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${spacing[8]};
  align-items: start;

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
  }
`;

export const VisaContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${spacing[6]};
  align-items: start;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const VisaImageWrapper = styled.div`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[6]};
  box-shadow: ${shadows.md};
  border: 1px solid ${colors.gray100};
  align-self: start;

  @media (max-width: ${breakpoints.lg}) {
    order: -1;
  }
`;

export const VisaImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${borderRadius.lg};
  object-fit: cover;
`;

export const SupportSection = styled(motion.section)`
  margin-bottom: ${spacing[12]};
`;

export const FutureSection = styled(motion.section)`
  text-align: center;
`;

export const FutureContent = styled.div`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  padding: ${spacing[12]} ${spacing[8]};
  border-radius: ${borderRadius['2xl']};
  box-shadow: ${shadows.xl};

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[8]} ${spacing[6]};
  }
`;

export const FutureTitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[6]};
  line-height: ${typography.lineHeight.tight};
`;

export const CallToAction = styled.div`
  display: flex;
  gap: ${spacing[4]};
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${spacing[8]};

  @media (max-width: ${breakpoints.md}) {
    gap: ${spacing[3]};
    margin-top: ${spacing[6]};
  }

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: ${spacing[3]};
  }

  @media (max-width: ${breakpoints.xs}) {
    margin-top: ${spacing[4]};
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
