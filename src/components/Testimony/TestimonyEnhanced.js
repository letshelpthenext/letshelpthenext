import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, spacing, shadows, borderRadius, typography, breakpoints } from '../../styles/tokens';

const TestimonyEnhanced = ({ userTestimony, author, program, country, flag, originalTestimony }) => {
  return (
    <TestimonyCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <TestimonyContent>
        <QuoteIcon>"</QuoteIcon>
        <TestimonyText>
          {userTestimony}
        </TestimonyText>
        {originalTestimony && (
          <OriginalQuote>
            <OriginalQuoteLabel>Original (French):</OriginalQuoteLabel>
            <OriginalQuoteText>"{originalTestimony}"</OriginalQuoteText>
          </OriginalQuote>
        )}
      </TestimonyContent>
      <TestimonyFooter>
        <AuthorInfo>
          <AuthorName>{author}</AuthorName>
          {(program || country || flag) && (
            <AuthorDetails>
              {flag && <CountryFlag>{flag}</CountryFlag>}
              {country && <span>{country}</span>}
              {country && program && <span>•</span>}
              {program && <span>{program}</span>}
            </AuthorDetails>
          )}
        </AuthorInfo>
      </TestimonyFooter>
    </TestimonyCard>
  );
};

// Styled Components
const TestimonyCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  box-shadow: ${shadows.lg};
  border: 1px solid ${colors.gray100};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: ${spacing[8]};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.xl};
  }

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[6]};
    margin-bottom: ${spacing[6]};
  }
`;

const TestimonyContent = styled.div`
  position: relative;
  margin-bottom: ${spacing[6]};
`;

const QuoteIcon = styled.div`
  font-size: 4rem;
  color: ${colors.primary};
  opacity: 0.1;
  position: absolute;
  top: -10px;
  left: -10px;
  font-family: serif;
  line-height: 1;
  pointer-events: none;
`;

const TestimonyText = styled.p`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.gray700};
  font-style: italic;
  position: relative;
  z-index: 1;
  margin-bottom: ${spacing[4]};
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }
`;

const OriginalQuote = styled.div`
  margin-top: ${spacing[4]};
  padding: ${spacing[4]};
  background: ${colors.gray50};
  border-radius: ${borderRadius.md};
  border-left: 4px solid ${colors.secondary};
`;

const OriginalQuoteLabel = styled.div`
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.gray600};
  margin-bottom: ${spacing[2]};
`;

const OriginalQuoteText = styled.p`
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray600};
  font-style: italic;
  margin: 0;
  line-height: ${typography.lineHeight.relaxed};
`;

const TestimonyFooter = styled.div`
  border-top: 1px solid ${colors.gray200};
  padding-top: ${spacing[4]};
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeightSemiBold};
  color: ${colors.gray800};
  margin-bottom: ${spacing[2]};
`;

const AuthorDetails = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[2]};
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray600};
  flex-wrap: wrap;
`;

const CountryFlag = styled.span`
  font-size: ${typography.fontSize.lg};
`;

export default TestimonyEnhanced;
