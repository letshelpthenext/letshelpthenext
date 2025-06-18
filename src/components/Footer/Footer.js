import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spacing, typography, breakpoints, borderRadius } from '../../styles/tokens';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, ${colors.gray800} 0%, ${colors.gray900} 100%);
  color: ${colors.white};
  padding: ${spacing[12]} 0 ${spacing[6]} 0;
  margin-top: ${spacing[16]};
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${spacing[4]};
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${spacing[8]};
  margin-bottom: ${spacing[8]};

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
    text-align: center;
  }
`;

const FooterSection = styled.div`
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

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
`;

const FooterLink = styled(NavLink)`
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

const FooterExternalLink = styled.a`
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

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[2]};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[2]};
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray300};

  span {
    font-weight: ${typography.fontWeightMedium};
  }
`;

const DonateButton = styled.a`
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

const FooterBottom = styled.div`
  border-top: 1px solid ${colors.gray700};
  padding-top: ${spacing[6]};
  text-align: center;
  color: ${colors.gray400};
  font-size: ${typography.fontSize.sm};

  @media (max-width: ${breakpoints.md}) {
    padding-top: ${spacing[4]};
  }
`;

const Copyright = styled.p`
  margin: 0;
  line-height: ${typography.lineHeight.normal};
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer role="contentinfo">
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <h3>Let's Help The Next</h3>
            <p>
              Supporting international students through financial assistance,
              mentorship, and educational guidance. Together, we can make
              education accessible to all.
            </p>
            <DonateButton
              href="https://www.zeffy.com/en-US/donation-form/868e9c58-5d07-41f6-8daf-ca648cc9dc8a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Donate to support international students"
            >
              💝 Donate Now
            </DonateButton>
          </FooterSection>

          <FooterSection>
            <h3>Quick Links</h3>
            <FooterNav>
              <FooterLink to="/home">Home</FooterLink>
              <FooterLink to="/home/get-involved">Get Involved</FooterLink>
              <FooterLink to="/home/our-work">Our Work</FooterLink>
              <FooterLink to="/home/our-mission">Our Mission</FooterLink>
              <FooterExternalLink
                href="mailto:letshelpthenext@gmail.com"
                aria-label="Send us an email"
              >
                Contact Us
              </FooterExternalLink>
            </FooterNav>
          </FooterSection>

          <FooterSection>
            <h3>Contact Information</h3>
            <ContactInfo>
              <ContactItem>
                <span>✉️</span>
                <FooterExternalLink
                  href="mailto:letshelpthenext@gmail.com"
                  aria-label="Email us at letshelpthenext@gmail.com"
                >
                  letshelpthenext@gmail.com
                </FooterExternalLink>
              </ContactItem>
              <ContactItem>
                <span>🌍</span>
                <span>Serving international students across the U.S.</span>
              </ContactItem>
              <ContactItem>
                <span>📋</span>
                <span>501(c)(3) Nonprofit Organization</span>
              </ContactItem>
            </ContactInfo>
          </FooterSection>

          <FooterSection>
            <h3>Our Mission</h3>
            <p>
              "Education is the most powerful weapon which you can use to
              change the world." - Nelson Mandela
            </p>
            <p>
              We believe in paying it forward and creating opportunities
              for international students to succeed in their academic journey.
            </p>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            LET'S HELP THE NEXT (LHTN) &copy; {currentYear} |
            All rights reserved |
            Developed with ❤️ by Kwaku Appau-Nkansah
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
