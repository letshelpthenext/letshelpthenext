import styled from 'styled-components';
import { colors, spacing, typography, breakpoints, shadows, borderRadius } from '../../styles/tokens';
import { motion } from 'framer-motion';
// import media from '../../utilities/media';
// import { useWindowWide as windowWidth } from '../../utilities/windowWidthDetector';

export const HeroContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: ${colors.white};
  overflow: hidden;

  @media (max-width: ${breakpoints.md}) {
    background-image: ${props => `url(${props.mobileImage})`};
    background-attachment: scroll;
  }
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(31, 155, 207, 0.75) 0%,
    rgba(26, 123, 160, 0.85) 50%,
    rgba(21, 94, 117, 0.9) 100%
  );
  z-index: 1;
`;

export const ParticleEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  background-image:
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
    radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
  background-size: 50px 50px, 80px 80px, 120px 120px;
  animation: float 20s ease-in-out infinite;
  z-index: 2;

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(1deg); }
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
`;

export const HeroMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${spacing[8]} ${spacing[4]};
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]} ${spacing[4]};
  }
`;

export const LogoContainer = styled(motion.div)`
  margin-bottom: ${spacing[6]};
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: ${spacing[4]};
  }
`;

export const HeroLogo = styled.img`
  height: 80px;
  width: auto;

  @media (max-width: ${breakpoints.md}) {
    height: 60px;
  }
`;

export const HeroTextContainer = styled(motion.div)`
  z-index: 10;
`;

export const HeroBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${borderRadius.full};
  padding: ${spacing[2]} ${spacing[4]};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeightMedium};
  margin-bottom: ${spacing[6]};
  box-shadow: ${shadows.lg};

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: ${spacing[4]};
    font-size: ${typography.fontSize.xs};
    padding: ${spacing[1]} ${spacing[3]};
  }
`;

export const HeroTitle = styled(motion.h1)`
  font-family: ${typography.fontSecondary};
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: ${typography.fontWeightBold};
  line-height: ${typography.lineHeight.tight};
  margin-bottom: ${spacing[6]};
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: ${spacing[4]};
    -webkit-text-fill-color: ${colors.white};
  }
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.25rem, 4vw, 1.75rem);
  font-weight: ${typography.fontWeightMedium};
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing[4]};
  opacity: 0.95;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: ${spacing[3]};
  }
`;

export const HeroDescription = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.25rem);
  font-weight: ${typography.fontWeightNormal};
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing[8]};
  opacity: 0.9;
  max-width: 600px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: ${spacing[6]};
  }
`;

export const HeroActions = styled(motion.div)`
  display: flex;
  gap: ${spacing[4]};
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: ${spacing[3]};
  }
`;

export const ButtonIcon = styled.span`
  margin-right: ${spacing[2]};
  font-size: 1.2em;
`;

export const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${colors.success} 0%, #059669 100%);
  color: ${colors.white};
  padding: ${spacing[4]} ${spacing[8]};
  border-radius: ${borderRadius.full};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightSemiBold};
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border: 2px solid transparent;
  min-width: 200px;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
    color: ${colors.white};
    text-decoration: none;
  }

  &:focus {
    outline: 2px solid ${colors.white};
    outline-offset: 2px;
  }

  @media (max-width: ${breakpoints.sm}) {
    min-width: 250px;
  }
`;

export const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: ${colors.white};
  padding: ${spacing[4]} ${spacing[8]};
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: ${borderRadius.full};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightSemiBold};
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 200px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
    text-decoration: none;
  }

  &:focus {
    outline: 2px solid ${colors.white};
    outline-offset: 2px;
  }

  @media (max-width: ${breakpoints.sm}) {
    min-width: 250px;
  }
`;

export const StatsContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  padding: 0 ${spacing[4]} ${spacing[8]};
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.md}) {
    padding: 0 ${spacing[4]} ${spacing[6]};
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${spacing[4]};

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${spacing[2]};
  }
`;

export const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${borderRadius.xl};
  padding: ${spacing[4]};
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: ${breakpoints.sm}) {
    padding: ${spacing[3]};
  }
`;

export const StatNumber = styled.div`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[1]};
  color: ${colors.white};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

export const StatLabel = styled.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  font-weight: ${typography.fontWeightMedium};
  color: ${colors.white};
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${spacing[8]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.white};
  opacity: 0.8;
  cursor: pointer;

  @media (max-width: ${breakpoints.md}) {
    bottom: ${spacing[6]};
  }
`;

export const ScrollIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: ${spacing[1]};
`;

export const ScrollText = styled.div`
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeightMedium};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const MainContent = styled.div`
  background: ${colors.white};
  margin-top: -${spacing[8]};
  border-radius: ${borderRadius['2xl']} ${borderRadius['2xl']} 0 0;
  position: relative;
  z-index: 5;
  box-shadow: ${shadows.xl};
`;

// Animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
};

export const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const statsVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 1.2,
      staggerChildren: 0.1
    }
  }
};

export const statItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut"
    }
  })
};
