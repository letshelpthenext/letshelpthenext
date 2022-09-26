import { MainWrapper } from './home.styles';
import OurStory from '../../components/Our-Story/OurStory';
import AboutUs from '../../components/About-Us/AboutUs';
import ContactUs from '../../components/Contact-Us/ContactUs';


const Home = () => {
  return (
    <MainWrapper>
      <OurStory />
      <AboutUs />
      <ContactUs />
    </MainWrapper>
  )
}

export default Home