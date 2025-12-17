import styled from 'styled-components';
import {
  colors,
  spacing,
  typography,
  breakpoints,
  shadows,
  borderRadius,
} from '../../styles/tokens';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
// import media from '../../utilities/media';

export const WelcomeContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%);
  position: relative;
  overflow: hidden;
`;

export const WelcomeHeader = styled.div`
  text-align: center;
  padding: ${spacing[12]} ${spacing[4]} ${spacing[8]};
  position: relative;
  z-index: 10;

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[8]} ${spacing[4]} ${spacing[6]};
  }
`;

export const LogoContainer = styled(motion.div)`
  margin-bottom: ${spacing[6]};
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
`;

export const WelcomeLogo = styled.img`
  height: 80px;
  width: auto;
  filter: brightness(0) saturate(100%) invert(26%) sepia(43%) saturate(1557%) hue-rotate(187deg)
    brightness(96%) contrast(91%);

  @media (max-width: ${breakpoints.md}) {
    height: 60px;
  }
`;

export const WelcomeTitle = styled(motion.h1)`
  font-family: ${typography.fontSecondary};
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin-bottom: ${spacing[4]};
  line-height: ${typography.lineHeight.tight};
`;

export const WelcomeSubtitle = styled(motion.p)`
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  color: ${colors.text.secondary};
  margin-bottom: ${spacing[8]};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: ${typography.lineHeight.relaxed};
`;

export const ValuesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${spacing[6]};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing[4]} ${spacing[12]};

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: ${spacing[5]};
  }

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${spacing[4]};
    padding: 0 ${spacing[4]} ${spacing[8]};
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: 0 ${spacing[3]} ${spacing[6]};
    gap: ${spacing[3]};
  }
`;

export const ValueCard = styled(motion.div)`
  position: relative;
  background: ${colors.white};
  border-radius: ${borderRadius['2xl']};
  overflow: hidden;
  box-shadow: ${shadows.lg};
  transition: all 0.3s ease;
  height: 400px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${shadows['2xl']};
  }

  &:focus {
    outline: 3px solid ${colors.primary};
    outline-offset: 2px;
  }

  @media (max-width: ${breakpoints.md}) {
    height: 360px;
  }

  @media (max-width: ${breakpoints.sm}) {
    height: 360px;
  }

  @media (max-width: ${breakpoints.xs}) {
    /* height: 300px; */
    border-radius: ${borderRadius.xl};
  }
`;

export const CardImageContainer = styled.div`
  position: relative;
  height: 200px;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.$overlayColor || 'rgba(0, 0, 0, 0.4)'};
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 0.7;
  }
`;

export const CardIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: ${colors.white};
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const CardContent = styled.div`
  padding: ${spacing[6]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;

  @media (max-width: ${breakpoints.md}) {
    height: 150px;
    padding: ${spacing[4]};
  }

  @media (max-width: ${breakpoints.sm}) {
    height: 120px;
    padding: ${spacing[3]};
  }

  @media (max-width: ${breakpoints.xs}) {
    height: 100px;
    padding: ${spacing[3]};
  }
`;

export const ValueTitle = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin-bottom: ${spacing[3]};
  text-align: center;

  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize.xl};
  }
`;

export const ValueQuote = styled.p`
  font-size: ${typography.fontSize.base};
  font-style: italic;
  color: ${colors.text.secondary};
  line-height: ${typography.lineHeight.relaxed};
  text-align: center;
  margin-bottom: ${spacing[4]};
`;

export const ActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${colors.primary} 0%, #1e40af 100%);
  color: ${colors.white};
  padding: ${spacing[3]} ${spacing[6]};
  border-radius: ${borderRadius.full};
  font-weight: ${typography.fontWeightSemiBold};
  font-size: ${typography.fontSize.sm};
  transition: all 0.3s ease;
  margin-top: auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }

  &:focus {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const BackgroundDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.03;
  background-image: radial-gradient(circle at 20% 20%, ${colors.primary} 1px, transparent 1px),
    radial-gradient(circle at 80% 80%, ${colors.secondary} 1px, transparent 1px);
  background-size: 50px 50px, 80px 80px;
  /* z-index: 1; */
`;


