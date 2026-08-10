import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Footer from './components/Footer/Footer';
import './styles/responsive.css';

// Lazy load non-critical routes for better performance
const HomeScreen = lazy(() => import('./screens/Home/Home'));
const GetInvolvedScreen = lazy(() => import('./screens/Get-Involved/GetInvolved'));
const OurWorkScreen = lazy(() => import('./screens/Our-Work/OurWork'));
const OurMissionScreen = lazy(() => import('./screens/Our-Mission/OurMission'));
const EventsScreen = lazy(() => import('./screens/Events/Events'));
const StudentsScreen = lazy(() => import('./screens/Students/Students'));
const StudentDetailScreen = lazy(() => import('./screens/Students/StudentDetail'));
const ApplyScreen = lazy(() => import('./screens/Apply/Apply'));
const NewsletterScreen = lazy(() => import('./screens/Newsletter/Newsletter'));
const NotFoundScreen = lazy(() => import('./screens/NotFound/NotFound'));

/**
 * Everything used to live under /home. Those URLs are in bookmarks, inbound
 * links, and the old sitemap, so redirect them to their new home at the root
 * rather than dropping them on the 404 page.
 */
const LegacyHomeRedirect = () => {
  const location = useLocation();
  const path = location.pathname.replace(/^\/home/, '') || '/';
  return <Navigate to={`${path}${location.search}${location.hash}`} replace />;
};

function App() {
  const location = useLocation();

  // Routes that should show the footer
  const footerRoutes = [
    '/',
    '/get-involved',
    '/our-work',
    '/our-mission',
    '/students',
    '/apply',
    '/events',
    '/newsletter'
  ];
  // Student detail pages (/students/:slug) are not listed individually.
  const showFooter =
    footerRoutes.includes(location.pathname) ||
    location.pathname.startsWith('/students/');

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner fullScreen />}>
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Hero />}>
              <Route index element={<HomeScreen />} />
              <Route path="get-involved" element={<GetInvolvedScreen />} />
              <Route path="our-work" element={<OurWorkScreen />} />
              <Route path="our-mission" element={<OurMissionScreen />} />
              <Route path="students" element={<StudentsScreen />} />
              <Route path="students/:slug" element={<StudentDetailScreen />} />
              <Route path="apply" element={<ApplyScreen />} />
            </Route>
            <Route path="events" element={<EventsScreen />} />
            <Route path="newsletter" element={<NewsletterScreen />} />
            {/* The old testimonials screen was never linked from anywhere.
                Its content now lives under /students. */}
            <Route path="testimonials" element={<Navigate to="/students" replace />} />
            {/* Matches /home and everything beneath it. */}
            <Route path="/home/*" element={<LegacyHomeRedirect />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </main>
      </Suspense>
      {showFooter && <Footer />}
    </>
  );
}

export default App;
