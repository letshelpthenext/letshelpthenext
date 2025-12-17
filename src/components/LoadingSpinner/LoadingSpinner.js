import styled, { keyframes } from 'styled-components';
import { colors, spacing } from '../../styles/tokens';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: ${props => props.$fullScreen ? '100vh' : '200px'};
  background: ${props => props.$fullScreen ? `linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.white} 100%)` : 'transparent'};
`;

const SpinnerWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`;

const SpinnerOuter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid ${colors.gray200};
  border-top-color: ${colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const SpinnerInner = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  border: 3px solid ${colors.gray200};
  border-bottom-color: ${colors.secondary};
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite reverse;
`;

const LoadingText = styled.p`
  margin-top: ${spacing[4]};
  color: ${colors.gray600};
  font-size: 0.875rem;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const LogoContainer = styled.div`
  margin-bottom: ${spacing[6]};
  animation: ${pulse} 2s ease-in-out infinite;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.primary};
`;

const LoadingSpinner = ({ fullScreen = false, text = 'Loading...' }) => {
  return (
    <LoadingContainer $fullScreen={fullScreen}>
      {fullScreen && (
        <LogoContainer>
          <Logo>LHTN</Logo>
        </LogoContainer>
      )}
      <SpinnerWrapper>
        <SpinnerOuter />
        <SpinnerInner />
      </SpinnerWrapper>
      <LoadingText>{text}</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingSpinner;
