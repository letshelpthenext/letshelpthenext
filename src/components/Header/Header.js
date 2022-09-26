import { NavLink } from 'react-router-dom';
import { LogoImageWrapper } from './header.styles';
import Logo from '../../assets/logo512.png';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-opacity-10 sticky-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
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
              <NavLink className="nav-item nav-link" to="/get-involved">
                Get Involved
              </NavLink>
              <NavLink className="nav-item nav-link" to="/our-work">
                Our Work
              </NavLink>
              <NavLink className="nav-item nav-link" to="/our-mission">
                Our Mission
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
