import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CustomDiv, BootStrapModal } from './welcome.styles';
import loveImage from '../../assets/home.jpg';
import supportImage from '../../assets/support.jpeg';
import liftImage from '../../assets/getinvolved.jpg';

const Welcome = () => {
  // Remove code below after the event
  const buyTicket = () => {
    const button = document.querySelector('#closeModal');
    if (button) {
      button.click();
    }
    window.open(
      'https://www.zeffy.com/en-US/ticketing/lets-help-the-next-latin-dance-and-auction-date-night-fundraiser',
      '_blank'
    );
  };
  useEffect(() => {
    const button = document.querySelector('#showModal');
    if (button) {
      button.click();
    }
  }, []);
  // Remove code above after the event

  return (
    <>
      {/* Remove code below after the event */}
      <button
        hidden
        id="showModal"
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch modal
      </button>
      <BootStrapModal
        className="modal modal-dialog modal-dialog-centered modal-dialog-scrollable fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Date Night With a Purpose
              </h1>
              <button
                id="closeModal"
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Join us for a vibrant and exciting evening of Latin dance and
              community spirit at the Let's Help The Next Fundraiser! This
              fun-filled event combines the energy of Latin rhythms with the
              excitement of a live auction—all while supporting international
              students in their educational journey. Whether you're an
              experienced dancer or a beginner, you'll enjoy an inclusive Latin
              dance session led by talented instructors, preceded by a thrilling
              auction featuring unique paintings from international backgrounds.
              It’s a perfect date night or an opportunity to gather with
              friends, all while making a meaningful impact. By attending,
              you're helping to fund scholarships, mentorship programs, and
              resources for international students striving to achieve their
              academic dreams. Together, we can make a world of difference and
              empower the next generation of global leaders. So, grab your
              dancing shoes, bring your bidding spirit, and let’s dance, bid,
              and celebrate for a great cause! We can't wait to see you there!
              You can purchase your{' '}
                <a
                  href='https://www.zeffy.com/en-US/ticketing/lets-help-the-next-latin-dance-and-auction-date-night-fundraiser'
                  target='_blank'
                  rel='noreferrer'
                  onClick={buyTicket}
                >
                  <b>ticket here.</b>
                </a>
              {/* <p>
                Join us for a special evening of music, purpose, laughter, and
                giving on <b>1st December 2023</b> from <b>6:00PM - 7:30PM (MST)</b> at <b>3900 N Adobe Way, Lehi, UT</b>! This is an event where you and your loved one can enjoy
                a delicious dinner, learn about a worthy cause, listen to a{' '}
                <a
                  href='https://linktr.ee/brakwaku'
                  target='_blank'
                  rel='noreferrer'
                >
                  <b>wonderful artist</b>
                </a>
                , and participate in a fundraising activity.
                <br />
                You can purchase your{' '}
                <a
                  href='https://www.zeffy.com/en-US/ticketing/a1bc7dba-57fc-408b-9ca9-9600228b2146'
                  target='_blank'
                  rel='noreferrer'
                  onClick={buyTicket}
                >
                  <b>ticket here</b>
                </a>
                . All donations will go towards funding college education for our beneficiaries. Thank you for your support!
              </p> */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={buyTicket}
              >
                Buy Ticket
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </BootStrapModal>
      {/* Remove code above after the event */}

      <NavLink style={{ textDecoration: 'none' }} to="/home">
        <CustomDiv
          className="animate__animated animate__fadeInDownBig"
          overlayColor="#F2CFA3"
          textColor="#AEE1F4"
          backgroundImage={loveImage}
        >
          <div>Love</div>
          <p>"Love embraces all, regardless of ability or stature."</p>
        </CustomDiv>
      </NavLink>
      <NavLink style={{ textDecoration: 'none' }} to="/home/get-involved">
        <CustomDiv
          className="animate__animated animate__fadeInLeftBig"
          overlayColor="#E75D56"
          textColor="#F2CFA3"
          backgroundImage={supportImage}
        >
          <div>Support</div>
          <p>
            "Empower the potential in everyone, for greatness lies in unexpected
            places."
          </p>
        </CustomDiv>
      </NavLink>
      <NavLink style={{ textDecoration: 'none' }} to="/home/our-work">
        <CustomDiv
          className="animate__animated animate__fadeInUpBig"
          overlayColor="#AEE1F4"
          textColor="#E75D56"
          backgroundImage={liftImage}
        >
          <div>Lift Up</div>
          <p>"Lift others up, for in their rise, we elevate humanity."</p>
        </CustomDiv>
      </NavLink>
    </>
  );
};

export default Welcome;
