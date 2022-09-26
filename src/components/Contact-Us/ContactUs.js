import { MainWrapper, CaptionBox, ContentBox } from './contactus.styles';

const ContactUs = () => {
  return (
    <MainWrapper>
      <CaptionBox className="bg-info p-3">
        <h4>Contact Us</h4>
      </CaptionBox>
      <ContentBox>
        <p>
          <i className="fas fa-envelope"></i> Contact point
        </p>

        <p>
          <i className="fas fa-camera fa-1x"></i> Contact point
        </p>

        <p>
          <i className="fas fa-camera fa-1x"></i> Contact point
        </p>

        <p>
          <i className="fas fa-envelope"></i> Contact point
        </p>
      </ContentBox>
    </MainWrapper>
  );
};

export default ContactUs;
