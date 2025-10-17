import { Helmet } from 'react-helmet-async';
import {
  PageContainer,
  Container,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  MissionVisionSection,
  MissionVisionGrid,
  MissionCard,
  VisionCard,
  CardIcon,
  CardTitle,
  CardContent,
  HighlightBox,
  HighlightText,
  VisionList,
  VisionItem,
  ImpactSection,
  SectionTitle,
  ImpactGrid,
  ImpactCard,
  ImpactNumber,
  ImpactLabel,
  ImpactDescription,
  TestimonialsSection,
  TestimonialSubtitle,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialContent,
  QuoteIcon,
  TestimonialText,
  OriginalQuote,
  OriginalQuoteLabel,
  OriginalQuoteText,
  TestimonialFooter,
  AuthorInfo,
  AuthorName,
  AuthorDetails,
  CountryFlag,
  ValuesSection,
  ValuesGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueDescription,
  CallToActionSection,
  CTAContent,
  CTATitle,
  CTADescription,
  CTAButtons,
  CTAButton
} from './ourMission.styles';
const OurMission = () => {
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
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
        <title>Our Mission - Let's Help The Next</title>
        <meta name="description" content="Our mission is to support vibrant individuals with potential and the will to gain an education to create something extraordinary. Read inspiring testimonials from students we've helped." />
        <meta property="og:title" content="Our Mission - Let's Help The Next" />
        <meta property="og:description" content="Supporting international students achieve their educational dreams through mentorship, financial aid, and comprehensive support." />
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
              <HeroTitle>Our Mission</HeroTitle>
              <HeroSubtitle>
                Empowering vibrant individuals to achieve their educational dreams
                and create something extraordinary
              </HeroSubtitle>
            </HeroContent>
          </HeroSection>

          {/* Mission & Vision Cards */}
          <MissionVisionSection variants={itemVariants}>
            <MissionVisionGrid>
              <MissionCard variants={itemVariants}>
                <CardIcon>🎯</CardIcon>
                <CardTitle>Our Mission</CardTitle>
                <CardContent>
                  <p>
                    Our mission is to help vibrant and beautiful individuals full of potential
                    who have the will to gain an education to create something extraordinary.
                    We believe that education is the key to unlocking human potential and
                    creating positive change in the world.
                  </p>
                  <HighlightBox>
                    <HighlightText>
                      We support students through mentorship, financial assistance,
                      and comprehensive guidance throughout their educational journey.
                    </HighlightText>
                  </HighlightBox>
                </CardContent>
              </MissionCard>

              <VisionCard variants={itemVariants}>
                <CardIcon>🌟</CardIcon>
                <CardTitle>Our Vision</CardTitle>
                <CardContent>
                  <p>
                    We aim to support education by mentoring, providing aid, and inspiring
                    those who have received help to pay it forward. Our vision is a world
                    where geographical and financial barriers don't prevent talented
                    individuals from accessing quality education.
                  </p>
                  <VisionList>
                    <VisionItem>🤝 Mentorship and guidance</VisionItem>
                    <VisionItem>💰 Financial assistance</VisionItem>
                    <VisionItem>🔄 Pay-it-forward culture</VisionItem>
                    <VisionItem>🌍 Global educational access</VisionItem>
                  </VisionList>
                </CardContent>
              </VisionCard>
            </MissionVisionGrid>
          </MissionVisionSection>

          {/* Impact Stats */}
          <ImpactSection variants={itemVariants}>
            <SectionTitle>Our Impact</SectionTitle>
            <ImpactGrid>
              <ImpactCard variants={itemVariants}>
                <ImpactNumber>20+</ImpactNumber>
                <ImpactLabel>Students Helped</ImpactLabel>
                <ImpactDescription>International students supported in 2024</ImpactDescription>
              </ImpactCard>
              <ImpactCard variants={itemVariants}>
                <ImpactNumber>$8,985</ImpactNumber>
                <ImpactLabel>Financial Aid</ImpactLabel>
                <ImpactDescription>Total donations distributed in 2024</ImpactDescription>
              </ImpactCard>
              <ImpactCard variants={itemVariants}>
                <ImpactNumber>5+</ImpactNumber>
                <ImpactLabel>Countries</ImpactLabel>
                <ImpactDescription>Students from different nations</ImpactDescription>
              </ImpactCard>
              <ImpactCard variants={itemVariants}>
                <ImpactNumber>100%</ImpactNumber>
                <ImpactLabel>Success Rate</ImpactLabel>
                <ImpactDescription>Students who received visas</ImpactDescription>
              </ImpactCard>
            </ImpactGrid>
          </ImpactSection>

          {/* Testimonials */}
          <TestimonialsSection variants={itemVariants}>
            <SectionTitle>Success Stories</SectionTitle>
            <TestimonialSubtitle>
              Hear from the students whose lives have been transformed through education
            </TestimonialSubtitle>

            <TestimonialsGrid>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={testimonial.id} variants={itemVariants} delay={index * 0.1}>
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
                    <AuthorInfo>
                      <AuthorName>{testimonial.author}</AuthorName>
                      <AuthorDetails>
                        <CountryFlag>{testimonial.flag}</CountryFlag>
                        <span>{testimonial.country}</span>
                        <span>•</span>
                        <span>{testimonial.program}</span>
                      </AuthorDetails>
                    </AuthorInfo>
                  </TestimonialFooter>
                </TestimonialCard>
              ))}
            </TestimonialsGrid>
          </TestimonialsSection>

          {/* Values Section */}
          <ValuesSection variants={itemVariants}>
            <SectionTitle>Our Core Values</SectionTitle>
            <ValuesGrid>
              <ValueCard variants={itemVariants}>
                <ValueIcon>❤️</ValueIcon>
                <ValueTitle>Compassion</ValueTitle>
                <ValueDescription>
                  We approach every student's journey with empathy and understanding,
                  recognizing the challenges they face.
                </ValueDescription>
              </ValueCard>
              <ValueCard variants={itemVariants}>
                <ValueIcon>🤝</ValueIcon>
                <ValueTitle>Integrity</ValueTitle>
                <ValueDescription>
                  We operate with honesty and transparency, building trust through
                  our actions and commitments.
                </ValueDescription>
              </ValueCard>
              <ValueCard variants={itemVariants}>
                <ValueIcon>🌱</ValueIcon>
                <ValueTitle>Growth</ValueTitle>
                <ValueDescription>
                  We believe in the potential for growth and transformation through
                  education and personal development.
                </ValueDescription>
              </ValueCard>
              <ValueCard variants={itemVariants}>
                <ValueIcon>🔄</ValueIcon>
                <ValueTitle>Pay It Forward</ValueTitle>
                <ValueDescription>
                  We inspire students to help others once they've achieved their goals,
                  creating a cycle of support.
                </ValueDescription>
              </ValueCard>
            </ValuesGrid>
          </ValuesSection>

          {/* Call to Action */}
          <CallToActionSection variants={itemVariants}>
            <CTAContent>
              <CTATitle>Join Our Mission</CTATitle>
              <CTADescription>
                Help us continue supporting international students in achieving their educational dreams.
                Every contribution makes a difference in someone's life.
              </CTADescription>
              <CTAButtons>
                <CTAButton href="/home/get-involved">Get Involved</CTAButton>
                <CTAButton href="https://www.zeffy.com/en-US/donation-form/868e9c58-5d07-41f6-8daf-ca648cc9dc8a"
                          target="_blank" rel="noopener noreferrer" secondary>
                  Donate Now
                </CTAButton>
              </CTAButtons>
            </CTAContent>
          </CallToActionSection>
        </Container>
      </PageContainer>
    </>
  );
};


export default OurMission;
