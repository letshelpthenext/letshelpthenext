// Mock framer-motion before importing any components
jest.mock('framer-motion', () => {
  const React = require('react');

  // Filter out framer-motion specific props to avoid React warnings
  const filterMotionProps = (props) => {
    const motionProps = [
      'initial', 'animate', 'exit', 'variants', 'transition',
      'whileHover', 'whileTap', 'whileFocus', 'whileDrag', 'whileInView',
      'drag', 'dragConstraints', 'dragElastic', 'dragMomentum',
      'onDrag', 'onDragStart', 'onDragEnd', 'onAnimationStart', 'onAnimationComplete',
      'layout', 'layoutId', 'custom', 'inherit', 'onViewportEnter', 'onViewportLeave',
      'viewport', 'style', // keep style but motion handles it specially
    ];
    const filtered = {};
    Object.keys(props).forEach(key => {
      if (!motionProps.includes(key)) {
        filtered[key] = props[key];
      }
    });
    return filtered;
  };

  const createMockComponent = (element) => {
    return React.forwardRef(({ children, ...props }, ref) =>
      React.createElement(element, { ...filterMotionProps(props), ref }, children)
    );
  };

  return {
    motion: {
      div: createMockComponent('div'),
      span: createMockComponent('span'),
      button: createMockComponent('button'),
      nav: createMockComponent('nav'),
      ul: createMockComponent('ul'),
      li: createMockComponent('li'),
      a: createMockComponent('a'),
      p: createMockComponent('p'),
      h1: createMockComponent('h1'),
      h2: createMockComponent('h2'),
      h3: createMockComponent('h3'),
      header: createMockComponent('header'),
      footer: createMockComponent('footer'),
      section: createMockComponent('section'),
      article: createMockComponent('article'),
      main: createMockComponent('main'),
      img: createMockComponent('img'),
      svg: createMockComponent('svg'),
      path: createMockComponent('path'),
    },
    AnimatePresence: ({ children }) => children,
    useMotionValue: () => ({ set: jest.fn(), get: () => 0 }),
    useTransform: () => 0,
    useSpring: () => ({ set: jest.fn(), get: () => 0 }),
    useAnimation: () => ({ start: jest.fn(), stop: jest.fn() }),
    useInView: () => true,
    useScroll: () => ({ scrollY: { get: () => 0 }, scrollYProgress: { get: () => 0 } }),
  };
});

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';

// Helper function to render App with all required providers
const renderWithProviders = (ui) => {
  return render(
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter>
          {ui}
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
};

test('renders App without crashing', () => {
  renderWithProviders(<App />);
  // App should render without throwing any errors
  expect(document.getElementById('main-content')).toBeInTheDocument();
});
