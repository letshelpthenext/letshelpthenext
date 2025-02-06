import { MainWrapper, TeamMembersWrapper } from './getInvolved.styles';
import TeamMember from '../../components/Team-Member/TeamMember';
import mishma from '../../assets/mishma.png';
import kwaku from '../../assets/kwaku.JPG';
import billy from '../../assets/logo512.png';
import kim from '../../assets/kim.jpg';
import michel from '../../assets/logo512.png';

const GetInvolved = () => {
  const mishmaBio = `The purpose of this nonprofit organization is to support international students 
  financially. Throughout my college experience, I have met incredible people who have shown me kindness, 
  love, and emotional, and cognitive support. Their counsel still guides me through this day. 
  We believe in paying it forward, to whoever the opportunity is presented because life can be difficult 
  for international students away from home for too long and facing up financial difficulties over time. 
  This organization exists to provide breathing room to those who need financial assistance.`;

  const kwakuBio = `We love serving people, especially in this space where every day we have the opportunity 
  to help those in need, solve complex problems, and make a positive impact in the world. As a firm believer 
  in the power of humanity and kindness, we are committed to using our skills and experience to create meaningful 
  change and make the world a better place for all. We know we have limitations and cannot do it all. So, we 
  welcome all the assistance we can get to continue making positive changes in the lives of many.`;

  const billyBio = `Similar to how every life experience shapes our character, a college journey can 
  refine our work ethics. Through Let's Help the Next, we're excited to guide students as they take their 
  initial steps into the world of higher education`;

  const kimBio = `I know the value and challenge of obtaining higher education. I believe that it is the key 
  to unlocking a better future for young students and their families. "Where much is given, much is required.`;

  const michelBio = `Change can truly happen when one is courageous enough to act.  Those who take action to 
  better their own lives are those who will one day be able to help the next! `;

  return (
    <MainWrapper className='container pb-4'>
      <br />
      <h4>Donate</h4>
      <p>
        Money is not the only commodity that is fun to give. You can give your time,
        your expertise, your love, or simply give a smile.
        What does that cost? The point is, none of us can ever run out of
        something worthwhile to give.
        <br />
        <strong>Click the button below to donate.</strong>
      </p>
      <a href="https://www.zeffy.com/en-US/donation-form/868e9c58-5d07-41f6-8daf-ca648cc9dc8a" target='_blank' className='btn btn-success' rel="noreferrer">Donate</a>

      <h4 className='mt-4'>Volunteer</h4>
      <p>
        Our objective is to finance education because “Education is the most
        powerful weapon which you can use to change the world.” Said Nelson
        Mandela.
        <br />
        <br />
        {/* <strong>Ways You can help:</strong>
        <br />
        Be a host family, and provide an international student with a home for a
        few months. Donate books, computers, coats, etc */}
      </p>
      <hr />

      <h2>Our Team</h2>
      <TeamMembersWrapper>
        <TeamMember
          memberImage={mishma}
          memberName='Mishma Buisson'
          memberDesignation='Founder'
          memberBio={mishmaBio}
        />
        <TeamMember
          memberImage={kwaku}
          memberName='Kwaku Appau-Nkansah'
          memberDesignation='Executive'
          memberBio={kwakuBio}
        />
        <TeamMember
          memberImage={billy}
          memberName='Bidford R. Jean-Baptiste'
          memberDesignation='Executive'
          memberBio={billyBio}
        />
        <TeamMember
          memberImage={kim}
          memberName='Kim Swallow'
          memberDesignation='Executive'
          memberBio={kimBio}
        />
        <TeamMember
          memberImage={michel}
          memberName='Michel Bergeron'
          memberDesignation='Executive'
          memberBio={michelBio}
        />
      </TeamMembersWrapper>
    </MainWrapper>
  );
};

export default GetInvolved;
