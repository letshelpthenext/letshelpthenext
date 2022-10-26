import { MainWrapper, ImageWrapper, TextWrapper } from './teammember.styles';

const TeamMember = ({ memberImage, memberName, memberBio }) => {
  return (
    <MainWrapper>
        <ImageWrapper>
            <img src={memberImage} alt={`Team Member - ${memberImage}`} />
            <div>{memberName}</div>
        </ImageWrapper>
        <TextWrapper>
            <div>
                {memberBio}
            </div>
        </TextWrapper>
    </MainWrapper>
  );
};

export default TeamMember;
