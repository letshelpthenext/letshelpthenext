import styled, { keyframes } from 'styled-components';
import { colors, spacing, borderRadius } from '../../styles/tokens';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonBase = styled.div`
  background: linear-gradient(
    90deg,
    ${colors.gray200} 0px,
    ${colors.gray100} 40px,
    ${colors.gray200} 80px
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: ${borderRadius.md};
`;

export const SkeletonText = styled(SkeletonBase)`
  height: ${props => props.$height || '1rem'};
  width: ${props => props.$width || '100%'};
  margin-bottom: ${props => props.$mb || spacing[2]};
`;

export const SkeletonTitle = styled(SkeletonBase)`
  height: 2rem;
  width: ${props => props.$width || '60%'};
  margin-bottom: ${spacing[4]};
`;

export const SkeletonImage = styled(SkeletonBase)`
  width: 100%;
  height: ${props => props.$height || '200px'};
  border-radius: ${borderRadius.lg};
  margin-bottom: ${spacing[4]};
`;

export const SkeletonAvatar = styled(SkeletonBase)`
  width: ${props => props.$size || '48px'};
  height: ${props => props.$size || '48px'};
  border-radius: ${borderRadius.full};
`;

export const SkeletonCard = styled.div`
  background: ${colors.white};
  padding: ${spacing[6]};
  border-radius: ${borderRadius.xl};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

// Pre-built skeleton layouts
export const CardSkeleton = () => (
  <SkeletonCard>
    <SkeletonImage $height="180px" />
    <SkeletonTitle $width="80%" />
    <SkeletonText $width="100%" />
    <SkeletonText $width="90%" />
    <SkeletonText $width="70%" />
  </SkeletonCard>
);

export const TeamMemberSkeleton = () => (
  <SkeletonCard>
    <SkeletonImage $height="250px" />
    <SkeletonTitle $width="60%" />
    <SkeletonText $width="40%" $height="0.875rem" />
    <SkeletonText $width="100%" />
    <SkeletonText $width="95%" />
    <SkeletonText $width="80%" />
  </SkeletonCard>
);

export const HeroSkeleton = () => (
  <div style={{ padding: spacing[8], textAlign: 'center' }}>
    <SkeletonTitle $width="50%" style={{ margin: '0 auto', marginBottom: spacing[4] }} />
    <SkeletonText $width="70%" style={{ margin: '0 auto', marginBottom: spacing[2] }} />
    <SkeletonText $width="60%" style={{ margin: '0 auto', marginBottom: spacing[6] }} />
    <div style={{ display: 'flex', gap: spacing[4], justifyContent: 'center' }}>
      <SkeletonBase style={{ width: '120px', height: '48px', borderRadius: borderRadius.lg }} />
      <SkeletonBase style={{ width: '120px', height: '48px', borderRadius: borderRadius.lg }} />
    </div>
  </div>
);

export default {
  SkeletonText,
  SkeletonTitle,
  SkeletonImage,
  SkeletonAvatar,
  SkeletonCard,
  CardSkeleton,
  TeamMemberSkeleton,
  HeroSkeleton
};
