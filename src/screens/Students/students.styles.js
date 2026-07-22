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
  max-width: 760px;
  margin: 0 auto;
`;

/* ---------------------------------------------------------------- cohorts -- */

export const CohortSection = styled(motion.section)`
  margin-bottom: ${spacing[16]};

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: ${spacing[12]};
  }
`;

export const CohortHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${spacing[4]};
  flex-wrap: wrap;
  padding-bottom: ${spacing[4]};
  margin-bottom: ${spacing[8]};
  border-bottom: 2px solid ${colors.gray200};
`;

export const CohortTitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.gray900};
  margin: 0;
`;

export const CohortMeta = styled.p`
  font-size: ${typography.fontSize.base};
  color: ${colors.gray600};
  margin: 0;

  strong {
    color: ${colors.primary};
    font-weight: ${typography.fontWeightSemiBold};
  }
`;

export const StudentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${spacing[6]};

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${spacing[4]};
  }
`;

/* Cards are links when there is a story to read, plain divs when there is not. */
const cardBase = `
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  border: 1px solid ${colors.gray200};
  box-shadow: ${shadows.md};
  overflow: hidden;
  height: 100%;
`;

export const StudentCardLink = styled(Link)`
  ${cardBase}
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    text-decoration: none;
    color: inherit;
    transform: translateY(-4px);
    box-shadow: ${shadows.xl};
  }

  /* Nudges the arrow in ReadMore. Targeted by class rather than by a
     styled-components component selector, which would need a babel plugin
     this project does not install. */
  &:hover .read-more-arrow::after {
    margin-left: ${spacing[1]};
  }

  &:focus-visible {
    outline: 3px solid ${colors.primary};
    outline-offset: 3px;
  }
`;

export const StudentCardStatic = styled.div`
  ${cardBase}
`;

export const PhotoFrame = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.secondaryLight} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const StudentPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InitialsAvatar = styled.div`
  font-family: ${typography.fontSecondary};
  font-size: clamp(2.5rem, 8vw, 3.5rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.white};
  letter-spacing: 0.05em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const FlagBadge = styled.span`
  position: absolute;
  bottom: ${spacing[3]};
  right: ${spacing[3]};
  font-size: 1.75rem;
  line-height: 1;
  background: ${colors.white};
  border-radius: ${borderRadius.full};
  padding: ${spacing[2]};
  box-shadow: ${shadows.md};
`;

export const GraduatedBadge = styled.span`
  position: absolute;
  top: ${spacing[3]};
  left: ${spacing[3]};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeightSemiBold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${colors.white};
  background: ${colors.success};
  border-radius: ${borderRadius.full};
  padding: ${spacing[1]} ${spacing[3]};
  box-shadow: ${shadows.sm};
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${spacing[5]};
`;

export const StudentName = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.gray900};
  margin: 0 0 ${spacing[2]} 0;
  line-height: ${typography.lineHeight.tight};
`;

export const StudentOrigin = styled.p`
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeightMedium};
  color: ${colors.primary};
  margin: 0 0 ${spacing[3]} 0;
`;

export const StudentSchool = styled.p`
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray600};
  margin: 0 0 ${spacing[3]} 0;
  line-height: ${typography.lineHeight.normal};
`;

export const StudentTeaser = styled.p`
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray700};
  line-height: ${typography.lineHeight.relaxed};
  margin: 0 0 ${spacing[4]} 0;
`;

export const ReadMore = styled.span.attrs({ className: 'read-more-arrow' })`
  margin-top: auto;
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.primary};

  &::after {
    content: ' →';
    display: inline-block;
    transition: margin-left 0.2s ease;
  }
`;

export const StoryPending = styled.span`
  margin-top: auto;
  font-size: ${typography.fontSize.sm};
  font-style: italic;
  color: ${colors.gray400};
`;

/* ------------------------------------------------------------------- CTA -- */

export const CTASection = styled(motion.section)`
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

export const CTATitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[4]};
`;

export const CTAText = styled.p`
  font-size: ${typography.fontSize.lg};
  line-height: ${typography.lineHeight.relaxed};
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto ${spacing[8]} auto;
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: ${spacing[4]};
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
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
  background: ${(props) => (props.$secondary ? 'transparent' : colors.white)};
  color: ${(props) => (props.$secondary ? colors.white : colors.primary)};

  &:hover {
    text-decoration: none;
    transform: translateY(-2px);
    background: ${(props) => (props.$secondary ? colors.white : 'transparent')};
    color: ${(props) => (props.$secondary ? colors.primary : colors.white)};
  }

  &:focus-visible {
    outline: 3px solid ${colors.white};
    outline-offset: 3px;
  }
`;
