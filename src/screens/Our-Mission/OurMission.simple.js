import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { colors, spacing, shadows, borderRadius, typography, breakpoints } from '../../styles/tokens';

const OurMissionSimple = () => {
  const testimonials = [
    {
      id: 1,
      testimony: "I was trying to study abroad three years ago, but unsuccessfully. That is when I met Mishma through my cousin. I went to her, and I asked her if she could help me apply for a university where she is, and she accepted to help me. One month after, we started the application and paperwork. It was challenging for me and for her given the situation in which my country was at this time. We first started with getting me documents like passport, pictures, etc. After I got my passport, we applied for an English program at the University of Utah. Two weeks after, we received a letter that said that I got accepted to the program. My family and I were super happy. After that, we had scheduled an appointment with the US embassy for September, but because of the situation of the country, my appointment was reported for December. I was very stressed because I was worried that the situation of the country would have affected my chance to get my visa. Notwithstanding the situation of the country, I stayed positive. In December, I received my student visa. I was very happy. Two weeks later, I flew to Idaho where I met Mishma. My number one concern at this time was to find a place where to live. Mishma with her contacts found me a host family which today has become my family in the US. A year later, after I got transferred to BYU-I, Mishma secretly opened a GoFundMe for me which helped me get started as a college student. Today, I am studying Business Operations, but want to change my major to Software Engineering.",
      author: "Keith Dana Pierre-Louis",
      program: "Business Operations → Software Engineering",
      country: "Haiti",
      flag: "🇭🇹"
    },
    {
      id: 2,
      testimony: "I met Mishma a year ago through a friend. My friend Kim introduced me to her and asked if she could help me as I was applying for school. After getting the school admission, I was super worried that I was not going to have a visa since I had no idea on how to go about it. Fortunately I had Mishma who helped me with the application and helped me prepare for the visa interviews. I was approved for the visa and that was the happiest moment of my life though I was still worried about one thing. Despite me having a visa that would allow me to arrive in the United States, I still did not have money to go to school. However, guess what? My friends Kim and Mishma helped me raise money through GoFundMe. It's been a long journey, full of ups and downs, but I am so excited to tell you all that we made it and I am finally in the United States, starting school next week.",
      author: "Divine Irakoze",
      program: "University Studies",
      country: "Burundi",
      flag: "🇧🇮"
    },
    {
      id: 3,
      testimony: "My experience with Let's Help the Next has been very satisfying. Regarding the admission and integration process to the university, she helped me find an available university where there was an ongoing session opening. In addition, she accompanied me in all the administrative procedures related to registration, university admission and visa application procedures. Regarding the latter, she helped me fill out the visa application form and collect documents. Then, she had planned my appointment at the Embassy herself. In fact, it was a very good experience, I appreciate her dedication and rigor in supporting my university admission last year (2021).",
      originalTestimony: "Mon expérience avec ... a été très satisfaisante. En ce qui concerne, le processus d'admission et d'intégration à l'université, elle m'a aidée à trouver une université disponible où il y avait une session en cours d'ouverture. En outre, elle m'a accompagnée dans toutes les démarches administratives liées aux inscriptions, l'admission à l'université et les procédures de demande visa. Concernant ce dernier, elle m'a aidé à remplir le formulaire de demande de visa et la collecte des documents. Puis, elle avait planifié elle-même mon rendez-vous à l'Ambassade. En fait, C'était une très bonne expérience, j'apprécie son dévouement et sa rigueur dans l'accompagnement de mon admission à l'université l'année dernière ( 2021).",
      author: "Marie Dayana",
      program: "University Studies",
      country: "Democratic Republic of Congo",
      flag: "🇨🇩"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Mission - Let's Help The Next</title>
        <meta name="description" content="Our mission is to support vibrant individuals with potential and the will to gain an education to create something extraordinary. Read inspiring testimonials from students we've helped." />
      </Helmet>

      <Container>
        <HeroSection>
          <Title>Our Mission</Title>
          <Subtitle>Empowering vibrant individuals to achieve their educational dreams and create something extraordinary</Subtitle>
        </HeroSection>

        <MissionVisionGrid>
          <MissionCard>
            <CardIcon>🎯</CardIcon>
            <CardTitle>Our Mission</CardTitle>
            <CardText>
              Our mission is to help vibrant and beautiful individuals full of potential who have the will to gain an education
              to create something extraordinary. We believe that education is the key to unlocking human potential and creating
              positive change in the world.
            </CardText>
            <HighlightBox>
              We support students through mentorship, financial assistance, and comprehensive guidance throughout their educational journey.
            </HighlightBox>
          </MissionCard>

          <VisionCard>
            <CardIcon>🌟</CardIcon>
            <CardTitle>Our Vision</CardTitle>
            <CardText>
              We aim to support education by mentoring, providing aid, and inspiring those who have received help to pay it forward.
              Our vision is a world where geographical and financial barriers don't prevent talented individuals from accessing quality education.
            </CardText>
            <VisionList>
              <VisionItem>🤝 Mentorship and guidance</VisionItem>
              <VisionItem>💰 Financial assistance</VisionItem>
              <VisionItem>🔄 Pay-it-forward culture</VisionItem>
              <VisionItem>🌍 Global educational access</VisionItem>
            </VisionList>
          </VisionCard>
        </MissionVisionGrid>

        <Section>
          <SectionTitle>Our Impact</SectionTitle>
          <StatsGrid>
            <StatCard>
              <StatNumber>20+</StatNumber>
              <StatLabel>Students Helped</StatLabel>
              <StatDescription>International students supported in 2024</StatDescription>
            </StatCard>
            <StatCard>
              <StatNumber>$8,985</StatNumber>
              <StatLabel>Financial Aid</StatLabel>
              <StatDescription>Total donations distributed in 2024</StatDescription>
            </StatCard>
            <StatCard>
              <StatNumber>5+</StatNumber>
              <StatLabel>Countries</StatLabel>
              <StatDescription>Students from different nations</StatDescription>
            </StatCard>
            <StatCard>
              <StatNumber>100%</StatNumber>
              <StatLabel>Success Rate</StatLabel>
              <StatDescription>Students who received visas</StatDescription>
            </StatCard>
          </StatsGrid>
        </Section>

        <Section>
          <SectionTitle>Success Stories</SectionTitle>
          <TestimonialSubtitle>
            Hear from the students whose lives have been transformed through education
          </TestimonialSubtitle>

          <TestimonialsContainer>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id}>
                <TestimonialContent>
                  <QuoteIcon>"</QuoteIcon>
                  <TestimonialText>
                    {testimonial.testimony}
                  </TestimonialText>
                  {testimonial.originalTestimony && (
                    <OriginalQuote>
                      <OriginalQuoteLabel>Original (French):</OriginalQuoteLabel>
                      <OriginalQuoteText>"{testimonial.originalTestimony}"</OriginalQuoteText>
                    </OriginalQuote>
                  )}
                </TestimonialContent>
                <TestimonialFooter>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <AuthorDetails>
                    <CountryFlag>{testimonial.flag}</CountryFlag>
                    <span>{testimonial.country}</span>
                    <span>•</span>
                    <span>{testimonial.program}</span>
                  </AuthorDetails>
                </TestimonialFooter>
              </TestimonialCard>
            ))}
          </TestimonialsContainer>
        </Section>

        <Section>
          <SectionTitle>Our Core Values</SectionTitle>
          <ValuesGrid>
            <ValueCard>
              <ValueIcon>❤️</ValueIcon>
              <ValueTitle>Compassion</ValueTitle>
              <ValueText>
                We approach every student's journey with empathy and understanding, recognizing the challenges they face.
              </ValueText>
            </ValueCard>
            <ValueCard>
              <ValueIcon>🤝</ValueIcon>
              <ValueTitle>Integrity</ValueTitle>
              <ValueText>
                We operate with honesty and transparency, building trust through our actions and commitments.
              </ValueText>
            </ValueCard>
            <ValueCard>
              <ValueIcon>🌱</ValueIcon>
              <ValueTitle>Growth</ValueTitle>
              <ValueText>
                We believe in the potential for growth and transformation through education and personal development.
              </ValueText>
            </ValueCard>
            <ValueCard>
              <ValueIcon>🔄</ValueIcon>
              <ValueTitle>Pay It Forward</ValueTitle>
              <ValueText>
                We inspire students to help others once they've achieved their goals, creating a cycle of support.
              </ValueText>
            </ValueCard>
          </ValuesGrid>
        </Section>

        <CallToActionSection>
          <CTATitle>Join Our Mission</CTATitle>
          <CTAText>
            Help us continue supporting international students in achieving their educational dreams.
            Every contribution makes a difference in someone's life.
          </CTAText>
          <CTAButtons>
            <CTAButton href="/get-involved">Get Involved</CTAButton>
            <CTAButton href="https://www.zeffy.com/en-US/donation-form/868e9c58-5d07-41f6-8daf-ca648cc9dc8a"
                      target="_blank" rel="noopener noreferrer" secondary>
              Donate Now
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

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: ${spacing[12]};
`;

const Title = styled.h1`
  font-family: ${typography.fontSecondary};
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin-bottom: ${spacing[4]};
  line-height: ${typography.lineHeight.tight};
