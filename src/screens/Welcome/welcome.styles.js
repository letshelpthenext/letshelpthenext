import styled from 'styled-components';
import media from '../../utilities/media';

export const CustomDiv = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 33.3333333vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    font-size: 6rem;
    font-weight: 400;
    color: ${props => props.textColor};
    z-index: 2;
    transition: font-size 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      font-size: 7rem;
    }
  }

  p {
    z-index: 2;
    color: white;
    font-weight: bold;
    text-shadow: .1px .1px 2px black;
  }

  ${media.small`
    font-size: 4rem;
  `}

  /* Color overlay */
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.overlayColor};
    opacity: 0.4;
    z-index: 1;
  }
`;

// Remove code below after the event
export const BootStrapModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0
`;

// Remove code above after the event


// export const CustomDiv = styled.div`
//   background-color: ${(props) => props.divcolor};
//   min-height: 33.3333333vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   > div {
//     font-size: 7rem;
//   }

//   ${media.small`
//     font-size: 4rem;
//   `}
// `;
