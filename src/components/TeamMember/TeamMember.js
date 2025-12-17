import React from 'react';
import styled from 'styled-components';
import { colors, spacing, shadows, borderRadius, typography } from '../../styles/tokens';

const TeamMemberCard = styled.article`
  background: ${colors.white};
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.md};
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid ${colors.gray200};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.lg};
  }

  @media (max-width: 768px) {
    margin-bottom: ${spacing[6]};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: ${colors.gray100};
`;

const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${TeamMemberCard}:hover & {
    transform: scale(1.05);
  }
`;

const ContentContainer = styled.div`
  padding: ${spacing[6]};
`;

const MemberName = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.gray900};
  margin-bottom: ${spacing[2]};
  line-height: ${typography.lineHeight.tight};
`;

const MemberRole = styled.p`
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeightMedium};
  color: ${colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: ${spacing[4]};
`;

const MemberBio = styled.p`
  font-size: ${typography.fontSize.sm};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray600};
  margin: 0;
`;

const TeamMember = ({ memberImage, memberName, memberDesignation, memberBio }) => {
  return (
    <TeamMemberCard>
      <ImageContainer>
        <MemberImage
          src={memberImage}
          alt={`${memberName}, ${memberDesignation} at Let's Help The Next`}
          loading="lazy"
        />
      </ImageContainer>

      <ContentContainer>
        <MemberName>{memberName}</MemberName>
        <MemberRole>{memberDesignation}</MemberRole>
        <MemberBio>{memberBio}</MemberBio>
      </ContentContainer>
    </TeamMemberCard>
  );
};

export default TeamMember;
