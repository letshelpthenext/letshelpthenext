import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, shadows, borderRadius, spacing } from '../../styles/tokens';

const ScrollButton = styled(motion.button)`
  position: fixed;
  bottom: ${spacing[6]};
  right: ${spacing[6]};
  width: 50px;
  height: 50px;
  border-radius: ${borderRadius.full};
  background: ${colors.primary};
  color: ${colors.white};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${shadows.lg};
  z-index: 999;
  font-size: 1.25rem;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${colors.primaryDark};
  }

  &:focus {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }

  @media (max-width: 640px) {
    bottom: ${spacing[4]};
    right: ${spacing[4]};
    width: 44px;
    height: 44px;
  }
`;

const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

/**
 * ScrollToTop component that:
 * 1. Scrolls to top on route change
 * 2. Shows a floating button to scroll to top when scrolled down
 */
const ScrollToTop = ({ showButton = true, scrollThreshold = 300 }) => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  // Show/hide button based on scroll position
  useEffect(() => {
    if (!showButton) return;

    const toggleVisibility = () => {
      if (window.pageYOffset > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showButton, scrollThreshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {showButton && isVisible && (
        <ScrollButton
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowIcon />
        </ScrollButton>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
