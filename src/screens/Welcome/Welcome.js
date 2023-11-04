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
    window.open('https://www.zeffy.com/en-US/ticketing/a1bc7dba-57fc-408b-9ca9-9600228b2146', '_blank');
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
        id='showModal'
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        Launch modal
      </button>

      <BootStrapModal
        className='modal modal-dialog modal-dialog-centered modal-dialog-scrollable fade'
        id='exampleModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                Date Night With a Purpose
              </h1>
              <button
                id='closeModal'
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <p>
                Join us for a special evening of music, purpose, laughter, and
                giving! This is an event where you and your loved one can enjoy
                a delicious dinner, learn about a worthy cause, listened to a{' '}
                <a
                  href='https://linktr.ee/brakwaku'
                  target='_blank'
                  rel='noreferrer'
                >
                  wonderful artist
                </a>
                , and participate in a fun fundraising activity.
                <br />
                You can purchase your{' '}
                <a
                  href='https://www.zeffy.com/en-US/ticketing/a1bc7dba-57fc-408b-9ca9-9600228b2146'
                  target='_blank'
                  rel='noreferrer'
                  onClick={buyTicket}
                >
                  ticket here
                </a>
                . All proceeds will go towards the cause of our foundation to
                make the work a better place.
              </p>
            </div>
            <div className='modal-footer'>
              <button type='button' class='btn btn-danger' onClick={buyTicket}>
                Buy Ticket
              </button>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </BootStrapModal>

      {/* Remove code above after the event */}

      <NavLink style={{ textDecoration: 'none' }} to='/home'>
        <CustomDiv
          className='animate__animated animate__fadeInDownBig'
          overlayColor='#F2CFA3'
          textColor='#AEE1F4'
          backgroundImage={loveImage}
        >
          <div>Love</div>
          <p>"Love embraces all, regardless of ability or stature."</p>
        </CustomDiv>
      </NavLink>
      <NavLink style={{ textDecoration: 'none' }} to='/home/get-involved'>
        <CustomDiv
          className='animate__animated animate__fadeInLeftBig'
          overlayColor='#E75D56'
          textColor='#F2CFA3'
          backgroundImage={supportImage}
        >
          <div>Support</div>
          <p>
            "Empower the potential in everyone, for greatness lies in unexpected
            places."
          </p>
        </CustomDiv>
      </NavLink>
      <NavLink style={{ textDecoration: 'none' }} to='/home/our-work'>
        <CustomDiv
          className='animate__animated animate__fadeInUpBig'
          overlayColor='#AEE1F4'
          textColor='#E75D56'
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
