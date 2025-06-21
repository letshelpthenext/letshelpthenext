import styled from 'styled-components';
import { colors, spacing, shadows, borderRadius, typography, breakpoints } from '../../styles/tokens';
// import media from '../../utilities/media';

export const PageContainer = styled.div`
  min-height: 90vh;
  background: linear-gradient(135deg, ${colors.white} 0%, ${colors.gray50} 100%);
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${spacing[8]} ${spacing[4]};
`;

export const Hero = styled.section`
  text-align: center;
  margin-bottom: ${spacing[16]};
  padding: ${spacing[12]} 0;
  background: linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.primary} 100%);
  border-radius: ${borderRadius['2xl']};
  color: ${colors.white};
  margin-bottom: ${spacing[12]};
`;

export const HeroTitle = styled.h1`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize['5xl']};
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[6]};
  line-height: ${typography.lineHeight.tight};

  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize['3xl']};
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${typography.fontSize.xl};
  line-height: ${typography.lineHeight.relaxed};
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize.lg};
    padding: 0 ${spacing[4]};
  }
`;

export const Section = styled.section`
  margin-bottom: ${spacing[16]};
`;

export const SectionTitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize['3xl']};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.gray900};
  margin-bottom: ${spacing[8]};
  text-align: center;

  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize['2xl']};
  }
`;

export const WaysToHelpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing[8]};
  margin-bottom: ${spacing[12]};
`;

export const HelpCard = styled.div`
  background: ${colors.white};
  padding: ${spacing[8]};
  border-radius: ${borderRadius.xl};
  box-shadow: ${shadows.md};
  border: 1px solid ${colors.gray200};
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.lg};
  }
`;

export const HelpIcon = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  border-radius: ${borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${spacing[6]} auto;
  font-size: ${typography.fontSize['2xl']};
  color: ${colors.white};
`;

export const HelpTitle = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.gray900};
  margin-bottom: ${spacing[4]};
`;

export const HelpDescription = styled.p`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray600};
  margin-bottom: ${spacing[6]};
`;

export const DonateButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${colors.success} 0%, #059669 100%);
  color: ${colors.white};
  padding: ${spacing[4]} ${spacing[8]};
  border-radius: ${borderRadius.lg};
  font-weight: ${typography.fontWeightSemiBold};
  font-size: ${typography.fontSize.lg};
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: ${shadows.md};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.lg};
    color: ${colors.white};
    text-decoration: none;
  }

  &:focus {
    outline: 2px solid ${colors.success};
    outline-offset: 2px;
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${spacing[8]};

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
  }
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, ${colors.gray300}, transparent);
  margin: ${spacing[12]} 0;
`;
