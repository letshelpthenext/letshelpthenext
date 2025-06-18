import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { colors, spacing, shadows, borderRadius, typography } from '../../styles/tokens';

const FormContainer = styled.div`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  box-shadow: ${shadows.lg};
  overflow: hidden;
  border: 1px solid ${colors.gray200};
  max-width: 600px;
  margin: 0 auto;
`;

const FormHeader = styled.div`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  padding: ${spacing[6]};
  text-align: center;
`;

const FormTitle = styled.h3`
  font-family: ${typography.fontSecondary};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeightBold};
  margin: 0;
`;

const FormBody = styled.div`
  padding: ${spacing[8]};
`;

const FormGroup = styled.div`
  margin-bottom: ${spacing[6]};
`;

const Label = styled.label`
  display: block;
  font-weight: ${typography.fontWeightMedium};
  color: ${colors.gray700};
  margin-bottom: ${spacing[2]};
  font-size: ${typography.fontSize.sm};
`;

const Input = styled.input`
  width: 100%;
  padding: ${spacing[3]} ${spacing[4]};
  border: 2px solid ${colors.gray200};
  border-radius: ${borderRadius.md};
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.normal};
  color: ${colors.gray900};
  background-color: ${colors.white};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(31, 155, 207, 0.1);
  }

  &.error {
    border-color: ${colors.error};
  }

  &.success {
    border-color: ${colors.success};
  }

  &::placeholder {
    color: ${colors.gray400};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${spacing[3]} ${spacing[4]};
  border: 2px solid ${colors.gray200};
  border-radius: ${borderRadius.md};
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.normal};
  color: ${colors.gray900};
  background-color: ${colors.white};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  min-height: 120px;
  resize: vertical;
  box-sizing: border-box;
  font-family: ${typography.fontPrimary};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(31, 155, 207, 0.1);
  }

  &.error {
    border-color: ${colors.error};
  }

  &.success {
    border-color: ${colors.success};
  }

  &::placeholder {
    color: ${colors.gray400};
  }
`;

const ErrorMessage = styled.span`
  display: block;
  color: ${colors.error};
  font-size: ${typography.fontSize.sm};
  margin-top: ${spacing[1]};
`;

const SuccessMessage = styled.div`
  background-color: ${colors.successLight};
  color: ${colors.success};
  padding: ${spacing[4]};
  border-radius: ${borderRadius.md};
  margin-bottom: ${spacing[6]};
  border: 1px solid ${colors.success};
  font-weight: ${typography.fontWeightMedium};
`;

const ErrorAlert = styled.div`
  background-color: ${colors.errorLight};
  color: ${colors.error};
  padding: ${spacing[4]};
  border-radius: ${borderRadius.md};
  margin-bottom: ${spacing[6]};
  border: 1px solid ${colors.error};
  font-weight: ${typography.fontWeightMedium};
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  border: none;
  padding: ${spacing[4]} ${spacing[6]};
  border-radius: ${borderRadius.md};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeightSemiBold};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

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

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
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

const RequiredIndicator = styled.span`
  color: ${colors.error};
  margin-left: 2px;
`;

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = (name, value) => {
    switch (name) {
      case 'user_name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters long' : '';
      case 'user_email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'subject':
        return value.trim().length < 3 ? 'Subject must be at least 3 characters long' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters long' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    // Clear submit status
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      );

      setSubmitStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' });
      setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact us directly at letshelpthenext@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <FormHeader>
        <FormTitle>Send Us a Message</FormTitle>
      </FormHeader>

      <FormBody>
        {submitStatus?.type === 'success' && (
          <SuccessMessage>{submitStatus.message}</SuccessMessage>
        )}

        {submitStatus?.type === 'error' && (
          <ErrorAlert>{submitStatus.message}</ErrorAlert>
        )}

        <form ref={form} onSubmit={handleSubmit} noValidate>
          <FormGroup>
            <Label htmlFor="user_name">
              Full Name <RequiredIndicator>*</RequiredIndicator>
            </Label>
            <Input
              id="user_name"
              name="user_name"
              type="text"
              value={formData.user_name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your full name"
              className={errors.user_name ? 'error' : ''}
              required
              aria-describedby={errors.user_name ? 'user_name-error' : undefined}
            />
            {errors.user_name && (
              <ErrorMessage id="user_name-error" role="alert">
                {errors.user_name}
              </ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="user_email">
              Email Address <RequiredIndicator>*</RequiredIndicator>
            </Label>
            <Input
              id="user_email"
              name="user_email"
              type="email"
              value={formData.user_email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email address"
              className={errors.user_email ? 'error' : ''}
              required
              aria-describedby={errors.user_email ? 'user_email-error' : undefined}
            />
            {errors.user_email && (
              <ErrorMessage id="user_email-error" role="alert">
                {errors.user_email}
              </ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="subject">
              Subject <RequiredIndicator>*</RequiredIndicator>
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter message subject"
              className={errors.subject ? 'error' : ''}
              required
              aria-describedby={errors.subject ? 'subject-error' : undefined}
            />
            {errors.subject && (
              <ErrorMessage id="subject-error" role="alert">
                {errors.subject}
              </ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">
              Message <RequiredIndicator>*</RequiredIndicator>
            </Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your message here..."
              className={errors.message ? 'error' : ''}
              required
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <ErrorMessage id="message-error" role="alert">
                {errors.message}
              </ErrorMessage>
            )}
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting && <LoadingSpinner />}
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </form>
      </FormBody>
    </FormContainer>
  );
};

export default ContactForm;
