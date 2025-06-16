import { NavLink } from 'react-router-dom';
import { LogoImageWrapper, MyNavWrapper } from './header.styles';
import Logo from '../../assets/whiteLogo.png';

const Header = () => {
  return (
    <>
      <MyNavWrapper className="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/home">
            <LogoImageWrapper
              src={Logo}
              className="d-inline-block align-top"
              alt="Cloud 9 For Life Logo"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <NavLink className="nav-item nav-link" to="/home/get-involved">
                Get Involved
              </NavLink>
              <NavLink className="nav-item nav-link" to="/home/our-work">
                Our Work
              </NavLink>
              <NavLink className="nav-item nav-link" to="/home/our-mission">
                Our Mission
              </NavLink>
              {/* <NavLink className="nav-item nav-link" to="/blogs">
                Blog
              </NavLink> */}
               {/* <NavLink className="nav-item nav-link" to="/events">
                Flyer
              </NavLink> */}
              <a className="nav-item nav-link bg-danger rounded p-2" target="_blank" href="https://www.zeffy.com/en-US/donation-form/868e9c58-5d07-41f6-8daf-ca648cc9dc8a" rel="noreferrer">Donate</a>
              {/* <a className="nav-item nav-link bg-danger rounded mt-2 p-2" target="_blank" href="https://www.zeffy.com/en-US/ticketing/lets-help-the-next-latin-dance-and-auction-date-night-fundraiser" rel="noreferrer">BUY EVENT TICKET</a> */}
            </div>
          </div>
        </div>
      </MyNavWrapper>
    </>
  );
};

export default Header;
