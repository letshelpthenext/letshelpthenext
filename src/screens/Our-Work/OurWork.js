import { Helmet } from 'react-helmet-async';
import visaImage from '../../assets/visa.jpeg';
import {
  PageContainer,
  Container,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  ContentSection,
  SectionCard,
  CardHeader,
  CardIcon,
  CardTitle,
  CardSubtitle,
  Emphasis,
  CardContent,
  InitiativesSection,
  SectionTitle,
  InitiativesGrid,
  InitiativeCard,
  InitiativeIcon,
  InitiativeTitle,
  InitiativeContent,
  HighlightBox,
  HighlightTitle,
  ImpactStats,
  ImpactStat,
  StatNumber,
  StatLabel,
  ProcessSection,
  ProcessGrid,
  ProcessStep,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription,
  StepList,
  StepListItem,
  VisaSection,
  VisaContent,
  VisaImageWrapper,
  VisaImage,
  SupportSection,
  FutureSection,
  FutureContent,
  FutureTitle,
  CallToAction,
  CTAButton
} from './ourWork.styles';

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
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
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
                    <HighlightTitle>2025 Impact</HighlightTitle>
                    <ImpactStats>
                      <ImpactStat>
                        <StatNumber>50+</StatNumber>
                        <StatLabel>Applications</StatLabel>
                      </ImpactStat>
                      <ImpactStat>
                        <StatNumber>$12,750</StatNumber>
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
                <CTAButton href="/home/get-involved">Get Involved Today</CTAButton>
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


export default OurWork;
