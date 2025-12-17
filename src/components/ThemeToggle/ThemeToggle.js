import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import { colors, borderRadius } from '../../styles/tokens';

const ToggleWrapper = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  background: ${props => props.$isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  border: none;
  border-radius: ${borderRadius.full};
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    background: ${props => props.$isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)'};
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${props => props.$visible ? 'translateY(0) rotate(0)' : 'translateY(-30px) rotate(-90deg)'};
  opacity: ${props => props.$visible ? 1 : 0};
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleWrapper
      onClick={toggleTheme}
      $isDark={isDarkMode}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <IconWrapper $visible={!isDarkMode}>☀️</IconWrapper>
      <IconWrapper $visible={isDarkMode}>🌙</IconWrapper>
    </ToggleWrapper>
  );
};

export default ThemeToggle;
