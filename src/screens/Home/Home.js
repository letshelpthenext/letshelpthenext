import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import OurStory from '../../components/Our-Story/OurStory';
import AboutUs from '../../components/About-Us/AboutUs';
import ContactForm from '../../components/ContactForm/ContactForm';
import NewsLetterSignUp from '../../components/NewsLetterSignUp/NewsLetterSignUp';
import ScrollAnimation, { fadeInUp, fadeInLeft, fadeInRight } from '../../components/ScrollAnimation/ScrollAnimation';
import { headlineStats } from '../../data/impact';
import { featuredStudents, getStudentPhoto, initialsOf } from '../../data/students';
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
  StyledNavlink,
  ImpactBand,
  ImpactItem,
  ImpactNumber,
  ImpactLabel,
  ImpactDescription,
  FeaturedCard,
  FeaturedPortrait,
  FeaturedEyebrow,
  FeaturedName,
  FeaturedQuote,
  FeaturedLink,
  LaneGrid,
  Lane,
  LaneIcon,
  LaneTitle,
  LaneText,
  LaneButton
} from './home.styles';

const DONATE_URL =
  'https://www.zeffy.com/en-US/donation-form/868e9c58-5d07-41f6-8daf-ca648cc9dc8a';

const Home = () => {
  // Lead with whichever student the data marks as featured.
  const featured = featuredStudents[0];
  const featuredPhoto = featured ? getStudentPhoto(featured.photo) : null;

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

          <ScrollAnimation variants={fadeInUp}>
            <ImpactBand aria-label="Our impact">
              {headlineStats.map((stat) => (
                <ImpactItem key={stat.label}>
                  <ImpactNumber>{stat.number}</ImpactNumber>
                  <ImpactLabel>{stat.label}</ImpactLabel>
                  <ImpactDescription>{stat.description}</ImpactDescription>
                </ImpactItem>
              ))}
            </ImpactBand>
          </ScrollAnimation>

          {featured && (
            <ScrollAnimation variants={fadeInUp}>
              <Section>
                <SectionTitle>The Students Are the Point</SectionTitle>
                <FeaturedCard>
                  <FeaturedPortrait>
                    {featuredPhoto ? (
                      <img src={featuredPhoto} alt={featured.name} loading="lazy" />
                    ) : (
                      <span aria-hidden="true">{initialsOf(featured.name)}</span>
                    )}
                  </FeaturedPortrait>
                  <div>
                    <FeaturedEyebrow>
                      {featured.flag} {featured.country}
                      {featured.graduated && ` · ${featured.graduated}`}
                    </FeaturedEyebrow>
                    <FeaturedName>{featured.name}</FeaturedName>
                    <FeaturedQuote>{featured.intro}</FeaturedQuote>
                    <FeaturedLink to={`/home/students/${featured.slug}`}>
                      Read {featured.name.split(' ')[0]}'s story →
                    </FeaturedLink>
                  </div>
                </FeaturedCard>
              </Section>
            </ScrollAnimation>
          )}

          <ScrollAnimation variants={fadeInUp}>
            <Section>
              <LaneGrid>
                <Lane $accent>
                  <LaneIcon aria-hidden="true">💝</LaneIcon>
                  <LaneTitle>I want to help a student</LaneTitle>
                  <LaneText $accent>
                    A few hundred dollars is often the entire difference between a
                    student registering for next semester and going home. Every
                    dollar goes to a student — we are entirely volunteer-run.
                  </LaneText>
                  <LaneButton
                    $accent
                    href={DONATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate Now
                  </LaneButton>
                </Lane>

                <Lane>
                  <LaneIcon aria-hidden="true">🎓</LaneIcon>
                  <LaneTitle>I need help staying in school</LaneTitle>
                  <LaneText>
                    If you are an international student in the U.S. and a balance you
                    cannot close is standing between you and next semester, talk to
                    us. It is free to apply, and a person reads every application.
                  </LaneText>
                  <LaneButton as={Link} to="/home/apply">
                    Apply for a Scholarship
                  </LaneButton>
                </Lane>
              </LaneGrid>
            </Section>
          </ScrollAnimation>

          <Divider />

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
