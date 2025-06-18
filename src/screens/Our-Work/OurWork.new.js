import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { colors, spacing, shadows, borderRadius, typography, breakpoints } from '../../styles/tokens';
import visaImage from '../../assets/visa.jpeg';

const OurWork = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Work - Let's Help The Next</title>
        <meta name="description" content="Learn about our initiatives supporting international students through scholarships, mentorship, and comprehensive support programs at BYU-I and beyond." />
        <meta property="og:title" content="Our Work - Let's Help The Next" />
        <meta property="og:description" content="Discover how we're making education accessible through scholarships, mentorship, and support for international students." />
      </Helmet>

      <PageContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Container>
          {/* Hero Section */}
          <HeroSection variants={itemVariants}>
            <HeroContent>
              <HeroTitle>Our Work</HeroTitle>
              <HeroSubtitle>
                Empowering international students through comprehensive support,
                scholarships, and mentorship programs
              </HeroSubtitle>
            </HeroContent>
          </HeroSection>

          {/* Main Content */}
          <ContentSection variants={itemVariants}>
            <SectionCard>
              <CardHeader>
                <CardIcon>🎓</CardIcon>
                <CardTitle>A New Direction for Let's Help the Next</CardTitle>
              </CardHeader>
              <CardSubtitle>
                Offering needs-based scholarships to International Students at BYU-I and Beyond
              </CardSubtitle>
              <Emphasis>
                Emphasizing Support for international students from The Church Of
                Jesus Christ of Latter-day Saints
              </Emphasis>
              <CardContent>
                <p>
                  Let's Help the Next is thrilled to announce an exciting new direction
                  in our efforts to support international students, currently with a
                  particular focus on those studying at Brigham Young University-Idaho
                  (BYU-I). Three of the founding Board members are alumnus of BYU-I and
                  know the needs that international students face. With this in mind,
                  the Board has unanimously agreed to focus our efforts on helping
                  students who need help to continue their education.
                </p>
              </CardContent>
            </SectionCard>

            <SectionCard variants={itemVariants}>
              <CardHeader>
                <CardIcon>💡</CardIcon>
                <CardTitle>Understanding the Need</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  International students face a myriad of challenges when they embark on
                  their educational journey far from home. From navigating cultural
                  differences to managing financial constraints, the transition can be
                  overwhelming. For those who have served missions, these challenges are
                  often compounded by the readjustment to academic life and the
                  balancing act between their spiritual commitments and scholastic
                  responsibilities.
                </p>
              </CardContent>
            </SectionCard>

            <SectionCard variants={itemVariants}>
              <CardHeader>
                <CardIcon>🎯</CardIcon>
                <CardTitle>The Importance of Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our mission is to provide a support system that addresses the specific
                  needs of these students. By focusing on church members, and
                  particularly returned missionaries, we acknowledge their dedication
                  and service while ensuring they have the resources and guidance needed
                  to thrive academically and personally. Our new direction is rooted in
                  the belief that supporting these students enriches not only their
                  lives but also the broader community at BYU-I, mission of the Church,
                  and will positively affect future generations of faithful followers of
                  Jesus Christ.
                </p>
              </CardContent>
            </SectionCard>
          </ContentSection>

          {/* Key Initiatives */}
          <InitiativesSection variants={itemVariants}>
            <SectionTitle>Key Initiatives</SectionTitle>

            <InitiativesGrid>
              <InitiativeCard variants={itemVariants}>
                <InitiativeIcon>🤝</InitiativeIcon>
                <InitiativeTitle>Mentorship and Peer Support</InitiativeTitle>
                <InitiativeContent>
                  <p>
                    One of our core initiatives was to establish a relationship with the
                    International Student Office at BYU-I which offers mentorship programs
                    pairing international students with other students who have
                    successfully navigated their educational journey. This peer support
                    provides guidance, foster connections, and create a sense of
                    community, helping students feel less isolated and more integrated
                    into campus life.
                  </p>
                </InitiativeContent>
              </InitiativeCard>

              <InitiativeCard variants={itemVariants}>
                <InitiativeIcon>💰</InitiativeIcon>
                <InitiativeTitle>Financial Assistance and Scholarships</InitiativeTitle>
                <InitiativeContent>
                  <p>
                    Understanding the financial burdens that many international students
                    face, we are introducing targeted scholarships and financial
                    assistance programs. These resources aim to alleviate some of the
                    economic pressures, allowing students to focus more on their studies
                    and less on financial worries.
                  </p>
                  <HighlightBox>
                    <HighlightTitle>2024 Impact</HighlightTitle>
                    <ImpactStats>
                      <ImpactStat>
                        <StatNumber>20</StatNumber>
                        <StatLabel>Applications</StatLabel>
                      </ImpactStat>
                      <ImpactStat>
                        <StatNumber>$8,985</StatNumber>
                        <StatLabel>Donated</StatLabel>
                      </ImpactStat>
                    </ImpactStats>
                  </HighlightBox>
                </InitiativeContent>
              </InitiativeCard>

              <InitiativeCard variants={itemVariants}>
                <InitiativeIcon>🔄</InitiativeIcon>
                <InitiativeTitle>Service Opportunities to Pay It Forward</InitiativeTitle>
                <InitiativeContent>
                  <p>
                    Giving back is the cornerstone of Let's Help the Next's mission. As we
                    consider applicants, we prioritize those who demonstrate that they
                    have done all they can to help themselves, by working part-time jobs,
                    seeking support from their sponsor, applying for aid and carefully
                    managing their funds in a responsible manner.
                  </p>
                </InitiativeContent>
              </InitiativeCard>
            </InitiativesGrid>
          </InitiativesSection>

          {/* Process Section */}
          <ProcessSection variants={itemVariants}>
            <SectionTitle>Your Journey to Success</SectionTitle>

            <ProcessGrid>
              <ProcessStep variants={itemVariants}>
                <StepNumber>1</StepNumber>
                <StepContent>
                  <StepTitle>Research & Preparation</StepTitle>
                  <StepDescription>
                    The difference between successfully going through the process of
                    attending university in the United States is doing your own research.
                  </StepDescription>
                  <StepList>
                    <StepListItem>🏫 Find a university close to family or friends</StepListItem>
                    <StepListItem>📄 Translate high school transcript to English</StepListItem>
                    <StepListItem>📋 Gather required documents</StepListItem>
                    <StepListItem>📊 Take necessary admission tests</StepListItem>
                    <StepListItem>💵 Provide financial proof</StepListItem>
                  </StepList>
                </StepContent>
              </ProcessStep>

              <VisaSection variants={itemVariants}>
                <VisaContent>
                  <StepNumber>2</StepNumber>
                  <StepContent>
                    <StepTitle>Visa Application Process</StepTitle>
                    <StepDescription>
                      After being accepted by a school, the next process is applying for a
                      student visa. Since qualifying for a student visa is a courtesy, giving
                      oneself the best shot may be the only hope.
                    </StepDescription>
                    <p>
                      As a result of providing assistance to applicants in different countries,
                      we have learned that each region comes with its difficulties. The
                      social-political situation of your home country and your financial
                      situation contribute to determining the probability of being granted a visa.
                    </p>
                  </StepContent>
                </VisaContent>
                <VisaImageWrapper>
                  <VisaImage src={visaImage} alt="US Student Visa" />
                </VisaImageWrapper>
              </VisaSection>
            </ProcessGrid>
          </ProcessSection>

          {/* Support Section */}
          <SupportSection variants={itemVariants}>
            <SectionCard>
              <CardHeader>
                <CardIcon>❤️</CardIcon>
                <CardTitle>Our Commitment to You</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our Mentorship program does not provide sponsorship; however, we are
                  present with the applicant for every application, every decision, and
                  every phone call as we advocate on their behalf. We serve by providing
                  love and support. We look for host families, and we provide financial
                  assistance for tuition and student life expenses to the most in need.
                </p>
                <p>
                  When our mentees arrive in the States, helping them have the best
                  American experience is what we aim for. Visiting, exploring tastes,
                  sharing culture, and learning from others bring the best acquaintance
                  and connections.
                </p>
              </CardContent>
            </SectionCard>
          </SupportSection>

          {/* Looking Ahead */}
          <FutureSection variants={itemVariants}>
            <FutureContent>
              <FutureTitle>Looking Ahead</FutureTitle>
              <p>
                As we embark on this new journey, we are committed to continuously
                assessing and refining our programs to better serve international
                students at BYU-I and beyond. We invite you to join us in this
                mission. Whether through volunteering, donations, or simply spreading
                the word, your support is invaluable in making a difference in the
                lives of these students.
              </p>
              <CallToAction>
                <CTAButton href="/get-involved">Get Involved Today</CTAButton>
                <CTAButton href="https://www.zeffy.com/en-US/donation-form/868e9c58-5d07-41f6-8daf-ca648cc9dc8a" target="_blank" rel="noopener noreferrer" secondary>
                  Make a Donation
                </CTAButton>
              </CallToAction>
            </FutureContent>
          </FutureSection>
        </Container>
      </PageContainer>
    </>
  );
};

