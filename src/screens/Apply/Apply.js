import { Helmet } from 'react-helmet-async';
import { totals, formatCurrency, currentCohort } from '../../data/impact';
import {
  PageContainer,
  Container,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  Reassurance,
  Section,
  SectionTitle,
  SectionIntro,
  CheckGrid,
  CheckCard,
  CheckIcon,
  CheckTitle,
  CheckText,
  StepList,
  Step,
  StepNumber,
  StepTitle,
  StepText,
  FaqList,
  FaqItem,
  FaqQuestion,
  FaqAnswer,
  ApplySection,
  ApplyTitle,
  ApplyText,
  ApplyButton,
  ApplyFootnote,
} from './apply.styles';

// TODO: replace with the real application form URL once Mishma provides it.
// Until then, applications come in by email, which is how every current
// recipient reached us.
const APPLY_MAILTO =
  'mailto:letshelpthenext@gmail.com?subject=Need-Based%20Scholarship%20Application';

const eligibility = [
  {
    icon: '🌍',
    title: 'You are an international student',
    text: 'You are studying at a university in the United States on a student visa. Our recipients come from every continent.',
  },
  {
    icon: '💸',
    title: 'You have a real financial gap',
    text: 'A balance you cannot close is standing between you and registering for next semester — tuition, fees, or the basic cost of living while you study.',
  },
  {
    icon: '💪',
    title: 'You have done what you can',
    text: 'You are working the hours your visa permits, you have applied for other aid, and you are managing what you have responsibly. We help students who are already helping themselves.',
  },
  {
    icon: '🔄',
    title: 'You intend to pay it forward',
    text: 'Our name is our mission. We look for students who want to lift the next person once they are able.',
  },
];

const steps = [
  {
    title: 'Reach out',
    text: 'Email us and tell us who you are, where you are studying, and what you are facing. There is no cost to apply, and asking costs you nothing.',
  },
  {
    title: 'Share your situation',
    text: 'We will ask for the details of your financial gap — your balance, what you have already paid, the hours you work, and what other aid you have sought.',
  },
  {
    title: 'We review together',
    text: 'A board member reviews every application personally. We are not an algorithm; we read your story and we will talk with you.',
  },
  {
    title: 'A decision, and then support',
    text: 'If we can help, funds go toward your tuition or student-life expenses. And we stay with you — advocating, connecting you, and checking in long after the payment clears.',
  },
];

const faqs = [
  {
    q: 'How much can I receive?',
    a: 'Awards are need-based and vary by situation. Recent scholarships have ranged from a few hundred dollars to $1,000 or more — often exactly the amount standing between a student and registration.',
  },
  {
    q: 'Do I need to attend BYU-Idaho?',
    a: 'No. Three of our founding board members are BYU-Idaho alumni, so we know that campus best and many of our recipients study there. But we have supported students at Brigham Young University, BYU-Hawaii, Bowling Green State University, and elsewhere. Apply regardless of where you study.',
  },
  {
    q: 'Do I have to be a member of the Church?',
    a: 'No. We place particular emphasis on supporting international students who are members of The Church of Jesus Christ of Latter-day Saints, and on returned missionaries, but our scholarships are need-based and we review every application on its merits.',
  },
  {
    q: 'What if I am turned down?',
    a: 'Ask again. Circumstances change, and so does the funding available to us in a given year. Being turned down once is not a permanent answer.',
  },
  {
    q: 'Will my story be published?',
    a: 'Only if you want it to be, and only with your written permission. Many recipients choose to share their story to encourage the students coming after them — but receiving a scholarship never obliges you to make anything public.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Apply = () => (
  <>
    <Helmet>
      <link
        rel="canonical"
        href={typeof window !== 'undefined' ? window.location.href : ''}
      />
      <title>Apply for a Scholarship - Let's Help The Next</title>
      <meta
        name="description"
        content="Need-based scholarships for international students studying in the United States. See who we help, what we look for, and how to apply. There is no cost to apply."
      />
      <meta
        property="og:title"
        content="Apply for a Scholarship - Let's Help The Next"
      />
      <meta
        property="og:description"
        content="If a balance you cannot close is standing between you and next semester, talk to us."
      />
    </Helmet>

    <PageContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <HeroSection variants={itemVariants}>
          <HeroTitle>Apply for a Scholarship</HeroTitle>
          <HeroSubtitle>
            If a balance you cannot close is standing between you and next
            semester, talk to us. Most of the students we have helped found us
            because someone told them to just ask.
          </HeroSubtitle>
          <Reassurance>
            ✓ Free to apply · ✓ Every application read by a person
          </Reassurance>
        </HeroSection>

        <Section variants={itemVariants}>
          <SectionTitle>Who We Help</SectionTitle>
          <SectionIntro>
            We are a small, volunteer-run 501(c)(3). We cannot help everyone — but
            we read everyone. Here is what we look for.
          </SectionIntro>
          <CheckGrid>
            {eligibility.map((item) => (
              <CheckCard key={item.title}>
                <CheckIcon aria-hidden="true">{item.icon}</CheckIcon>
                <div>
                  <CheckTitle>{item.title}</CheckTitle>
                  <CheckText>{item.text}</CheckText>
                </div>
              </CheckCard>
            ))}
          </CheckGrid>
        </Section>

        <Section variants={itemVariants}>
          <SectionTitle>How It Works</SectionTitle>
          <SectionIntro>
            Four steps, and a person at the other end of every one of them.
          </SectionIntro>
          <StepList>
            {steps.map((step) => (
              <Step key={step.title}>
                <StepNumber aria-hidden="true" />
                <div>
                  <StepTitle>{step.title}</StepTitle>
                  <StepText>{step.text}</StepText>
                </div>
              </Step>
            ))}
          </StepList>
        </Section>

        <Section variants={itemVariants}>
          <SectionTitle>Questions</SectionTitle>
          <FaqList>
            {faqs.map((faq) => (
              <FaqItem key={faq.q}>
                <FaqQuestion>{faq.q}</FaqQuestion>
                <FaqAnswer>
                  <p>{faq.a}</p>
                </FaqAnswer>
              </FaqItem>
            ))}
          </FaqList>
        </Section>

        <ApplySection variants={itemVariants}>
          <ApplyTitle>Ask. It costs you nothing.</ApplyTitle>
          <ApplyText>
            We have supported {totals.studentsHelped} students from{' '}
            {totals.countriesRepresented} countries, and{' '}
            {currentCohort.studentsHelped} already this year. Every one of them
            started by sending a message they were not sure would be answered.
          </ApplyText>
          <ApplyButton href={APPLY_MAILTO}>Start Your Application</ApplyButton>
          <ApplyFootnote>
            Or email us directly at letshelpthenext@gmail.com. We have awarded{' '}
            {formatCurrency(currentCohort.raised)} so far in {currentCohort.year}.
          </ApplyFootnote>
        </ApplySection>
      </Container>
    </PageContainer>
  </>
);

export default Apply;
