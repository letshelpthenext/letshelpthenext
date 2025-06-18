import { Routes, Route, useLocation } from 'react-router-dom';
import Welcome from './screens/Welcome/Welcome';
import Hero from './components/Hero/Hero';
// import BlogsHeader from './components/BlogsHeader/BlogsHeader';
import HomeScreen from './screens/Home/Home';
import GetInvolvedScreen from './screens/Get-Involved/GetInvolved';
import OurWorkScreen from './screens/Our-Work/OurWork';
import OurMissionScreen from './screens/Our-Mission/OurMission';
import ContactUsScreen from './screens/Contact-Us/ContactUs';
// import BlogsScreen from './screens/Blogs/Blogs';
// import DNWPScreen from './components/Blogs/DNWP';
import EventsScreen from './screens/Events/Events';
import NotFoundScreen from './screens/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="events" element={<EventsScreen />} />
        <Route path="contact-us" element={<ContactUsScreen />} />
        {/* <Route path="/blogs" element={<BlogsHeader />} >
          <Route index element={<BlogsScreen />} />
          <Route path="dnwap" element={<DNWPScreen />} />
        </Route> */}
        <Route path="/home" element={<Hero />}>
          <Route index element={<HomeScreen />} />
          <Route path="get-involved" element={<GetInvolvedScreen />} />
          <Route path="our-work" element={<OurWorkScreen />} />
          <Route path="our-mission" element={<OurMissionScreen />} />
        </Route>
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
      { location.pathname === '/home/get-involved' && <Footer />}
      { location.pathname === '/home/our-work' && <Footer />}
      { location.pathname === '/home/our-mission' && <Footer />}
      { location.pathname === '/events' && <Footer />}
      {/* { location.pathname === '/blogs' && <Footer />} */}
      { location.pathname === '/home' && <Footer />}
    </>
  );
}

export default App;