// Styled Components
const PageContainer = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(135deg, ${colors.gray50} 0%, ${colors.white} 100%);
  padding: ${spacing[8]} 0;

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]} 0;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${spacing[6]};

  @media (max-width: ${breakpoints.md}) {
    padding: 0 ${spacing[4]};
  }
`;

const HeroSection = styled(motion.section)`
  text-align: center;
  margin-bottom: ${spacing[12]};
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-family: ${typography.fontSecondary};
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin-bottom: ${spacing[4]};
  line-height: ${typography.lineHeight.tight};
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  color: ${colors.gray600};
  line-height: ${typography.lineHeight.relaxed};
  font-weight: ${typography.fontWeightMedium};
`;

const ContentSection = styled(motion.section)`
  margin-bottom: ${spacing[12]};
`;

const SectionCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  margin-bottom: ${spacing[8]};
  box-shadow: ${shadows.lg};
  border: 1px solid ${colors.gray100};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.xl};
  }

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[4]};
  margin-bottom: ${spacing[4]};
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const CardTitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin: 0;
  line-height: ${typography.lineHeight.tight};
`;

const CardSubtitle = styled.h3`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.secondary};
  margin-bottom: ${spacing[4]};
  line-height: ${typography.lineHeight.snug};
`;

const Emphasis = styled.p`
  font-style: italic;
  color: ${colors.gray600};
  font-size: ${typography.fontSize.lg};
  margin-bottom: ${spacing[6]};
  padding: ${spacing[4]};
  background: ${colors.gray50};
  border-left: 4px solid ${colors.secondary};
  border-radius: ${borderRadius.md};
`;

