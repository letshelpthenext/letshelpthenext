import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import TeamMember from '../../components/TeamMember/TeamMember';
import { colors, spacing, shadows, borderRadius, typography, breakpoints } from '../../styles/tokens';

// Import team member images
import mishma from '../../assets/mishma.png';
import kwaku from '../../assets/kwaku.JPG';
import billy from '../../assets/logo512.png';
import kim from '../../assets/kim.jpg';
import michel from '../../assets/logo512.png';

const PageContainer = styled.div`
  min-height: 90vh;
  background: linear-gradient(135deg, ${colors.white} 0%, ${colors.gray50} 100%);
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${spacing[8]} ${spacing[4]};
`;

const Hero = styled.section`
  text-align: center;
  margin-bottom: ${spacing[16]};
  padding: ${spacing[12]} 0;
  background: linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.primary} 100%);
  border-radius: ${borderRadius['2xl']};
  color: ${colors.white};
  margin-bottom: ${spacing[12]};
`;

const HeroTitle = styled.h1`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize['5xl']};
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[6]};
  line-height: ${typography.lineHeight.tight};

  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize['3xl']};
  }
`;

const HeroSubtitle = styled.p`
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

const Section = styled.section`
  margin-bottom: ${spacing[16]};
`;

const SectionTitle = styled.h2`
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

const WaysToHelpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing[8]};
  margin-bottom: ${spacing[12]};
`;

const HelpCard = styled.div`
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

const HelpIcon = styled.div`
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

const HelpTitle = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.gray900};
  margin-bottom: ${spacing[4]};
`;

const HelpDescription = styled.p`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray600};
  margin-bottom: ${spacing[6]};
`;

const DonateButton = styled.a`
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${spacing[8]};

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, ${colors.gray300}, transparent);
  margin: ${spacing[12]} 0;
`;

const GetInvolved = () => {
  const mishmaBio = `The purpose of this nonprofit organization is to support international students
  financially. Throughout my college experience, I have met incredible people who have shown me kindness,
  love, and emotional, and cognitive support. Their counsel still guides me through this day.
  We believe in paying it forward, to whoever the opportunity is presented because life can be difficult
  for international students away from home for too long and facing up financial difficulties over time.
  This organization exists to provide breathing room to those who need financial assistance.`;

  const kwakuBio = `We love serving people, especially in this space where every day we have the opportunity
  to help those in need, solve complex problems, and make a positive impact in the world. As a firm believer
  in the power of humanity and kindness, we are committed to using our skills and experience to create meaningful
  change and make the world a better place for all. We know we have limitations and cannot do it all. So, we
  welcome all the assistance we can get to continue making positive changes in the lives of many.`;

  const billyBio = `Similar to how every life experience shapes our character, a college journey can
  refine our work ethics. Through Let's Help the Next, we're excited to guide students as they take their
  initial steps into the world of higher education`;

  const kimBio = `I know the value and challenge of obtaining higher education. I believe that it is the key
  to unlocking a better future for young students and their families. "Where much is given, much is required."`;

  const michelBio = `Change can truly happen when one is courageous enough to act. Those who take action to
  better their own lives are those who will one day be able to help the next!`;

  return (
    <>
      <Helmet>
        <title>Get Involved | Let's Help The Next</title>
        <meta name="description" content="Join our mission to support international students. Donate, volunteer, or learn about our team working to provide financial assistance to students in need." />
        <meta name="keywords" content="donate, volunteer, help international students, nonprofit involvement, financial assistance" />
      </Helmet>

      <PageContainer>
        <Hero>
          <Container>
            <HeroTitle>Get Involved</HeroTitle>
            <HeroSubtitle>
              Join our mission to support international students facing financial challenges.
              Every contribution makes a difference in a student's educational journey.
            </HeroSubtitle>
          </Container>
        </Hero>

        <Container>
          <Section>
            <SectionTitle>Ways You Can Help</SectionTitle>
            <WaysToHelpGrid>
              <HelpCard>
                <HelpIcon>💝</HelpIcon>
                <HelpTitle>Make a Donation</HelpTitle>
                <HelpDescription>
                  Money is not the only commodity that is fun to give. You can give your time,
                  your expertise, your love, or simply give a smile. What does that cost?
                  The point is, none of us can ever run out of something worthwhile to give.
                </HelpDescription>
                <DonateButton
                  href="https://www.zeffy.com/en-US/donation-form/868e9c58-5d07-41f6-8daf-ca648cc9dc8a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Donate to Let's Help The Next"
                >
                  Donate Now
                </DonateButton>
              </HelpCard>

              <HelpCard>
                <HelpIcon>🤝</HelpIcon>
                <HelpTitle>Volunteer Your Time</HelpTitle>
                <HelpDescription>
                  Our objective is to finance education because "Education is the most
                  powerful weapon which you can use to change the world." - Nelson Mandela.
                  Join us in making education accessible to all international students.
                </HelpDescription>
                <DonateButton
                  href="mailto:letshelpthenext@gmail.com?subject=Volunteer Interest"
                  aria-label="Contact us about volunteering"
                >
                  Get Involved
                </DonateButton>
              </HelpCard>

              <HelpCard>
                <HelpIcon>📚</HelpIcon>
                <HelpTitle>Sponsor a Student</HelpTitle>
                <HelpDescription>
                  Make a direct impact by sponsoring a student's education. Your support
                  can cover tuition, books, housing, or other essential expenses that
                  students need to succeed in their academic journey.
                </HelpDescription>
                <DonateButton
                  href="mailto:letshelpthenext@gmail.com?subject=Student Sponsorship"
                  aria-label="Inquire about student sponsorship"
                >
                  Learn More
                </DonateButton>
              </HelpCard>
            </WaysToHelpGrid>
          </Section>

          <Divider />

          <Section>
            <SectionTitle>Meet Our Team</SectionTitle>
            <TeamGrid>
              <TeamMember
                memberImage={mishma}
                memberName="Mishma Buisson"
                memberDesignation="Founder"
                memberBio={mishmaBio}
              />
              <TeamMember
                memberImage={kwaku}
                memberName="Kwaku Appau-Nkansah"
                memberDesignation="Executive"
                memberBio={kwakuBio}
              />
              <TeamMember
                memberImage={billy}
                memberName="Bidford R. Jean-Baptiste"
                memberDesignation="Executive"
                memberBio={billyBio}
              />
              <TeamMember
                memberImage={kim}
                memberName="Kim Swallow"
                memberDesignation="Executive"
                memberBio={kimBio}
              />
              <TeamMember
                memberImage={michel}
                memberName="Michel Bergeron"
                memberDesignation="Executive"
                memberBio={michelBio}
              />
            </TeamGrid>
          </Section>
        </Container>
      </PageContainer>
    </>
  );
};

export default GetInvolved;
