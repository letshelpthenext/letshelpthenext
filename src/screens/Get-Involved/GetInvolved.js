import { Helmet } from 'react-helmet-async';
import {
  PageContainer,
  Container,
  Hero,
  HeroTitle,
  HeroSubtitle,
  Section,
  SectionTitle,
  WaysToHelpGrid,
  HelpCard,
  HelpIcon,
  HelpTitle,
  HelpDescription,
  DonateButton,
  Divider,
  TeamGrid
} from './getInvolved.styles';
import TeamMember from '../../components/TeamMember/TeamMember';

// Team member images
import mishma from '../../assets/mishma.png';
import kwaku from '../../assets/kwaku.JPG';
import billy from '../../assets/billy.png';
import kim from '../../assets/kim.jpg';
import michel from '../../assets/michel2.png';
import natalie from '../../assets/natalie.png';



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

  const natalieBio = `I believe that the impact of a college education on an individual is profound. Not only
  does it enrich and enlighten a person as they learn and use critical thinking skills, but the connections made
  with people and groups can be life-changing, with a lasting impact. I am forever grateful for the foundational
  skills that my education has had on my life, and I'm passionate about helping others also have an opportunity to have a college education.`;

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
                memberImage={michel}
                memberName="Michel Bergeron"
                memberDesignation="Executive"
                memberBio={michelBio}
              />
              <TeamMember
                memberImage={kim}
                memberName="Kim Swallow"
                memberDesignation="Executive"
                memberBio={kimBio}
              />
              <TeamMember
                memberImage={kwaku}
                memberName="Kwaku Appau-Nkansah"
                memberDesignation="Executive"
                memberBio={kwakuBio}
              />
              <TeamMember
                memberImage={natalie}
                memberName="Natalie Ward"
                memberDesignation="Executive"
                memberBio={natalieBio}
              />
              <TeamMember
                memberImage={billy}
                memberName="Bidford R. Jean-Baptiste"
                memberDesignation="Executive"
                memberBio={billyBio}
              />
            </TeamGrid>
          </Section>
        </Container>
      </PageContainer>
    </>
  );
};

export default GetInvolved;
