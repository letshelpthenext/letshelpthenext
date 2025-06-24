import styled from 'styled-components';
import { colors, spacing, breakpoints, typography } from '../../styles/tokens';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const PageContainer = styled.div`
  min-height: 90vh;
  background: linear-gradient(135deg, ${colors.white} 0%, ${colors.gray50} 100%);
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${spacing[8]} ${spacing[4]};

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]} ${spacing[4]};
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: ${spacing[4]} ${spacing[3]};
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${spacing[3]} ${spacing[2]};
  }
`;

export const Section = styled.section`
  margin-bottom: ${spacing[16]};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
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

export const IntroSection = styled(motion.section)`
  text-align: center;
  padding: ${spacing[16]} 0;
  margin-bottom: ${spacing[16]};
`;

export const IntroTitle = styled.h1`
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

export const IntroText = styled.p`
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

export const CTASection = styled.div`
  display: flex;
  gap: ${spacing[4]};
  justify-content: center;
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

export const StyledNavlink = styled(NavLink)`
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

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, ${colors.gray300}, transparent);
  margin: ${spacing[16]} 0;
`;
