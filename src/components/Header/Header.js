import { Outlet, NavLink } from 'react-router-dom';
import { MainWrapper, LogoImageWrapper } from './header.styles';
import Logo from '../../assets/logo512.png';

const Header = () => {
  return (
    <>
      <MainWrapper className="navbar navbar-expand-md navbar-light shadow sticky-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <LogoImageWrapper
              src={Logo}
              className="d-inline-block align-top"
              alt="Cloud 9 For Life Logo"
            />
          </NavLink>
          <button
            class="navbar-toggler"
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
            <div className="navbar-nav ml-auto">
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
      </MainWrapper>
      <Outlet />
    </>
  );
};

export default Header;
