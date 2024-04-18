import {
  MainWrapper,
  ApplyVisaWrapper,
} from './ourWork.styles';
import visaImage from '../../assets/visa.jpeg';

const OurWork = () => {
  return (
    <MainWrapper className="container">
      <p>
        <strong className='h2'>T</strong>he difference between successfully going through the
        process of attending university or college in the United States or
        having a poor experience is doing your own research. For example,
        finding a university is the first step. Choosing one that is close to
        family or friends in the States will probably brighten the journey. The
        next steps are:
      </p>
      <ul>
        <li>Translate the high school transcript in English</li>
        <li>Find out the documents required for the school</li>
        <li>
          Investigate tests that must be taken to assure an acceptance letter
        </li>
        <li>Provide financial proof</li>
      </ul>

      <ApplyVisaWrapper>
        <p>
          <strong className='h2'>A</strong>fter being accepted by a school, the following
          process is applying for a student visa. Since qualifying for a student
          visa is a courtesy, giving oneself the best shot may be the only hope.
          As a result of providing assistance to applicants in different
          countries, we have learned that each region comes with its
          difficulties. For instance, the social-political situation of your
          home country and your financial situation contribute to determining
          the probability of being granted a visa. Considering we are a
          faith-friendly organization, we believe Heavenly Father will provide
          and make miracles if that’s His plan.
        </p>
        <div>
          <img src={visaImage} alt="US Visa" />
        </div>
      </ApplyVisaWrapper>
      <p>
        Our Mentorship program does not provide sponsorship; however, we are
        present with the applicant for every application, every decision, and
        every phone call as we advocate on their behalf. We serve by
        providing love and support. We look for host families, and we provide
        financial assistance for tuition and student life expenses to the most
        in need.
      </p>
      <p>
        When our mentees arrive in the States, helping them have the best
        American experience is what we aim for. Visiting, Exploring tastes,
        sharing culture, and learning from others bring the best acquaintance
        and connections
      </p>
      <br />
    </MainWrapper>
  );
};

export default OurWork;
