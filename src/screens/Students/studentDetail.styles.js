import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  max-width: 960px;
  margin: 0 auto;
  padding: 0 ${spacing[6]};

  @media (max-width: ${breakpoints.md}) {
    padding: 0 ${spacing[4]};
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${spacing[2]};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.primary};
  text-decoration: none;
  margin-bottom: ${spacing[8]};

  &:hover {
    text-decoration: underline;
    color: ${colors.primaryDark};
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 3px;
  }
`;

/* -------------------------------------------------------------- identity -- */

export const StudentHeader = styled(motion.header)`
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: ${spacing[8]};
  align-items: center;
  background: ${colors.white};
  border-radius: ${borderRadius['2xl']};
  border: 1px solid ${colors.gray200};
  box-shadow: ${shadows.lg};
  padding: ${spacing[8]};
  margin-bottom: ${spacing[10]};

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    gap: ${spacing[6]};
    padding: ${spacing[6]};
  }
`;

export const PortraitFrame = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: ${borderRadius['2xl']};
  overflow: hidden;
  background: linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.secondaryLight} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: ${breakpoints.sm}) {
    width: 180px;
    height: 180px;
  }
`;

export const Portrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InitialsAvatar = styled.div`
  font-family: ${typography.fontSecondary};
  font-size: 4rem;
  font-weight: ${typography.fontWeightBold};
  color: ${colors.white};
  letter-spacing: 0.05em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const Identity = styled.div`
  min-width: 0;
`;

export const StudentName = styled.h1`
  font-family: ${typography.fontSecondary};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.gray900};
  line-height: ${typography.lineHeight.tight};
  margin: 0 0 ${spacing[4]} 0;
`;

export const OriginLine = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.primary};
  margin-bottom: ${spacing[4]};

  @media (max-width: ${breakpoints.md}) {
    justify-content: center;
  }
`;

export const CountryFlag = styled.span`
  font-size: 2.25rem;
  line-height: 1;
`;

export const MetaList = styled.dl`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing[3]} ${spacing[6]};
  margin: 0;

  @media (max-width: ${breakpoints.md}) {
    justify-content: center;
  }
`;

export const MetaItem = styled.div`
  min-width: 0;
`;

export const MetaLabel = styled.dt`
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeightSemiBold};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${colors.gray500};
  margin-bottom: ${spacing[1]};
`;

export const MetaValue = styled.dd`
  font-size: ${typography.fontSize.base};
  color: ${colors.gray800};
  margin: 0;
`;

export const GraduatedPill = styled.span`
  display: inline-block;
  margin-top: ${spacing[4]};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.white};
  background: ${colors.success};
  border-radius: ${borderRadius.full};
  padding: ${spacing[2]} ${spacing[4]};
`;

/* ----------------------------------------------------------------- story -- */

export const Section = styled(motion.section)`
  margin-bottom: ${spacing[10]};
`;

export const SectionTitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin-bottom: ${spacing[6]};
`;

export const StoryBody = styled.div`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  border: 1px solid ${colors.gray200};
  box-shadow: ${shadows.md};
  padding: ${spacing[8]};

  p {
    font-size: ${typography.fontSize.lg};
    line-height: ${typography.lineHeight.relaxed};
    color: ${colors.gray700};
    margin: 0 0 ${spacing[6]} 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};

    p {
      font-size: ${typography.fontSize.base};
    }
  }
`;

/* ------------------------------------------------------------ thank-you -- */

/** Styled to read as a letter rather than as body copy. */
export const ThankYouCard = styled.div`
  position: relative;
  background: ${colors.secondaryLight};
  border-radius: ${borderRadius.xl};
  border: 1px solid ${colors.secondary};
  box-shadow: ${shadows.md};
  padding: ${spacing[10]} ${spacing[8]} ${spacing[8]};

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[8]} ${spacing[6]} ${spacing[6]};
  }
`;

export const ThankYouHeading = styled.div`
  font-family: ${typography.fontSecondary};
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: ${typography.fontWeightBold};
  font-style: italic;
  color: ${colors.primaryDark};
  text-align: center;
  margin-bottom: ${spacing[6]};
`;

export const ThankYouBody = styled.div`
  p {
    font-size: ${typography.fontSize.lg};
    line-height: ${typography.lineHeight.relaxed};
    color: ${colors.gray800};
    margin: 0 0 ${spacing[5]} 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    p {
      font-size: ${typography.fontSize.base};
    }
  }
`;

/* --------------------------------------------------------------- video --- */

/** 16:9 responsive frame. Embed from YouTube/Vimeo — never bundle video files. */
export const VideoFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${borderRadius.xl};
  overflow: hidden;
  box-shadow: ${shadows.lg};
  background: ${colors.gray900};

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

/* ------------------------------------------------------------- nav / CTA -- */

export const StudentNav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: ${spacing[4]};
  border-top: 1px solid ${colors.gray200};
  padding-top: ${spacing[6]};
  margin-bottom: ${spacing[10]};

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const NavLinkStyled = styled(Link)`
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.primary};
  text-decoration: none;
  max-width: 45%;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${breakpoints.sm}) {
    max-width: 100%;
  }
`;

export const NavHint = styled.span`
  display: block;
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeightNormal};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${colors.gray500};
  margin-bottom: ${spacing[1]};
`;

export const CTASection = styled(motion.section)`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  border-radius: ${borderRadius['2xl']};
  padding: ${spacing[10]} ${spacing[8]};
  text-align: center;
  box-shadow: ${shadows.xl};

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[8]} ${spacing[6]};
  }
`;

export const CTATitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[4]};
`;

export const CTAText = styled.p`
  font-size: ${typography.fontSize.lg};
  line-height: ${typography.lineHeight.relaxed};
  opacity: 0.9;
  max-width: 560px;
  margin: 0 auto ${spacing[8]} auto;
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
