import styled from 'styled-components';
import media from '../../utilities/media';

export const MainWrapper = styled.div`
  min-height: 30vh;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 3rem;

  >h4 {
    text-align: center;
  }

  ${media.small`
    flex-direction: column;
  `}
`;

export const CaptionBox = styled.div`
  /* background-color: #AEE1F4; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentBox = styled.div`
  border: 1px solid #F0AD4E;
  /* border-left: 0; */
  border-radius: 10px 0px 0px 10px;
  padding: 10px;

  ${media.small`
    border-top: 0px;
    border-radius: 0px 0px 10px 10px;
  `}
`;