import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spacing, shadows, borderRadius, typography, breakpoints } from '../../styles/tokens';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import AnimatedHamburger from '../AnimatedHamburger/AnimatedHamburger';
import Logo from '../../assets/whiteLogo.png';

const HeaderWrapper = styled.header`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  box-shadow: ${shadows.md};
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${spacing[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4rem;

  @media (max-width: ${breakpoints.sm}) {
    padding: 0 ${spacing[3]};
    min-height: 3.5rem;
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: 0 ${spacing[2]};
  }
`;

const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const LogoImage = styled.img`
  height: 2.5rem;
  width: auto;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.sm}) {
    height: 2rem;
  }

  @media (max-width: ${breakpoints.xs}) {
    height: 1.75rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
`;

const NavToggleWrapper = styled.div`
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: block;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: ${spacing[6]};

  @media (max-width: ${breakpoints.lg}) {
    gap: ${spacing[4]};
  }

  @media (max-width: ${breakpoints.md}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${colors.primary};
    flex-direction: column;
    padding: ${spacing[4]};
    box-shadow: ${shadows.lg};
    transform: translateY(${props => props.isOpen ? '0' : '-100%'});
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
    gap: ${spacing[4]};
  }
`;

const NavItem = styled(NavLink)`
  color: ${colors.white};
  text-decoration: none;
  font-weight: ${typography.fontWeightMedium};
  font-size: ${typography.fontSize.base};
  padding: ${spacing[2]} ${spacing[3]};
  border-radius: ${borderRadius.md};
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: ${colors.white};
    background-color: rgba(255, 255, 255, 0.1);
    text-decoration: none;
    transform: translateY(-1px);
  }

  &:focus {
    outline: 2px solid ${colors.white};
    outline-offset: 2px;
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: ${typography.fontWeightSemiBold};
  }

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    text-align: center;
    padding: ${spacing[3]} ${spacing[4]};
  }
`;

const DonateButton = styled.a`
  background: linear-gradient(135deg, ${colors.error} 0%, #DC2626 100%);
  color: ${colors.white};
  text-decoration: none;
  font-weight: ${typography.fontWeightSemiBold};
  font-size: ${typography.fontSize.sm};
  padding: ${spacing[3]} ${spacing[4]};
  border-radius: ${borderRadius.lg};
  transition: all 0.2s ease;
  white-space: nowrap;
  border: 2px solid transparent;

  &:hover {
    color: ${colors.white};
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: ${shadows.lg};
    border-color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    outline: 2px solid ${colors.white};
    outline-offset: 2px;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    text-align: center;
    margin-top: ${spacing[2]};
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <Container>
        <LogoLink to="/home" onClick={closeMenu}>
          <LogoImage
            src={Logo}
            alt="Let's Help The Next - Supporting International Students"
            loading="lazy"
          />
        </LogoLink>

        <RightSection>
          <ThemeToggle />

          <NavToggleWrapper>
            <AnimatedHamburger
              isOpen={isMenuOpen}
              onClick={toggleMenu}
              color={colors.white}
              showText={false}
              ariaLabel={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            />
          </NavToggleWrapper>
        </RightSection>

        <NavMenu isOpen={isMenuOpen}>
          <NavItem to="/home/get-involved" onClick={closeMenu}>
            Get Involved
          </NavItem>
          <NavItem to="/home/our-work" onClick={closeMenu}>
            Our Work
          </NavItem>
          <NavItem to="/home/our-mission" onClick={closeMenu}>
            Our Mission
          </NavItem>
          <DonateButton
            href="https://www.zeffy.com/en-US/donation-form/868e9c58-5d07-41f6-8daf-ca648cc9dc8a"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            aria-label="Donate to Let's Help The Next"
          >
            Donate Now
          </DonateButton>
        </NavMenu>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
