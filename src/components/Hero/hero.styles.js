import styled from 'styled-components';
import media from '../../utilities/media';

export const MainWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.wallImage}) center no-repeat;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
  z-index: 0;
  background-attachment: fixed;
  background-size: cover;

  &:before {
    /* background: rgba(0, 0, 0, 0.6);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1; */
    filter: grayscale(100%);
  }
`;

export const ContentWrapper = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  > h1 {
    color: white;
    font-size: 5rem;
  }

  > h5 {
    color: skyblue;
    font-size: 3rem;
  }

  ${media.small`
    > h1 {
      text-align: center;
    }

    > h5 {
      text-align: center;
    }
  `}
`;
