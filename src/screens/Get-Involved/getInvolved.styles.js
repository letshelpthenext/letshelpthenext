import styled from 'styled-components';
import media from '../../utilities/media';

export const MainWrapper = styled.div`
  min-height: 80vh;
`;

export const TeamMembersWrapper = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  /* > hr {
    width: 80vw;
    opacity: .3;
  } */

  ${media.small`
    display: flex;
    flex-direction: column;
    `}
`;