`;

const Subtitle = styled.p`
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  color: ${colors.gray600};
  line-height: ${typography.lineHeight.relaxed};
  font-weight: ${typography.fontWeightMedium};
  max-width: 800px;
  margin: 0 auto;
`;

const MissionVisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: ${spacing[8]};
  margin-bottom: ${spacing[12]};

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
  }
`;

const MissionCard = styled.div`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  box-shadow: ${shadows.xl};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};
  }
`;

const VisionCard = styled.div`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  box-shadow: ${shadows.lg};
  border: 1px solid ${colors.gray100};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.xl};
  }

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${spacing[4]};
  text-align: center;
`;

const CardTitle = styled.h2`
  font-family: ${typography.fontSecondary};
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: ${typography.fontWeightBold};
  margin-bottom: ${spacing[6]};
  text-align: center;
  line-height: ${typography.lineHeight.tight};
`;

const CardText = styled.p`
  font-size: ${typography.fontSize.lg};
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing[6]};
  text-align: center;
`;

const HighlightBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: ${spacing[4]};
  border-radius: ${borderRadius.lg};
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: ${typography.fontSize.base};
  font-style: italic;
  text-align: center;
  opacity: 0.9;
`;

const VisionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const VisionItem = styled.li`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray700};
  margin-bottom: ${spacing[3]};
  padding-left: ${spacing[2]};

  &:last-child {
    margin-bottom: 0;
  }
