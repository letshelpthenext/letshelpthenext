import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { studentsByCohort } from '../../data/students';
import { cohorts, formatCurrency, totals } from '../../data/impact';
import StudentCard from './StudentCard';
import {
  PageContainer,
  Container,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  CohortSection,
  CohortHeader,
  CohortTitle,
  CohortMeta,
  StudentGrid,
  CTASection,
  CTATitle,
  CTAText,
  CTAButtons,
  CTAButton,
} from './students.styles';

const DONATE_URL =
  'https://www.zeffy.com/en-US/donation-form/868e9c58-5d07-41f6-8daf-ca648cc9dc8a';

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

const Students = () => {
  const grouped = studentsByCohort();
  const cohortStats = new Map(cohorts.map((c) => [c.year, c]));

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href={typeof window !== 'undefined' ? window.location.href : ''}
        />
        <title>Meet Our Students - Let's Help The Next</title>
        <meta
          name="description"
          content={`Meet the ${totals.studentsHelped} international students from ${totals.countriesRepresented} countries whose education Let's Help The Next has supported. Read their stories in their own words.`}
        />
        <meta property="og:title" content="Meet Our Students - Let's Help The Next" />
        <meta
          property="og:description"
          content="Determination, resilience, defying the odds, and dreaming big. Meet the students behind the scholarships."
        />
      </Helmet>

      <PageContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Container>
          <HeroSection variants={itemVariants}>
            <HeroTitle>Meet Our Students</HeroTitle>
            <HeroSubtitle>
              These funds have blessed the lives of many international students, and
              we aim to inspire you through each one of their stories — of
              determination, resilience, defying the odds, of dreaming big, and most
              of all, of being extraordinary.
            </HeroSubtitle>
          </HeroSection>

          {grouped.map(({ year, students }) => {
            const stats = cohortStats.get(year);

            return (
              <CohortSection key={year} variants={itemVariants}>
                <CohortHeader>
                  <CohortTitle>
                    {year}
                    {stats?.inProgress && ' — so far'}
                  </CohortTitle>
                  {stats && (
                    <CohortMeta>
                      <strong>{stats.studentsHelped}</strong>{' '}
                      {stats.studentsHelped === 1 ? 'student' : 'students'} supported
                      {stats.raised != null && (
                        <>
                          {' · '}
                          <strong>{formatCurrency(stats.raised)}</strong> awarded
                        </>
                      )}
                    </CohortMeta>
                  )}
                </CohortHeader>

                <StudentGrid>
                  {students.map((student) => (
                    <StudentCard key={student.slug} student={student} />
                  ))}
                </StudentGrid>
              </CohortSection>
            );
          })}

          <CTASection variants={itemVariants}>
            <CTATitle>Every story here started with one donation</CTATitle>
            <CTAText>
              A few hundred dollars is often the entire difference between a student
              registering for next semester and going home. Help us reach the next
              one.
            </CTAText>
            <CTAButtons>
              <CTAButton
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Support a Student
              </CTAButton>
              <CTAButton as={Link} to="/home/apply" $secondary>
                Apply for a Scholarship
              </CTAButton>
            </CTAButtons>
          </CTASection>
        </Container>
      </PageContainer>
    </>
  );
};

export default Students;
