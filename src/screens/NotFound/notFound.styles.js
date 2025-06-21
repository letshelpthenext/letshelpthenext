import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const colors = {
  primary: '#1e40af',
  secondary: '#3b82f6',
  accent: '#f59e0b',
  text: {
    primary: '#1f2937',
    secondary: '#6b7280',
    light: '#9ca3af',
  },
  background: {
    primary: '#ffffff',
    secondary: '#f9fafb',
    gradient: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%)',
  },
  error: '#ef4444',
  success: '#10b981',
  white: '#ffffff',
};

const spacing = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
};

const typography = {
  fontPrimary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontSecondary: "'Playfair Display', serif",
  fontWeightNormal: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
};

const borderRadius = {
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  background: ${colors.background.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing[4]};
  position: relative;
  overflow: hidden;
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
  z-index: 1;
`;

export const ContentWrapper = styled(motion.div)`
  max-width: 600px;
  text-align: center;
  position: relative;
  z-index: 10;
`;

export const ErrorNumber = styled(motion.h1)`
  font-family: ${typography.fontSecondary};
  font-size: clamp(6rem, 15vw, 12rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin: 0;
  line-height: ${typography.lineHeight.tight};
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const ErrorTitle = styled(motion.h2)`
  font-family: ${typography.fontSecondary};
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.text.primary};
  margin: ${spacing[4]} 0 ${spacing[6]};
  line-height: ${typography.lineHeight.tight};
`;

export const ErrorMessage = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: ${colors.text.secondary};
  margin-bottom: ${spacing[8]};
  line-height: ${typography.lineHeight.relaxed};
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const NavigationGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${spacing[4]};
  margin-bottom: ${spacing[8]};

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${spacing[3]};
  }
`;

export const NavigationCard = styled(motion(NavLink))`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[6]} ${spacing[4]};
  text-decoration: none;
  color: ${colors.text.primary};
  box-shadow: ${shadows.md};
  transition: all 0.3s ease;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[3]};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.xl};
    border-color: ${colors.primary};
    color: ${colors.text.primary};
    text-decoration: none;
  }

  &:focus {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }
`;

export const CardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: ${spacing[2]};
`;

export const CardTitle = styled.h3`
  font-weight: ${typography.fontWeightSemiBold};
  font-size: 1.125rem;
  margin: 0 0 ${spacing[2]};
  color: ${colors.text.primary};
`;

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: ${colors.text.secondary};
  margin: 0;
  text-align: center;
  line-height: ${typography.lineHeight.relaxed};
`;

export const PrimaryButton = styled(motion(NavLink))`
  display: inline-flex;
  align-items: center;
  gap: ${spacing[2]};
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
  color: ${colors.white};
  padding: ${spacing[4]} ${spacing[8]};
  border-radius: ${borderRadius.full};
  text-decoration: none;
  font-weight: ${typography.fontWeightMedium};
  font-size: 1.125rem;
  box-shadow: ${shadows.lg};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.xl};
    color: ${colors.white};
    text-decoration: none;
  }

  &:focus {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const FloatingShape = styled(motion.div)`
  position: absolute;
  border-radius: ${borderRadius.full};
  background: linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20);
  z-index: 2;
`;

export const HelpSection = styled(motion.div)`
  margin-top: ${spacing[12]};
  padding: ${spacing[8]} ${spacing[6]};
  background: ${colors.white};
  border-radius: ${borderRadius['2xl']};
  box-shadow: ${shadows.md};
  border: 1px solid ${colors.background.secondary};
`;

export const HelpTitle = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: 1.5rem;
  font-weight: ${typography.fontWeightBold};
  color: ${colors.text.primary};
  margin: 0 0 ${spacing[4]};
  text-align: center;
`;

export const HelpList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: ${spacing[3]};
`;

export const HelpItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${spacing[3]};
  padding: ${spacing[3]};
  border-radius: ${borderRadius.lg};
  background: ${colors.background.secondary};
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.primary}08;
  }
`;

export const HelpIcon = styled.span`
  color: ${colors.primary};
  font-size: 1.25rem;
  margin-top: ${spacing[1]};
`;

export const HelpText = styled.p`
  margin: 0;
  color: ${colors.text.secondary};
  line-height: ${typography.lineHeight.relaxed};
`;
