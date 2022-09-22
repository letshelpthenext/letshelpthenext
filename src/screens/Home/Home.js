import { MainWrapper } from './home.styles';
import OurStory from '../../components/Our-Story/OurStory';
import AboutUs from '../../components/About-Us/AboutUs';


const Home = () => {
  return (
    <MainWrapper className='container'>
      <OurStory />
      <AboutUs />
    </MainWrapper>
  )
}

export default Home