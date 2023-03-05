import styled from 'styled-components';
import media from '../../utilities/media';

export const CustomDiv = styled.div`
  background-color: ${(props) => props.divcolor};
  min-height: 33.3333333vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7rem;

  ${media.small`
    font-size: 4rem;
  `}
`;
