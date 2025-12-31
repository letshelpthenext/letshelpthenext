import styled from 'styled-components';
import { colors, spacing, typography, borderRadius, shadows, breakpoints } from '../../styles/tokens';

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${colors.gray50};
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing[6]} ${spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
  align-items: center;

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[5]} ${spacing[3]};
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: ${spacing[4]} ${spacing[2]};
    gap: ${spacing[3]};
  }
`;

export const Title = styled.h1`
  font-size: ${typography.fontSize['3xl']};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.text.primary};
  margin: 0;
  text-align: center;

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${typography.fontSize['2xl']};
  }
`;

export const PdfFrame = styled.iframe`
  width: 100%;
  min-height: 80vh;
  border: none;
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.lg};
  background: ${colors.white};

  @media (max-width: ${breakpoints.md}) {
    min-height: 75vh;
  }

  @media (max-width: ${breakpoints.sm}) {
    min-height: 70vh;
    border-radius: ${borderRadius.md};
  }
`;

export const DownloadLink = styled.a`
  color: ${colors.primary};
  font-weight: ${typography.fontWeightSemiBold};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
