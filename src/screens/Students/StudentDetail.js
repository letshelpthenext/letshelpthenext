import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Navigate } from 'react-router-dom';
import {
  getStudentBySlug,
  getStudentPhoto,
  hasStory,
  initialsOf,
  publishedStudents,
} from '../../data/students';
import {
  PageContainer,
  Container,
  BackLink,
  StudentHeader,
  PortraitFrame,
  Portrait,
  InitialsAvatar,
  Identity,
  StudentName,
  OriginLine,
  CountryFlag,
  MetaList,
  MetaItem,
  MetaLabel,
  MetaValue,
  GraduatedPill,
  Section,
  SectionTitle,
  StoryBody,
  ThankYouCard,
  ThankYouHeading,
  ThankYouBody,
  VideoFrame,
  StudentNav,
  NavLinkStyled,
  NavHint,
  CTASection,
  CTATitle,
  CTAText,
  CTAButton,
} from './studentDetail.styles';

const DONATE_URL =
  'https://www.zeffy.com/en-US/donation-form/868e9c58-5d07-41f6-8daf-ca648cc9dc8a';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

/** Blank-line-separated source text becomes paragraphs. */
const toParagraphs = (text) =>
  text
    .split(/\n\s*\n/)
    .map((para) => para.trim())
    .filter(Boolean);

const StudentDetail = () => {
  const { slug } = useParams();
  const student = getStudentBySlug(slug);
  const headerRef = useRef(null);

  // Open on the student — their name, photo and country — not on the shared
  // hero, which would otherwise fill the first screen and bury the person the
  // visitor just clicked. ScrollToTop skips this route so it does not fight us.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    // Sum offsetTop up the chain rather than using getBoundingClientRect: the
    // card's entry animation starts 20px translated, and a rect would fold that
    // transform in and land us low.
    let top = 0;
    for (let node = el; node; node = node.offsetParent) {
      top += node.offsetTop;
    }

    // Leave the "All students" link visible above the card.
    const BREATHING_ROOM = 80;
    window.scrollTo({ top: Math.max(top - BREATHING_ROOM, 0), behavior: 'auto' });
  }, [slug]);

  // Unknown or unpublished slug: send them to the index rather than a dead end.
  if (!student || !hasStory(student)) {
    return <Navigate to="/home/students" replace />;
  }

  // Previous/next across the students who actually have a page to visit.
  const readable = publishedStudents.filter(hasStory);
  const index = readable.findIndex((s) => s.slug === student.slug);
  const previous = index > 0 ? readable[index - 1] : null;
  const next = index < readable.length - 1 ? readable[index + 1] : null;

  const photo = getStudentPhoto(student.photo);
  const summary =
    student.intro ||
    `${student.name} from ${student.country} is a Let's Help The Next scholarship recipient.`;

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href={typeof window !== 'undefined' ? window.location.href : ''}
        />
        <title>{`${student.name} - Let's Help The Next`}</title>
        <meta name="description" content={summary} />
        <meta
          property="og:title"
          content={`${student.name}, ${student.country} - Let's Help The Next`}
        />
        <meta property="og:description" content={summary} />
        <meta property="og:type" content="article" />
      </Helmet>

      <PageContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Container>
          <BackLink to="/home/students">← All students</BackLink>

          <StudentHeader ref={headerRef} variants={itemVariants}>
            <PortraitFrame>
              {photo ? (
                <Portrait src={photo} alt={student.name} />
              ) : (
                <InitialsAvatar aria-hidden="true">
                  {initialsOf(student.name)}
                </InitialsAvatar>
              )}
            </PortraitFrame>

            <Identity>
              <StudentName>{student.name}</StudentName>
              <OriginLine>
                <CountryFlag role="img" aria-label={student.country}>
                  {student.flag}
                </CountryFlag>
                <span>{student.country}</span>
              </OriginLine>

              <MetaList>
                {student.university && (
                  <MetaItem>
                    <MetaLabel>University</MetaLabel>
                    <MetaValue>{student.university}</MetaValue>
                  </MetaItem>
                )}
                {student.major && (
                  <MetaItem>
                    <MetaLabel>Studying</MetaLabel>
                    <MetaValue>{student.major}</MetaValue>
                  </MetaItem>
                )}
                <MetaItem>
                  <MetaLabel>Supported since</MetaLabel>
                  <MetaValue>{student.cohort}</MetaValue>
                </MetaItem>
              </MetaList>

              {student.graduated && (
                <GraduatedPill>🎓 {student.graduated}</GraduatedPill>
              )}
            </Identity>
          </StudentHeader>

          {student.story && (
            <Section variants={itemVariants}>
              <SectionTitle>Their Story</SectionTitle>
              <StoryBody>
                {toParagraphs(student.story).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </StoryBody>
            </Section>
          )}

          {student.thankYouNote && (
            <Section variants={itemVariants}>
              <ThankYouCard>
                <ThankYouHeading>Thank You</ThankYouHeading>
                <ThankYouBody>
                  {toParagraphs(student.thankYouNote).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </ThankYouBody>
              </ThankYouCard>
            </Section>
          )}

          {student.thankYouVideo && (
            <Section variants={itemVariants}>
              <SectionTitle>A Message From {student.name.split(' ')[0]}</SectionTitle>
              <VideoFrame>
                <iframe
                  src={student.thankYouVideo}
                  title={`Thank you video from ${student.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </VideoFrame>
            </Section>
          )}

          {(previous || next) && (
            <StudentNav aria-label="Other students">
              {previous ? (
                <NavLinkStyled to={`/home/students/${previous.slug}`}>
                  <NavHint>Previous</NavHint>← {previous.name}
                </NavLinkStyled>
              ) : (
                <span />
              )}
              {next && (
                <NavLinkStyled
                  to={`/home/students/${next.slug}`}
                  style={{ textAlign: 'right', marginLeft: 'auto' }}
                >
                  <NavHint>Next</NavHint>
                  {next.name} →
                </NavLinkStyled>
              )}
            </StudentNav>
          )}

          <CTASection variants={itemVariants}>
            <CTATitle>Help us reach the next student</CTATitle>
            <CTAText>
              {student.name.split(' ')[0]}'s semester was made possible by people who
              gave what they could. There is another student waiting.
            </CTAText>
            <CTAButton href={DONATE_URL} target="_blank" rel="noopener noreferrer">
              Donate Now
            </CTAButton>
          </CTASection>
        </Container>
      </PageContainer>
    </>
  );
};

export default StudentDetail;
