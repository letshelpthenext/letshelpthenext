import { MainWrapper, ImageWrapper, TextWrapper } from './teammember.styles';

const TeamMember = ({ memberImage, memberName, memberDesignation, memberBio }) => {
  return (
    <MainWrapper>
        <ImageWrapper>
            <img src={memberImage} alt={`Team Member - ${memberImage}`} />
            <div>{memberName}</div>
            <div><i>{memberDesignation}</i></div>
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
