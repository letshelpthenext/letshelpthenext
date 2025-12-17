import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

/**
 * Page transition animations
 */
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
      when: 'beforeChildren'
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const slideVariants = {
  initial: {
    opacity: 0,
    x: 100
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const fadeVariants = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

export const scaleVariants = {
  initial: {
    opacity: 0,
    scale: 0.95
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

/**
 * PageTransition wrapper component
 * Wraps page content with enter/exit animations
 */
const PageTransition = ({
  children,
  variants = pageVariants,
  mode = 'wait',
  className = '',
  style = {}
}) => {
  const location = useLocation();

  return (
    <AnimatePresence mode={mode}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className={className}
        style={{
          width: '100%',
          minHeight: '100%',
          ...style
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

/**
 * AnimatedOutlet - wrapper for React Router Outlet with transitions
 * Use this in your Layout component
 */
export const AnimatedOutlet = ({
  children,
  variants = pageVariants
}) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        style={{ width: '100%' }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default PageTransition;
