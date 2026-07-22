import { getStudentPhoto, hasStory, initialsOf } from '../../data/students';
import {
  StudentCardLink,
  StudentCardStatic,
  PhotoFrame,
  StudentPhoto,
  InitialsAvatar,
  FlagBadge,
  GraduatedBadge,
  CardBody,
  StudentName,
  StudentOrigin,
  StudentSchool,
  StudentTeaser,
  ReadMore,
  StoryPending,
} from './students.styles';

/**
 * One recipient. Renders as a link to their story when we have one to tell, and
 * as a static card when we only know their name and country — so a cohort we
 * have not finished collecting stories for still shows every student we helped.
 */
const StudentCard = ({ student }) => {
  const photo = getStudentPhoto(student.photo);
  const readable = hasStory(student);
  const Card = readable ? StudentCardLink : StudentCardStatic;
  const linkProps = readable
    ? {
        to: `/home/students/${student.slug}`,
        'aria-label': `Read ${student.name}'s story`,
      }
    : {};

  return (
    <Card {...linkProps}>
      <PhotoFrame>
        {photo ? (
          <StudentPhoto src={photo} alt={student.name} loading="lazy" />
        ) : (
          <InitialsAvatar aria-hidden="true">
            {initialsOf(student.name)}
          </InitialsAvatar>
        )}
        {student.graduated && <GraduatedBadge>Graduated</GraduatedBadge>}
        <FlagBadge role="img" aria-label={student.country}>
          {student.flag}
        </FlagBadge>
      </PhotoFrame>

      <CardBody>
        <StudentName>{student.name}</StudentName>
        <StudentOrigin>
          {student.flag} {student.country}
        </StudentOrigin>

        {student.university && (
          <StudentSchool>
            {student.university}
            {student.major && ` · ${student.major}`}
          </StudentSchool>
        )}

        {student.intro && <StudentTeaser>{student.intro}</StudentTeaser>}

        {readable ? (
          <ReadMore>Read their story</ReadMore>
        ) : (
          <StoryPending>Story coming soon</StoryPending>
        )}
      </CardBody>
    </Card>
  );
};

export default StudentCard;
