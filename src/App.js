import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Welcome from './screens/Welcome/Welcome';
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
const TestimonialsScreen = lazy(() => import('./screens/Testimonials/Testimonials'));
const NewsletterScreen = lazy(() => import('./screens/Newsletter/Newsletter'));
const NotFoundScreen = lazy(() => import('./screens/NotFound/NotFound'));

function App() {
  const location = useLocation();

  // Routes that should show the footer
  const footerRoutes = [
    '/home',
    '/home/get-involved',
    '/home/our-work',
    '/home/our-mission',
    '/home/testimonials',
    '/events',
    '/newsletter'
  ];
  const showFooter = footerRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner fullScreen />}>
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="events" element={<EventsScreen />} />
            <Route path="newsletter" element={<NewsletterScreen />} />
            <Route path="/home" element={<Hero />}>
              <Route index element={<HomeScreen />} />
              <Route path="get-involved" element={<GetInvolvedScreen />} />
              <Route path="our-work" element={<OurWorkScreen />} />
              <Route path="our-mission" element={<OurMissionScreen />} />
              <Route path="testimonials" element={<TestimonialsScreen />} />
            </Route>
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </main>
      </Suspense>
      {showFooter && <Footer />}
    </>
  );
}

export default App;
