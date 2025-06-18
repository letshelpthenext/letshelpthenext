import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { colors, spacing, shadows, borderRadius, typography, breakpoints } from '../../styles/tokens';
import visaImage from '../../assets/visa.jpeg';

const OurWorkSimple = () => {
  return (
    <>
      <Helmet>
        <title>Our Work - Let's Help The Next</title>
        <meta name="description" content="Learn about our initiatives supporting international students through scholarships, mentorship, and comprehensive support programs at BYU-I and beyond." />
      </Helmet>

      <Container>
        <Section>
          <Title>Our Work</Title>
          <Subtitle>Empowering international students through comprehensive support, scholarships, and mentorship programs</Subtitle>
        </Section>

        <ContentCard>
          <CardTitle>
            <Icon>🎓</Icon>
            A New Direction for Let's Help the Next
          </CardTitle>
          <CardSubtitle>Offering needs-based scholarships to International Students at BYU-I and Beyond</CardSubtitle>
          <Emphasis>Emphasizing Support for international students from The Church Of Jesus Christ of Latter-day Saints</Emphasis>
          <Text>
            Let's Help the Next is thrilled to announce an exciting new direction in our efforts to support international students,
            currently with a particular focus on those studying at Brigham Young University-Idaho (BYU-I). Three of the founding
            Board members are alumnus of BYU-I and know the needs that international students face. With this in mind, the Board
            has unanimously agreed to focus our efforts on helping students who need help to continue their education.
          </Text>
        </ContentCard>

        <TwoColumnGrid>
          <ContentCard>
            <CardTitle>
              <Icon>💡</Icon>
              Understanding the Need
            </CardTitle>
            <Text>
              International students face a myriad of challenges when they embark on their educational journey far from home.
              From navigating cultural differences to managing financial constraints, the transition can be overwhelming. For
              those who have served missions, these challenges are often compounded by the readjustment to academic life and
              the balancing act between their spiritual commitments and scholastic responsibilities.
            </Text>
          </ContentCard>

          <ContentCard>
            <CardTitle>
              <Icon>🎯</Icon>
              The Importance of Our Mission
            </CardTitle>
            <Text>
              Our mission is to provide a support system that addresses the specific needs of these students. By focusing
              on church members, and particularly returned missionaries, we acknowledge their dedication and service while
              ensuring they have the resources and guidance needed to thrive academically and personally.
            </Text>
          </ContentCard>
        </TwoColumnGrid>

        <Section>
          <SectionTitle>Key Initiatives</SectionTitle>
          <InitiativesGrid>
            <InitiativeCard>
              <InitiativeIcon>🤝</InitiativeIcon>
              <InitiativeTitle>Mentorship and Peer Support</InitiativeTitle>
              <Text>
                One of our core initiatives was to establish a relationship with the International Student Office at BYU-I
                which offers mentorship programs pairing international students with other students who have successfully
                navigated their educational journey.
              </Text>
            </InitiativeCard>

            <InitiativeCard>
              <InitiativeIcon>💰</InitiativeIcon>
              <InitiativeTitle>Financial Assistance and Scholarships</InitiativeTitle>
              <Text>
                Understanding the financial burdens that many international students face, we are introducing targeted
                scholarships and financial assistance programs. These resources aim to alleviate some of the economic
                pressures, allowing students to focus more on their studies.
              </Text>
              <StatsBox>
                <StatItem>
                  <StatNumber>20</StatNumber>
                  <StatLabel>Applications in 2024</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber>$8,985</StatNumber>
                  <StatLabel>Total Donated</StatLabel>
                </StatItem>
              </StatsBox>
            </InitiativeCard>

            <InitiativeCard>
              <InitiativeIcon>🔄</InitiativeIcon>
              <InitiativeTitle>Service Opportunities to Pay It Forward</InitiativeTitle>
              <Text>
                Giving back is the cornerstone of Let's Help the Next's mission. We prioritize applicants who demonstrate
                that they have done all they can to help themselves, by working part-time jobs, seeking support from their
                sponsor, and carefully managing their funds.
              </Text>
            </InitiativeCard>
          </InitiativesGrid>
        </Section>

        <Section>
          <SectionTitle>Your Journey to Success</SectionTitle>

          <ProcessCard>
            <ProcessHeader>
              <ProcessNumber>1</ProcessNumber>
              <ProcessTitle>Research & Preparation</ProcessTitle>
            </ProcessHeader>
            <Text>
              The difference between successfully going through the process of attending university in the United States
              is doing your own research. Finding a university close to family or friends will brighten the journey.
            </Text>
            <CheckList>
              <CheckItem>🏫 Find a university close to family or friends</CheckItem>
              <CheckItem>📄 Translate high school transcript to English</CheckItem>
              <CheckItem>📋 Gather required documents</CheckItem>
              <CheckItem>📊 Take necessary admission tests</CheckItem>
              <CheckItem>💵 Provide financial proof</CheckItem>
            </CheckList>
          </ProcessCard>

          <VisaCard>
            <VisaContent>
              <ProcessHeader>
                <ProcessNumber>2</ProcessNumber>
                <ProcessTitle>Visa Application Process</ProcessTitle>
              </ProcessHeader>
              <Text>
                After being accepted by a school, the next process is applying for a student visa. Since qualifying for
                a student visa is a courtesy, giving oneself the best shot may be the only hope. As a result of providing
                assistance to applicants in different countries, we have learned that each region comes with its difficulties.
              </Text>
            </VisaContent>
            <VisaImageContainer>
              <VisaImage src={visaImage} alt="US Student Visa" />
            </VisaImageContainer>
          </VisaCard>
        </Section>

        <ContentCard>
          <CardTitle>
            <Icon>❤️</Icon>
            Our Commitment to You
          </CardTitle>
          <Text>
            Our Mentorship program does not provide sponsorship; however, we are present with the applicant for every
            application, every decision, and every phone call as we advocate on their behalf. We serve by providing love
            and support. We look for host families, and we provide financial assistance for tuition and student life
            expenses to the most in need.
          </Text>
          <Text>
            When our mentees arrive in the States, helping them have the best American experience is what we aim for.
            Visiting, exploring tastes, sharing culture, and learning from others bring the best acquaintance and connections.
          </Text>
        </ContentCard>

        <CallToActionSection>
          <CTATitle>Looking Ahead</CTATitle>
          <Text style={{ color: colors.white, marginBottom: spacing[8] }}>
            As we embark on this new journey, we are committed to continuously assessing and refining our programs to
            better serve international students at BYU-I and beyond. We invite you to join us in this mission.
          </Text>
          <CTAButtons>
            <CTAButton href="/get-involved">Get Involved Today</CTAButton>
            <CTAButton href="https://www.zeffy.com/en-US/donation-form/868e9c58-5d07-41f6-8daf-ca648cc9dc8a"
                      target="_blank" rel="noopener noreferrer" secondary>
              Make a Donation
            </CTAButton>
          </CTAButtons>
        </CallToActionSection>
      </Container>
    </>
  );
};