const CardContent = styled.div`
  p {
    font-size: ${typography.fontSize.base};
    line-height: ${typography.lineHeight.relaxed};
    color: ${colors.gray700};
    margin-bottom: ${spacing[4]};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const SectionTitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  text-align: center;
  margin-bottom: ${spacing[8]};
  line-height: ${typography.lineHeight.tight};
`;

const InitiativesSection = styled(motion.section)`
  margin-bottom: ${spacing[12]};
`;

const InitiativesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${spacing[8]};

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
  }
`;

const InitiativeCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  box-shadow: ${shadows.md};
  border: 1px solid ${colors.gray100};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.xl};
  }

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};
  }
`;

const InitiativeIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${spacing[4]};
  text-align: center;
`;

const InitiativeTitle = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  text-align: center;
  margin-bottom: ${spacing[4]};
  line-height: ${typography.lineHeight.snug};
`;

const InitiativeContent = styled.div`
  p {
    font-size: ${typography.fontSize.base};
    line-height: ${typography.lineHeight.relaxed};
    color: ${colors.gray700};
    margin-bottom: ${spacing[4]};
  }
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  padding: ${spacing[6]};
  border-radius: ${borderRadius.lg};
  margin-top: ${spacing[6]};
`;

const HighlightTitle = styled.h4`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[4]};
  text-align: center;
`;

const ImpactStats = styled.div`
  display: flex;
  justify-content: space-around;
  gap: ${spacing[4]};
`;

const ImpactStat = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[2]};
`;

const StatLabel = styled.div`
  font-size: ${typography.fontSize.sm};
  opacity: 0.9;
  font-weight: ${typography.fontWeightMedium};
`;

const ProcessSection = styled(motion.section)`
  margin-bottom: ${spacing[12]};
`;

const ProcessGrid = styled.div`
  display: grid;
  gap: ${spacing[8]};
`;

const ProcessStep = styled(motion.div)`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${spacing[6]};
  align-items: start;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeightBold};
  box-shadow: ${shadows.lg};
  flex-shrink: 0;

  @media (max-width: ${breakpoints.md}) {
    margin: 0 auto ${spacing[4]} auto;
  }
`;

const StepContent = styled.div`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  box-shadow: ${shadows.md};
  border: 1px solid ${colors.gray100};

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};
  }
`;

const StepTitle = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin-bottom: ${spacing[4]};
`;

const StepDescription = styled.p`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray700};
  margin-bottom: ${spacing[6]};
`;

const StepList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StepListItem = styled.li`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray700};
  margin-bottom: ${spacing[3]};
  padding-left: ${spacing[2]};

  &:last-child {
    margin-bottom: 0;
  }
`;

const VisaSection = styled(motion.div)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${spacing[8]};
  align-items: start;

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
  }
`;

const VisaContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${spacing[6]};
  align-items: start;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const VisaImageWrapper = styled.div`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[6]};
  box-shadow: ${shadows.md};
  border: 1px solid ${colors.gray100};
  align-self: start;

  @media (max-width: ${breakpoints.lg}) {
    order: -1;
  }
`;

const VisaImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${borderRadius.lg};
  object-fit: cover;
`;

const SupportSection = styled(motion.section)`
  margin-bottom: ${spacing[12]};
`;

const FutureSection = styled(motion.section)`
  text-align: center;
`;

const FutureContent = styled.div`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  padding: ${spacing[12]} ${spacing[8]};
  border-radius: ${borderRadius['2xl']};
  box-shadow: ${shadows.xl};

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[8]} ${spacing[6]};
  }
`;

const FutureTitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[6]};
  line-height: ${typography.lineHeight.tight};
`;

const CallToAction = styled.div`
  display: flex;
  gap: ${spacing[4]};
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${spacing[8]};

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing[4]} ${spacing[8]};
  border-radius: ${borderRadius.lg};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightSemiBold};
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 200px;
  border: 2px solid ${colors.white};

  ${props => props.secondary ? `
    background: transparent;
    color: ${colors.white};

    &:hover {
      background: ${colors.white};
      color: ${colors.primary};
      text-decoration: none;
    }
  ` : `
    background: ${colors.white};
    color: ${colors.primary};

    &:hover {
      background: transparent;
      color: ${colors.white};
      text-decoration: none;
      transform: translateY(-2px);
    }
  `}

  &:focus {
    outline: 2px solid ${colors.white};
    outline-offset: 2px;
  }
`;

export default OurWork;
