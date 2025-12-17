import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, spacing } from '../../styles/tokens';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  cursor: pointer;
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:focus-within {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }
`;

const HamburgerWrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
`;

const Line = styled(motion.span)`
  display: block;
  width: 24px;
  height: 2px;
  background-color: ${props => props.$color || colors.text};
  position: absolute;
  left: 50%;
  transform-origin: center;
`;

const MenuText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.$color || colors.text};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const AnimatedHamburger = ({
  isOpen,
  onClick,
  color = colors.text,
  showText = true,
  ariaLabel = 'Toggle menu'
}) => {
  const topVariants = {
    closed: { rotate: 0, y: -6, x: '-50%' },
    open: { rotate: 45, y: 0, x: '-50%' }
  };

  const middleVariants = {
    closed: { opacity: 1, x: '-50%' },
    open: { opacity: 0, x: '-50%' }
  };

  const bottomVariants = {
    closed: { rotate: 0, y: 6, x: '-50%' },
    open: { rotate: -45, y: 0, x: '-50%' }
  };

  const transition = {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1]
  };

  return (
    <Wrapper onClick={onClick}>
      <HamburgerWrapper
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        type="button"
      >
        <Line
          $color={color}
          variants={topVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={transition}
        />
        <Line
          $color={color}
          variants={middleVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={transition}
        />
        <Line
          $color={color}
          variants={bottomVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={transition}
        />
      </HamburgerWrapper>
      {showText && (
        <MenuText $color={color}>
          {isOpen ? 'Close' : 'Menu'}
        </MenuText>
      )}
    </Wrapper>
  );
};

export default AnimatedHamburger;
