import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { colors, spacing, shadows, borderRadius, typography } from '../../styles/tokens';

const NewsletterContainer = styled.div`
  background: linear-gradient(135deg, ${colors.secondaryLight} 0%, ${colors.secondary} 100%);
  border-radius: ${borderRadius.xl};
  padding: ${spacing[8]};
  text-align: center;
  margin-top: ${spacing[8]};
  border: 1px solid ${colors.secondaryDark};
`;

const NewsletterTitle = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeightBold};
  color: ${colors.gray900};
  margin-bottom: ${spacing[4]};
`;

const NewsletterDescription = styled.p`
  font-size: ${typography.fontSize.base};
  color: ${colors.gray700};
  margin-bottom: ${spacing[6]};
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  line-height: ${typography.lineHeight.relaxed};
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
  max-width: 400px;
  margin: 0 auto;

  @media (min-width: 640px) {
    flex-direction: row;
  }

  @media (max-width: 375px) {
    gap: ${spacing[3]};
    max-width: 100%;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: ${spacing[3]} ${spacing[4]};
  border: 2px solid ${colors.gray200};
  border-radius: ${borderRadius.md};
  font-size: ${typography.fontSize.base};
  color: ${colors.gray900};
  background-color: ${colors.white};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(31, 155, 207, 0.1);
  }

  &::placeholder {
    color: ${colors.gray400};
  }

  &.error {
    border-color: ${colors.error};
  }
`;

const SubscribeButton = styled.button`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  border: none;
  padding: ${spacing[3]} ${spacing[6]};
  border-radius: ${borderRadius.md};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeightSemiBold};
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;
  white-space: nowrap;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: ${shadows.md};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(31, 155, 207, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusMessage = styled.div`
  margin-top: ${spacing[4]};
  padding: ${spacing[3]} ${spacing[4]};
  border-radius: ${borderRadius.md};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeightMedium};

  &.success {
    background-color: ${colors.successLight};
    color: ${colors.success};
    border: 1px solid ${colors.success};
  }

  &.error {
    background-color: ${colors.errorLight};
    color: ${colors.error};
    border: 1px solid ${colors.error};
  }
`;

const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid ${colors.white};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: ${spacing[2]};

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const NewsLetterSignUp = () => {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your email address.' });
      return;
    }

    if (!validateEmail(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_NEWSLETTER_TEMPLATE_ID || process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Thank you for subscribing! You\'ll receive updates about our mission and impact.'
      });
      setEmail('');
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to subscribe. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (status) setStatus(null);
  };

  return (
    <NewsletterContainer>
      <NewsletterTitle>Stay Connected</NewsletterTitle>
      <NewsletterDescription>
        Subscribe to our newsletter to receive updates about our scholarship programs,
        success stories, and ways to get involved in supporting international students.
      </NewsletterDescription>

      <NewsletterForm ref={form} onSubmit={handleSubmit}>
        <EmailInput
          type="email"
          name="subscriber_email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email address"
          required
          aria-label="Email address for newsletter subscription"
          className={status?.type === 'error' ? 'error' : ''}
        />
        <SubscribeButton type="submit" disabled={isSubmitting}>
          {isSubmitting && <LoadingSpinner />}
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </SubscribeButton>
      </NewsletterForm>

      {status && (
        <StatusMessage className={status.type} role="alert">
          {status.message}
        </StatusMessage>
      )}
    </NewsletterContainer>
  );
};

export default NewsLetterSignUp;
