import { MainWrapper, PdfFrame  } from './events.styles';
import Header from '../../components/Header/Header';
import dinner from '../../assets/fundraiser.jpeg'; //TODO: change to the actual file
 
const Events = () => {
  return (
    <MainWrapper>
      <Header />
      <center>
      <PdfFrame src={`${dinner}#toolbar=0`} title='Dinner Event'></PdfFrame>
      </center>
    </MainWrapper>
  );
};

export default Events;
