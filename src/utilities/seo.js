/** Production origin, used when rendering outside a browser. */
export const SITE_URL = 'https://letshelpthenext.org';

/**
 * Canonical URL for the current page.
 *
 * Deliberately origin + pathname only. Using window.location.href meant every
 * campaign link (?utm_source=newsletter, ?fbclid=...) self-canonicalised to a
 * distinct URL, splitting one page's ranking signals across many duplicates.
 */
export const canonicalUrl = () =>
  typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}`
    : SITE_URL;
