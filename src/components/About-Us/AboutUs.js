import { MainWrapper, CaptionBox, ContentBox } from './aboutUs.styles';

const AboutUs = () => {
  return (
    <MainWrapper>
      <CaptionBox className='bg-warning p-3'>
        <h4>About Us</h4>
      </CaptionBox>
      <ContentBox>
        <p>
          We are a non-profit organization dedicated to helping international
          students succeed in their academic pursuits. We understand that
          navigating the school application process and settling into a new
          environment can be challenging, which is why we are here to offer our
          support every step of the way. <br />
          Our team of experienced professionals has extensive knowledge and
          expertise in the education sector, and we are committed to providing
          high-quality guidance to help students achieve their goals. Whether
          it's filling out applications, applying for a student visa, securing
          scholarships, or finding suitable accommodation on campus, we are here
          to help.
        </p>

        <p>
          At our organization, we believe that every student should have access
          to a quality education, regardless of their background or
          circumstances. That's why we work tirelessly to ensure that
          international students receive the support they need to succeed and
          thrive in their academic journeys. <br />
          We are proud to have helped countless international students from all
          over the world, and we look forward to continuing to make a positive
          impact in the lives of those we serve. Thank you for visiting our
          website, and we hope that you will consider partnering with us to
          support our mission.
        </p>
      </ContentBox>
    </MainWrapper>
  );
};

export default AboutUs;
