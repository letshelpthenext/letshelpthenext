import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FooterWrapper = styled.footer`
  width: 100%;
  text-align: left;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 16px;
  padding: 20px;
  margin-top: -16px;
  text-align: center;
  /* color: white; */
  background-color: #aee1f4;
`;

export const MenuWrapper = styled.p`
  margin: 20px 0 12px;
  padding: 0;

  > a {
    text-decoration: none;
  }
`;

export const MySignWrapper = styled.p`
  /* color: rgb(185, 185, 185); */
  font-weight: lighter;
  font-size: 0.7rem;
  opacity: 0.5;
`;

export const LinkWrapper = styled(NavLink)`
  &:hover {
    color: #1F9BCF;
  }
`;

export const EmailWrapper = styled.a`
  &:hover {
    color: #1F9BCF;
  }
`;
