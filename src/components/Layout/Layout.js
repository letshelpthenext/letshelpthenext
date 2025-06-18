import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';

const Layout = ({ children, title, description, keywords }) => {
  const location = useLocation();

  // Determine if footer should be shown based on current route
  const showFooter = [
    '/home',
    '/home/get-involved',
    '/home/our-work',
    '/home/our-mission',
    '/events'
  ].includes(location.pathname);

  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Let's Help The Next` : "Let's Help The Next - Supporting International Students"}</title>
        <meta name="description" content={description || "Let's Help The Next (LHTN) provides financial assistance and scholarships to international students studying in the U.S. who face financial difficulties."} />
        <meta name="keywords" content={keywords || "international students, scholarships, financial assistance, education, nonprofit, LHTN"} />
        <meta name="author" content="Let's Help The Next" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title ? `${title} | Let's Help The Next` : "Let's Help The Next - Supporting International Students"} />
        <meta property="og:description" content={description || "Let's Help The Next (LHTN) provides financial assistance and scholarships to international students studying in the U.S. who face financial difficulties."} />
        <meta property="og:site_name" content="Let's Help The Next" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title ? `${title} | Let's Help The Next` : "Let's Help The Next - Supporting International Students"} />
        <meta property="twitter:description" content={description || "Let's Help The Next (LHTN) provides financial assistance and scholarships to international students studying in the U.S. who face financial difficulties."} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Let's Help The Next",
            "alternateName": "LHTN",
            "description": "A nonprofit organization providing financial assistance and scholarships to international students studying in the U.S.",
            "url": window.location.origin,
            "logo": `${window.location.origin}/logo512.png`,
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "letshelpthenext@gmail.com",
              "contactType": "General Inquiry"
            },
            "sameAs": []
          })}
        </script>
      </Helmet>

      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <div className="min-h-screen flex flex-col">
        {location.pathname !== '/' && <Header />}

        <main id="main-content" className="flex-1">
          {children}
        </main>

        {showFooter && <Footer />}
      </div>
    </>
  );
};

export default Layout;
