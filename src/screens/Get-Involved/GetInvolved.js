import { MainWrapper, TeamMembersWrapper } from './getInvolved.styles';
import TeamMember from '../../components/Team-Member/TeamMember';
import mishma from '../../assets/mishma.png';
import kwaku from '../../assets/logo512.png'

const GetInvolved = () => {
  const mishmaBio = `The purpose of this nonprofit organization is to support international students 
  financially. Throughout my college experience, I have met incredible people who have shown me kindness, 
  love, and emotional, and cognitive support. Their counsel still guides me through this day. 
  We believe in paying it forward, to whoever the opportunity is presented because life can be difficult 
  for international students away from home for too long and facing up financial difficulties over time. 
  This organization exists to provide breathing room to those who need financial assistance.`;

  const kwakuBio = `Rodney Erickson is a content marketing professional at HubSpot, a CRM platform 
  that helps companies attract visitors, convert leads, and close customers. Previously, Rodney worked 
  as a marketing manager for a tech software startup. He graduated with honors from Columbia University 
  with a dual degree in Business Administration and Creative Writing.`;

  return (
    <MainWrapper className="container pb-4">
      <br />
      <h4>Donate</h4>
      <p>
        Money is not the only commodity that is fun to give. We can give time,
        we can give our expertise, we can give our love, or simply give a smile.
        What does that cost? The point is, none of us can ever run out of
        something worthwhile to give.
        <br />
        <strong>Click the button below to donate.</strong>
      </p>
      <button className="btn btn-success">Donate</button>

      <h4 className="mt-4">Volunteer</h4>
      <p>
        Our objective is to finance education because “Education is the most
        powerful weapon which you can use to change the world.” Said Nelson
        Mandela.
        <br />
        <br />
        <strong>Ways You can help:</strong>
        <br />
        Be a host family, and provide an international student with a home for a
        few months. Donate books, computers, coats, etc
      </p>
      <hr />

      <h2>Our Team</h2>
      <TeamMembersWrapper>
        <TeamMember
          memberImage={mishma}
          memberName="Mishma Buisson, Founder"
          memberBio={mishmaBio}
        />
        <hr />
        <TeamMember
          memberImage={kwaku}
          memberName="Kwaku Nkansah, Executive"
          memberBio={kwakuBio}
        />
      </TeamMembersWrapper>
    </MainWrapper>
  );
};

export default GetInvolved;
