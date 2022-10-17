import styled from 'styled-components';
import media from '../../utilities/media';

export const MainWrapper = styled.div`
  min-height: 30vh;
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;

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
  display: flex;
  width: 100%;
  gap: 3rem;
  border: 1px solid #1F9BCF;
  /* border-left: 0; */
  border-radius: 0px 10px 10px 0px;
  padding: 10px;

  ${media.small`
    border-top: 0px;
    border-radius: 0px 0px 10px 10px;
  `}
`;

export const CardWrapper = styled.div`
width: 50%;
background-color: white;
border-radius: 10px;
margin: 6rem auto 3rem auto;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 3px 10px 0 rgba(0, 0, 0, 0.02);

${media.medium`
  width: 90%;
  margin-top: 3rem;
`}
`;
