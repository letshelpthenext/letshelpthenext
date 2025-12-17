import styled, { keyframes, css } from 'styled-components';
import { colors, spacing, borderRadius, shadows } from '../../styles/tokens';

// Ripple animation for buttons
const rippleAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.5;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

// Pulse animation
const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

// Shake animation
const shakeAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
`;

// Float animation
const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Glow animation
const glowAnimation = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px rgba(14, 115, 102, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(14, 115, 102, 0.5), 0 0 30px rgba(14, 115, 102, 0.3);
  }
`;

// Base interactive styles
export const interactiveHoverStyles = css`
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.lg};
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${shadows.md};
  }
`;

// Button with ripple effect
export const RippleButton = styled.button`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  padding: ${spacing.md} ${spacing.lg};
  background: ${props => props.$variant === 'outline' ? 'transparent' : colors.primary};
  color: ${props => props.$variant === 'outline' ? colors.primary : '#fff'};
  border: 2px solid ${colors.primary};
  border-radius: ${borderRadius.md};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.3) 10%, transparent 10%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
  }

  &:active::after {
    transform: scale(0);
    opacity: 1;
    transition: 0s;
  }

  &:hover {
    background: ${props => props.$variant === 'outline' ? colors.primary : colors.primaryDark};
    color: #fff;
    transform: translateY(-2px);
    box-shadow: ${shadows.lg};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(14, 115, 102, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

// Interactive card with hover effects
export const InteractiveCard = styled.div`
  padding: ${spacing.lg};
  background: ${colors.background};
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.md};
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};
  ${interactiveHoverStyles}

  ${props => props.$glow && css`
    &:hover {
      animation: ${glowAnimation} 2s ease-in-out infinite;
    }
  `}
`;

// Floating action button
export const FloatingButton = styled.button`
  position: fixed;
  bottom: ${spacing.xl};
  right: ${spacing.xl};
  width: 56px;
  height: 56px;
  border-radius: ${borderRadius.full};
  background: ${colors.primary};
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: ${shadows.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
    box-shadow: ${shadows.xl};
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(14, 115, 102, 0.3), ${shadows.lg};
  }
`;

// Icon button with hover rotation
export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.$size || '40px'};
  height: ${props => props.$size || '40px'};
  padding: 0;
  background: ${props => props.$variant === 'ghost' ? 'transparent' : colors.primaryLight};
  color: ${colors.primary};
  border: none;
  border-radius: ${borderRadius.full};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.primary};
    color: #fff;
    transform: rotate(${props => props.$rotateOnHover ? '90deg' : '0'});
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(14, 115, 102, 0.3);
  }
`;

// Animated link with underline effect
export const AnimatedLink = styled.a`
  position: relative;
  color: ${colors.primary};
  text-decoration: none;
  font-weight: 500;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${colors.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(14, 115, 102, 0.3);
    border-radius: 2px;
  }
`;

// Pulse effect for CTAs
export const PulseWrapper = styled.div`
  display: inline-block;
  animation: ${pulseAnimation} 2s ease-in-out infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

// Float effect for decorative elements
export const FloatWrapper = styled.div`
  animation: ${floatAnimation} 3s ease-in-out infinite;
`;

// Shake wrapper for error states
export const ShakeWrapper = styled.div`
  ${props => props.$shake && css`
    animation: ${shakeAnimation} 0.5s ease-in-out;
  `}
`;

// Input with focus animation
export const AnimatedInput = styled.input`
  width: 100%;
  padding: ${spacing.md};
  border: 2px solid ${colors.border};
  border-radius: ${borderRadius.md};
  font-size: 1rem;
  transition: all 0.3s ease;
  background: ${colors.background};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(14, 115, 102, 0.1);
  }

  &:hover:not(:focus) {
    border-color: ${colors.textLight};
  }

  &::placeholder {
    color: ${colors.textLight};
    transition: opacity 0.3s ease;
  }

  &:focus::placeholder {
    opacity: 0.5;
  }
`;

// Export animations for custom use
export const animations = {
  ripple: rippleAnimation,
  pulse: pulseAnimation,
  shake: shakeAnimation,
  float: floatAnimation,
  glow: glowAnimation
};

export default {
  RippleButton,
  InteractiveCard,
  FloatingButton,
  IconButton,
  AnimatedLink,
  PulseWrapper,
  FloatWrapper,
  ShakeWrapper,
  AnimatedInput,
  animations,
  interactiveHoverStyles
};
