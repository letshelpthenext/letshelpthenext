import { Helmet } from 'react-helmet-async';
import OurStory from '../../components/Our-Story/OurStory';
import AboutUs from '../../components/About-Us/AboutUs';
import ContactForm from '../../components/ContactForm/ContactForm';
import NewsLetterSignUp from '../../components/NewsLetterSignUp/NewsLetterSignUp';
import ScrollAnimation, { fadeInUp, fadeInLeft, fadeInRight } from '../../components/ScrollAnimation/ScrollAnimation';
import {
  PageContainer,
  Container,
  Section,
  SectionTitle,
  IntroSection,
  IntroTitle,
  IntroText,
  CTASection,
  CTAButton,
  Divider,
  StyledNavlink
} from './home.styles';


const Home = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
        <title>Home | Let's Help The Next</title>
        <meta name="description" content="Let's Help The Next provides financial assistance and scholarships to international students studying in the U.S. who face financial difficulties. Supporting education through mentorship and aid." />
        <meta name="keywords" content="international students, scholarships, financial assistance, education support, nonprofit, student aid" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Let's Help The Next - Supporting International Students" />
        <meta property="og:description" content="Providing financial assistance and scholarships to international students studying in the U.S. who face financial difficulties." />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Let's Help The Next - Supporting International Students" />
        <meta property="twitter:description" content="Providing financial assistance and scholarships to international students studying in the U.S. who face financial difficulties." />
      </Helmet>

      <PageContainer>
        <Container>
          <ScrollAnimation variants={fadeInUp}>
            <IntroSection>
              <IntroTitle>Supporting International Students' Dreams</IntroTitle>
              <IntroText>
                At Let's Help The Next, we believe that financial challenges shouldn't stand between
                talented international students and their educational goals. We provide scholarships,
                mentorship, and support to help students succeed in their academic journey.
              </IntroText>
              <CTASection>
                <CTAButton
                  href="https://www.zeffy.com/en-US/donation-form/868e9c58-5d07-41f6-8daf-ca648cc9dc8a"
                  className="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Donate to support international students"
                >
                  Donate Now
                </CTAButton>
                <StyledNavlink
                  to="/home/get-involved"
                  className="secondary"
                  aria-label="Learn how to get involved with our mission"
                >
                  Get Involved
                </StyledNavlink>
              </CTASection>
            </IntroSection>
          </ScrollAnimation>

          <ScrollAnimation variants={fadeInLeft}>
            <Section>
              <SectionTitle>Our Story</SectionTitle>
              <OurStory />
            </Section>
          </ScrollAnimation>

          <Divider />

          <ScrollAnimation variants={fadeInRight}>
            <Section>
              <SectionTitle>About Our Mission</SectionTitle>
              <AboutUs />
            </Section>
          </ScrollAnimation>

          <Divider />

          <ScrollAnimation variants={fadeInUp}>
            <Section>
              <SectionTitle>Get In Touch</SectionTitle>
              <ContactForm />
            </Section>
          </ScrollAnimation>

          <ScrollAnimation variants={fadeInUp}>
            <NewsLetterSignUp />
          </ScrollAnimation>
        </Container>
      </PageContainer>
    </>
  );
};

export default Home;
