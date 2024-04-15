import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainWrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainBlogWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const BlogWrapper = styled(NavLink)`
  width: 42vw;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  border: solid 1px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const BlogImageWrapper = styled.div`
  width: 18vw;
  height: 18vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BlogDescWrapper = styled.div`
  padding: 0.4rem;
  width: 24vw;

  div {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    margin-bottom: 10px;
  }
`;