// Styled Components
const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${spacing[8]} ${spacing[6]};

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]} ${spacing[4]};
  }
`;

const Section = styled.section`
  margin-bottom: ${spacing[12]};
`;

const Title = styled.h1`
  font-family: ${typography.fontSecondary};
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  text-align: center;
  margin-bottom: ${spacing[4]};
  line-height: ${typography.lineHeight.tight};
`;

const Subtitle = styled.p`
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  color: ${colors.gray600};
  text-align: center;
  line-height: ${typography.lineHeight.relaxed};
  font-weight: ${typography.fontWeightMedium};
  max-width: 800px;
  margin: 0 auto;
`;

const ContentCard = styled.div`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  margin-bottom: ${spacing[8]};
  box-shadow: ${shadows.lg};
  border: 1px solid ${colors.gray100};

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};
  }
`;

const CardTitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin-bottom: ${spacing[4]};
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
  line-height: ${typography.lineHeight.tight};
`;

const CardSubtitle = styled.h3`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.secondary};
  margin-bottom: ${spacing[4]};
  line-height: ${typography.lineHeight.snug};
`;

const Icon = styled.span`
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
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

const Text = styled.p`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray700};
  margin-bottom: ${spacing[4]};

  &:last-child {
    margin-bottom: 0;
  }
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${spacing[8]};
  margin-bottom: ${spacing[8]};

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
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

const InitiativesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${spacing[8]};

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
  }
`;

const InitiativeCard = styled.div`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  box-shadow: ${shadows.md};
  border: 1px solid ${colors.gray100};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

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

const StatsBox = styled.div`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  padding: ${spacing[6]};
  border-radius: ${borderRadius.lg};
  margin-top: ${spacing[6]};
  display: flex;
  justify-content: space-around;
  gap: ${spacing[4]};

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[2]};
`;

const StatLabel = styled.div`
  font-size: ${typography.fontSize.sm};
  opacity: 0.9;
  font-weight: ${typography.fontWeightMedium};
`;

const ProcessCard = styled.div`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  margin-bottom: ${spacing[8]};
  box-shadow: ${shadows.md};
  border: 1px solid ${colors.gray100};

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};
  }
`;

const ProcessHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[4]};
  margin-bottom: ${spacing[6]};

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProcessNumber = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightBold};
  box-shadow: ${shadows.md};
  flex-shrink: 0;
`;

const ProcessTitle = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin: 0;
`;

const CheckList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: ${spacing[6]};
`;

const CheckItem = styled.li`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray700};
  margin-bottom: ${spacing[3]};
  padding-left: ${spacing[2]};

  &:last-child {
    margin-bottom: 0;
  }
`;

const VisaCard = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${spacing[8]};
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  box-shadow: ${shadows.md};
  border: 1px solid ${colors.gray100};

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
  }

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};
  }
`;

const VisaContent = styled.div``;

const VisaImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.lg}) {
    order: -1;
  }
`;

const VisaImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: ${borderRadius.lg};
  object-fit: cover;
  box-shadow: ${shadows.md};
`;

const CallToActionSection = styled.div`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  padding: ${spacing[12]} ${spacing[8]};
  border-radius: ${borderRadius['2xl']};
  text-align: center;
  box-shadow: ${shadows.xl};

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[8]} ${spacing[6]};
  }
`;

const CTATitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[6]};
  line-height: ${typography.lineHeight.tight};
`;

const CTAButtons = styled.div`
  display: flex;
  gap: ${spacing[4]};
  justify-content: center;
  flex-wrap: wrap;

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

export default OurWorkSimple;
