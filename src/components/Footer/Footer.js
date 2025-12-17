import {
  FooterContainer,
  FooterContent,
  FooterGrid,
  FooterSection,
  DonateButton,
  FooterNav,
  FooterLink,
  FooterExternalLink,
  ContactItem,
  ContactInfo,
  FooterBottom,
  Copyright,
} from './footer.styles';

const Footer = () => {
  // const currentYear = new Date().getFullYear();

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterContainer role="contentinfo">
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <h3>Let's Help The Next</h3>
            <p>
              Supporting international students through financial assistance, mentorship, and
              educational guidance. Together, we can make education accessible to all.
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
              <FooterLink to="/home" end onClick={handleLinkClick}>Home</FooterLink>
              <FooterLink to="/home/get-involved" onClick={handleLinkClick}>Get Involved</FooterLink>
              <FooterLink to="/home/our-work" onClick={handleLinkClick}>Our Work</FooterLink>
              <FooterLink to="/home/our-mission" onClick={handleLinkClick}>Our Mission</FooterLink>
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
              "Education is the most powerful weapon which you can use to change the world." -
              Nelson Mandela
            </p>
            <p>
              We believe in paying it forward and creating opportunities for international students
              to succeed in their academic journey.
            </p>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            LET'S HELP THE NEXT (LHTN) &copy; 2022 | All rights reserved | Developed with ❤️ by
            Kwaku Appau-Nkansah
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
