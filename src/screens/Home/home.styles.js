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

/* --------------------------------------------------------- impact band --- */

export const ImpactBand = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacing[4]};
  background: ${colors.white};
  border: 1px solid ${colors.gray200};
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.06);
  padding: ${spacing[8]};
  margin-bottom: ${spacing[16]};

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing[6]};
    padding: ${spacing[6]};
  }
`;

export const ImpactItem = styled.div`
  text-align: center;
`;

export const ImpactNumber = styled.div`
  font-family: ${typography.fontSecondary};
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  line-height: ${typography.lineHeight.tight};
`;

export const ImpactLabel = styled.div`
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.gray800};
  margin-top: ${spacing[2]};
`;

export const ImpactDescription = styled.div`
  font-size: ${typography.fontSize.xs};
  color: ${colors.gray500};
  line-height: ${typography.lineHeight.normal};
  margin-top: ${spacing[1]};
`;

/* ------------------------------------------------------ featured story --- */

export const FeaturedCard = styled(motion.article)`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: ${spacing[8]};
  align-items: center;
  background: ${colors.white};
  border: 1px solid ${colors.gray200};
  border-left: 6px solid ${colors.primary};
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
  padding: ${spacing[8]};

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    gap: ${spacing[6]};
    padding: ${spacing[6]};
  }
`;

export const FeaturedPortrait = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 1rem;
  overflow: hidden;
  background: linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.secondaryLight} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    font-family: ${typography.fontSecondary};
    font-size: 3.5rem;
    font-weight: ${typography.fontWeightBold};
    color: ${colors.white};
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 160px;
    height: 160px;
  }
`;

export const FeaturedEyebrow = styled.div`
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeightSemiBold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${colors.primary};
  margin-bottom: ${spacing[3]};
`;

export const FeaturedName = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.gray900};
  margin: 0 0 ${spacing[3]} 0;
`;

export const FeaturedQuote = styled.p`
  font-size: ${typography.fontSize.lg};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray700};
  margin: 0 0 ${spacing[5]} 0;
`;

export const FeaturedLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${colors.primaryDark};
  }
`;

/* ------------------------------------------------------- audience lanes --- */

export const LaneGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing[6]};

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const Lane = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: ${spacing[8]};
  border: 1px solid ${colors.gray200};
  background: ${(props) =>
    props.$accent
      ? `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`
      : colors.white};
  color: ${(props) => (props.$accent ? colors.white : colors.gray900)};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};
  }
`;

export const LaneIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${spacing[4]};
`;

export const LaneTitle = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeightBold};
  margin: 0 0 ${spacing[3]} 0;
  /* Global stylesheet sets an h3 colour; take the Lane's instead so the title
     stays legible on the accented (blue) card. */
  color: inherit;
`;

export const LaneText = styled.p`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${(props) => (props.$accent ? 'rgba(255,255,255,0.9)' : colors.gray600)};
  margin: 0 0 ${spacing[6]} 0;
  flex: 1;
`;

export const LaneButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  padding: ${spacing[3]} ${spacing[6]};
  border-radius: 0.75rem;
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeightSemiBold};
  text-decoration: none;
  transition: all 0.2s ease;
  background: ${(props) => (props.$accent ? colors.white : colors.primary)};
  color: ${(props) => (props.$accent ? colors.primary : colors.white)};
  border: 2px solid ${(props) => (props.$accent ? colors.white : colors.primary)};

  &:hover {
    text-decoration: none;
    transform: translateY(-2px);
    background: transparent;
    color: ${(props) => (props.$accent ? colors.white : colors.primary)};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => (props.$accent ? colors.white : colors.primary)};
    outline-offset: 3px;
  }

  @media (max-width: ${breakpoints.md}) {
    align-self: stretch;
  }
`;
