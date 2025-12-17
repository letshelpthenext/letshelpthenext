import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { colors, spacing, borderRadius, shadows, typography } from '../../styles/tokens';

const rippleEffect = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.5;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

const baseStyles = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[2]};
  padding: ${props => {
    switch (props.$size) {
      case 'sm': return `${spacing[2]} ${spacing[3]}`;
      case 'lg': return `${spacing[4]} ${spacing[6]}`;
      default: return `${spacing[3]} ${spacing[5]}`;
    }
  }};
  font-family: inherit;
  font-size: ${props => {
    switch (props.$size) {
      case 'sm': return typography.fontSize.sm;
      case 'lg': return typography.fontSize.lg;
      default: return typography.fontSize.base;
    }
  }};
  font-weight: ${typography.fontWeightSemiBold};
  line-height: 1.5;
  text-decoration: none;
  border-radius: ${props => props.$rounded ? borderRadius.full : borderRadius.lg};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease;
  outline: none;
  border: 2px solid transparent;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.3) 10%, transparent 10%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
  }

  &:not(:disabled):active::after {
    transform: scale(0);
    opacity: 1;
    transition: 0s;
  }
`;

const primaryStyles = css`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  border-color: ${colors.primary};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${shadows.lg}, 0 4px 20px rgba(14, 115, 102, 0.3);
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(14, 115, 102, 0.4);
  }
`;

const secondaryStyles = css`
  background: ${colors.accent};
  color: ${colors.textDark};
  border-color: ${colors.accent};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${shadows.lg};
    background: #E5C090;
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(242, 207, 163, 0.4);
  }
`;

const outlineStyles = css`
  background: transparent;
  color: ${colors.primary};
  border-color: ${colors.primary};

  &:hover:not(:disabled) {
    background: ${colors.primary};
    color: ${colors.white};
    transform: translateY(-2px);
    box-shadow: ${shadows.md};
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(14, 115, 102, 0.3);
  }
`;

const ghostStyles = css`
  background: transparent;
  color: ${colors.primary};
  border-color: transparent;

  &:hover:not(:disabled) {
    background: ${colors.primaryLight};
    transform: translateY(-1px);
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(14, 115, 102, 0.2);
  }
`;

const dangerStyles = css`
  background: linear-gradient(135deg, ${colors.error} 0%, #DC2626 100%);
  color: ${colors.white};
  border-color: ${colors.error};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${shadows.lg}, 0 4px 20px rgba(239, 68, 68, 0.3);
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.4);
  }
`;

const getVariantStyles = (variant) => {
  switch (variant) {
    case 'secondary': return secondaryStyles;
    case 'outline': return outlineStyles;
    case 'ghost': return ghostStyles;
    case 'danger': return dangerStyles;
    default: return primaryStyles;
  }
};

const StyledButton = styled.button`
  ${baseStyles}
  ${props => getVariantStyles(props.$variant)}
  ${props => props.$fullWidth && css`width: 100%;`}
`;

const StyledLink = styled.a`
  ${baseStyles}
  ${props => getVariantStyles(props.$variant)}
  ${props => props.$fullWidth && css`width: 100%;`}
`;

const LoadingSpinner = styled.span`
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  rounded = false,
  fullWidth = false,
  loading = false,
  disabled = false,
  href,
  target,
  rel,
  type = 'button',
  onClick,
  className,
  ...props
}) => {
  const commonProps = {
    $variant: variant,
    $size: size,
    $rounded: rounded,
    $fullWidth: fullWidth,
    className,
    disabled: disabled || loading,
    ...props
  };

  const content = (
    <>
      {loading && <LoadingSpinner aria-hidden="true" />}
      {children}
    </>
  );

  if (href) {
    return (
      <StyledLink
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        {...commonProps}
      >
        {content}
      </StyledLink>
    );
  }

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      {...commonProps}
    >
      {content}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  rounded: PropTypes.bool,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Button;
