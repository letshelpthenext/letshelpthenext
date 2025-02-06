import styled from 'styled-components';
import media from '../../utilities/media';

export const CardWrapper = styled.div`
  width: 50%;
  background-color: white;
  border-radius: 10px;
  margin: 6rem auto 3rem auto;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 3px 10px 0 rgba(0, 0, 0, 0.02);

  > :nth-child(2) {
    background-color: #87cfeb38;

    > :nth-child(1) {
      font-size: .8rem;
    }
  }

  ${media.medium`
    width: 90%;
    margin-top: 3rem;
  `}
`;
