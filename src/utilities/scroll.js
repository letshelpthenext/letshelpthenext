/**
 * Scroll helpers that honour the OS "reduce motion" setting.
 *
 * The `prefers-reduced-motion` block in styles/global.css only reaches CSS
 * transitions and animations — it cannot affect a programmatic
 * window.scrollTo({ behavior: 'smooth' }), which keeps animating the viewport
 * regardless. These wrappers check the preference and jump instantly instead.
 */

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const scrollToTop = () => {
  if (typeof window === 'undefined') return;

  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth'
  });
};
