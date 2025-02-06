import { MainWrapper, ApplyVisaWrapper, BYUIWrapper } from './ourWork.styles';
import visaImage from '../../assets/visa.jpeg';

const OurWork = () => {
  return (
    <MainWrapper className="container">
      <BYUIWrapper>
        <h4>
          A New Direction for Let’s Help the Next: Offering needs-based
          scholarships to International Students at BYU-I and Beyond
        </h4>
        <h5>
          <i>
            Emphasizing Support for international students from The Church Of
            Jesus Christ of Latter-day Saints
          </i>
        </h5>
        <p>
          Let’s Help the Next is thrilled to announce an exciting new direction
          in our efforts to support international students, currently with a
          particular focus on those studying at Brigham Young University-Idaho
          (BYU-I). Three of the founding Board members are alumnus of BYU-I and
          know the needs that international students face. With this in mind,
          the Board has unanimously agreed to focus our efforts on helping
          students who need help to continue their education.{' '}
        </p>

        <h5>
          <i>Understanding the Need</i>
        </h5>
        <p>
          International students face a myriad of challenges when they embark on
          their educational journey far from home. From navigating cultural
          differences to managing financial constraints, the transition can be
          overwhelming. For those who have served missions, these challenges are
          often compounded by the readjustment to academic life and the
          balancing act between their spiritual commitments and scholastic
          responsibilities.
        </p>

        <h5>
          <i>The Importance of Our Mission</i>
        </h5>
        <p>
          Our mission is to provide a support system that addresses the specific
          needs of these students. By focusing on church members, and
          particularly returned missionaries, we acknowledge their dedication
          and service while ensuring they have the resources and guidance needed
          to thrive academically and personally. Our new direction is rooted in
          the belief that supporting these students enriches not only their
          lives but also the broader community at BYU-I, mission of the Church,
          and will positively affect future generations of faithful followers of
          Jesus Christ.
        </p>

        <h4>Key Initiatives</h4>
        <h5>
          <i>Mentorship and Peer Support</i>
        </h5>
        <p>
          One of our core initiatives was to establish a relationship with the
          International Student Office at BYU-I which offers mentorship programs
          pairing international students with other students who have
          successfully navigated their educational journey. This peer support
          provides guidance, foster connections, and create a sense of
          community, helping students feel less isolated and more integrated
          into campus life. Flyers are available at the office for students to
          take that explains the mission of Let’s Help the Next. By placing
          these flyers in a location where international students already are,
          we are now able to reach more students in need.
        </p>

        <h5>
          <i>Financial Assistance and Scholarships</i>
        </h5>
        <p>
          Understanding the financial burdens that many international students
          face, we are introducing targeted scholarships and financial
          assistance programs. These resources aim to alleviate some of the
          economic pressures, allowing students to focus more on their studies
          and less on financial worries. For some students, an unexpected
          medical bill, injury or loss of work, means they may not be able to
          pay to register for classes. Oftentimes, they are already working as
          much as they can, are counseling with their Bishop, but still could
          use some help. For the year of 2024, we received 20 applications and
          donated $8,985 to alleviate the most pressing needs and barriers to
          these students' educations.
        </p>

        <h5>
          <i>Service Opportunities to Pay It Forward</i>
        </h5>
        <p>
          Giving back is the cornerstone of Let’s Help the Next’s mission. As we
          consider applicants, we prioritize those who demonstrate that they
          have done all they can to help themselves, by working part-time jobs,
          seeking support from their sponsor, applying for aid and carefully
          managing their funds in a responsible manner. We seek to help those
          who demonstrate a high level of integrity, a commitment to service and
          a commitment to “pay it forward” in small and large ways as they
          develop in their own careers.
        </p>

        <h5>
          <i>Looking Ahead</i>
        </h5>
        <p>
          As we embark on this new journey, we are committed to continuously
          assessing and refining our programs to better serve international
          students at BYU-I and beyond. We invite you to join us in this
          mission. Whether through volunteering, donations, or simply spreading
          the word, your support is invaluable in making a difference in the
          lives of these students. Together, we can build a brighter future for
          international students at BYU-I and beyond, honoring their dedication
          and helping them succeed in their academic and personal endeavors.
        </p>
      </BYUIWrapper>
      <hr />
      <p>
        <strong className="h2">T</strong>he difference between successfully
        going through the process of attending university or college in the
        United States or having a poor experience is doing your own research.
        For example, finding a university is the first step. Choosing one that
        is close to family or friends in the States will probably brighten the
        journey. The next steps are:
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
          <strong className="h2">A</strong>fter being accepted by a school, the
          following process is applying for a student visa. Since qualifying for
          a student visa is a courtesy, giving oneself the best shot may be the
          only hope. As a result of providing assistance to applicants in
          different countries, we have learned that each region comes with its
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
        every phone call as we advocate on their behalf. We serve by providing
        love and support. We look for host families, and we provide financial
        assistance for tuition and student life expenses to the most in need.
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
