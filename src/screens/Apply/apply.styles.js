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
  max-width: 1080px;
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
  max-width: 720px;
  margin: 0 auto ${spacing[8]} auto;
`;

export const Reassurance = styled.p`
  display: inline-block;
  background: ${colors.successLight};
  color: ${colors.gray800};
  border-radius: ${borderRadius.full};
  padding: ${spacing[3]} ${spacing[6]};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeightMedium};
  margin: 0;
`;

export const Section = styled(motion.section)`
  margin-bottom: ${spacing[12]};
`;

export const SectionTitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  text-align: center;
  margin-bottom: ${spacing[4]};
  line-height: ${typography.lineHeight.tight};
`;

export const SectionIntro = styled.p`
  font-size: ${typography.fontSize.lg};
  color: ${colors.gray600};
  line-height: ${typography.lineHeight.relaxed};
  text-align: center;
  max-width: 720px;
  margin: 0 auto ${spacing[8]} auto;
`;

/* ------------------------------------------------------------ eligibility -- */

export const CheckGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing[5]};
`;

export const CheckCard = styled.div`
  display: flex;
  gap: ${spacing[4]};
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  border: 1px solid ${colors.gray200};
  box-shadow: ${shadows.md};
  padding: ${spacing[6]};
`;

export const CheckIcon = styled.span`
  font-size: 1.5rem;
  line-height: 1.4;
  flex-shrink: 0;
`;

export const CheckTitle = styled.h3`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.gray900};
  margin: 0 0 ${spacing[2]} 0;
`;

export const CheckText = styled.p`
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray600};
  line-height: ${typography.lineHeight.relaxed};
  margin: 0;
`;

/* ---------------------------------------------------------------- process -- */

export const StepList = styled.ol`
  list-style: none;
  counter-reset: step;
  padding: 0;
  margin: 0;
  display: grid;
  gap: ${spacing[5]};
`;

export const Step = styled.li`
  counter-increment: step;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${spacing[5]};
  align-items: start;
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  border: 1px solid ${colors.gray200};
  box-shadow: ${shadows.md};
  padding: ${spacing[6]};

  @media (max-width: ${breakpoints.sm}) {
    gap: ${spacing[4]};
    padding: ${spacing[5]};
  }
`;

export const StepNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: ${borderRadius.full};
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightBold};
  flex-shrink: 0;

  &::before {
    content: counter(step);
  }
`;

export const StepTitle = styled.h3`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.gray900};
  margin: 0 0 ${spacing[2]} 0;
`;

export const StepText = styled.p`
  font-size: ${typography.fontSize.base};
  color: ${colors.gray600};
  line-height: ${typography.lineHeight.relaxed};
  margin: 0;
`;

/* ------------------------------------------------------------------- FAQ -- */

export const FaqList = styled.div`
  display: grid;
  gap: ${spacing[4]};
`;

export const FaqItem = styled.details`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  border: 1px solid ${colors.gray200};
  box-shadow: ${shadows.sm};
  padding: ${spacing[5]} ${spacing[6]};
  transition: box-shadow 0.2s ease;

  &[open] {
    box-shadow: ${shadows.md};
  }
`;

export const FaqQuestion = styled.summary`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.gray900};
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing[4]};

  &::-webkit-details-marker {
    display: none;
  }

  &::after {
    content: '+';
    font-size: ${typography.fontSize['2xl']};
    font-weight: ${typography.fontWeightNormal};
    color: ${colors.primary};
    line-height: 1;
    flex-shrink: 0;
  }

  details[open] &::after {
    content: '−';
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 4px;
    border-radius: ${borderRadius.sm};
  }
`;

export const FaqAnswer = styled.div`
  padding-top: ${spacing[4]};

  p {
    font-size: ${typography.fontSize.base};
    color: ${colors.gray600};
    line-height: ${typography.lineHeight.relaxed};
    margin: 0;
  }
`;

/* ------------------------------------------------------------------- CTA -- */

export const ApplySection = styled(motion.section)`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  border-radius: ${borderRadius['2xl']};
  padding: ${spacing[12]} ${spacing[8]};
  text-align: center;
  box-shadow: ${shadows.xl};

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[8]} ${spacing[6]};
  }
`;

export const ApplyTitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[4]};
`;

export const ApplyText = styled.p`
  font-size: ${typography.fontSize.lg};
  line-height: ${typography.lineHeight.relaxed};
  opacity: 0.9;
  max-width: 620px;
  margin: 0 auto ${spacing[8]} auto;
`;

export const ApplyButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing[4]} ${spacing[10]};
  border-radius: ${borderRadius.lg};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightSemiBold};
  text-decoration: none;
  background: ${colors.white};
  color: ${colors.primary};
  border: 2px solid ${colors.white};
  transition: all 0.3s ease;

  &:hover {
    background: transparent;
    color: ${colors.white};
    text-decoration: none;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid ${colors.white};
    outline-offset: 3px;
  }
`;

export const ApplyFootnote = styled.p`
  font-size: ${typography.fontSize.sm};
  opacity: 0.8;
  margin: ${spacing[6]} 0 0 0;
`;
