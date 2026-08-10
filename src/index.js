import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'framer-motion';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/global.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <HelmetProvider>
      {/* reducedMotion="user" makes every framer-motion component honour the
          OS "reduce motion" setting: transforms are skipped, opacity fades
          still run so content does not simply pop in. The CSS counterpart for
          non-framer transitions lives in styles/global.css. */}
      <MotionConfig reducedMotion="user">
        <Router>
          <App />
        </Router>
      </MotionConfig>
    </HelmetProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
