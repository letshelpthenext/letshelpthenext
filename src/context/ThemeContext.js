import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// Helper to safely check matchMedia
const getSystemPrefersDark = () => {
  if (typeof window === 'undefined') return false;
  try {
    return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
  } catch {
    return false;
  }
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first (only in browser)
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) {
        return saved === 'dark';
      }
    }
    // Then check system preference
    return getSystemPrefersDark();
  });

  useEffect(() => {
    // Update localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Update document attribute for CSS
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');

    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDarkMode ? '#111827' : '#0E7366');
    }
  }, [isDarkMode]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    try {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        const saved = localStorage.getItem('theme');
        if (!saved) {
          setIsDarkMode(e.matches);
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } catch {
      // matchMedia not supported
    }
  }, []);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const value = {
    isDarkMode,
    toggleTheme,
    theme: isDarkMode ? 'dark' : 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