`;

const Section = styled.section`
  margin-bottom: ${spacing[12]};
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${spacing[6]};

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing[4]};
  }
`;

const StatCard = styled.div`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[6]};
  text-align: center;
  box-shadow: ${shadows.md};
  border: 1px solid ${colors.gray100};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.lg};
  }
`;

const StatNumber = styled.div`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin-bottom: ${spacing[2]};
  line-height: ${typography.lineHeight.none};
`;

const StatLabel = styled.div`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.gray800};
  margin-bottom: ${spacing[2]};
`;

const StatDescription = styled.div`
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray600};
  line-height: ${typography.lineHeight.relaxed};
`;

const TestimonialSubtitle = styled.p`
  font-size: ${typography.fontSize.lg};
  color: ${colors.gray600};
  text-align: center;
  margin-bottom: ${spacing[8]};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TestimonialsContainer = styled.div`
  display: grid;
  gap: ${spacing[8]};

  @media (max-width: ${breakpoints.lg}) {
    gap: ${spacing[6]};
  }
`;

const TestimonialCard = styled.div`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  box-shadow: ${shadows.lg};
  border: 1px solid ${colors.gray100};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.xl};
  }

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};
  }
`;

const TestimonialContent = styled.div`
  position: relative;
  margin-bottom: ${spacing[6]};
`;

const QuoteIcon = styled.div`
  font-size: 4rem;
  color: ${colors.primary};
  opacity: 0.1;
  position: absolute;
  top: -10px;
  left: -10px;
  font-family: serif;
  line-height: 1;
`;

const TestimonialText = styled.p`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray700};
  font-style: italic;
  position: relative;
  z-index: 1;
  margin-bottom: ${spacing[4]};
`;

const OriginalQuote = styled.div`
  margin-top: ${spacing[4]};
  padding: ${spacing[4]};
  background: ${colors.gray50};
  border-radius: ${borderRadius.md};
  border-left: 4px solid ${colors.secondary};
`;

const OriginalQuoteLabel = styled.div`
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.gray600};
  margin-bottom: ${spacing[2]};
`;

const OriginalQuoteText = styled.p`
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray600};
  font-style: italic;
  margin: 0;
`;

const TestimonialFooter = styled.div`
  border-top: 1px solid ${colors.gray200};
  padding-top: ${spacing[4]};
`;

const AuthorName = styled.div`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.gray800};
  margin-bottom: ${spacing[2]};
`;

const AuthorDetails = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[2]};
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray600};
`;

const CountryFlag = styled.span`
  font-size: ${typography.fontSize.lg};
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${spacing[6]};

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing[4]};
  }
`;

const ValueCard = styled.div`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[6]};
  text-align: center;
  box-shadow: ${shadows.md};
  border: 1px solid ${colors.gray100};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.lg};
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${spacing[4]};
`;

const ValueTitle = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primary};
  margin-bottom: ${spacing[3]};
`;

const ValueText = styled.p`
  font-size: ${typography.fontSize.sm};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray600};
  margin: 0;
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
  margin-bottom: ${spacing[4]};
  line-height: ${typography.lineHeight.tight};
`;

const CTAText = styled.p`
  font-size: ${typography.fontSize.lg};
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing[8]};
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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

export default OurMissionSimple;
