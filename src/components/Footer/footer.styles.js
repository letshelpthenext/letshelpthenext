import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors, spacing, typography, breakpoints, borderRadius } from '../../styles/tokens';

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, ${colors.gray800} 0%, ${colors.gray900} 100%);
  color: ${colors.white};
  padding: ${spacing[12]} 0 ${spacing[6]} 0;
  margin-top: ${spacing[16]};
`;

export const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${spacing[4]};
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${spacing[8]};
  margin-bottom: ${spacing[8]};

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing[6]};
  }

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
    text-align: center;
  }

  @media (max-width: ${breakpoints.sm}) {
    gap: ${spacing[4]};
  }
`;

export const FooterSection = styled.div`
  h3 {
    font-family: ${typography.fontSecondary};
    font-size: ${typography.fontSize.lg};
    font-weight: ${typography.fontWeightBold};
    margin-bottom: ${spacing[4]};
    color: ${colors.white};
  }

  p {
    font-size: ${typography.fontSize.sm};
    line-height: ${typography.lineHeight.relaxed};
    color: ${colors.gray300};
    margin-bottom: ${spacing[4]};
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
`;

export const FooterLink = styled(NavLink)`
  color: ${colors.gray300};
  text-decoration: none;
  font-size: ${typography.fontSize.sm};
  transition: color 0.2s ease;

  &:hover,
  &:focus {
    color: ${colors.primary};
    text-decoration: none;
  }

  &.active {
    color: ${colors.primary};
    font-weight: ${typography.fontWeightMedium};
  }
`;

export const FooterExternalLink = styled.a`
  color: ${colors.gray300};
  text-decoration: none;
  font-size: ${typography.fontSize.sm};
  transition: color 0.2s ease;

  &:hover,
  &:focus {
    color: ${colors.primary};
    text-decoration: none;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[2]};
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[2]};
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray300};

  span {
    font-weight: ${typography.fontWeightMedium};
  }
`;

export const DonateButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${colors.success} 0%, #059669 100%);
  color: ${colors.white};
  padding: ${spacing[3]} ${spacing[6]};
  border-radius: ${borderRadius.md};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeightSemiBold};
  text-decoration: none;
  transition: all 0.2s ease;
  margin-top: ${spacing[4]};

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(16, 185, 129, 0.3);
    color: ${colors.white};
    text-decoration: none;
  }

  &:focus {
    outline: 2px solid ${colors.success};
    outline-offset: 2px;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid ${colors.gray700};
  padding-top: ${spacing[6]};
  text-align: center;
  color: ${colors.gray400};
  font-size: ${typography.fontSize.sm};

  @media (max-width: ${breakpoints.md}) {
    padding-top: ${spacing[4]};
  }
`;

export const Copyright = styled.p`
  margin: 0;
  line-height: ${typography.lineHeight.normal};
`;
