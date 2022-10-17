import styled from 'styled-components';
import media from '../../utilities/media';

export const MainWrapper = styled.div`
padding-top: 20px;
  min-height: 80vh;
`;

// export const InnerWrapper = styled.div`
//   min-height: 80vh;
// `;

export const TestimoniesWrapper = styled.div`
  /* display: flex; */
`;

export const ApplyVisaWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
  padding: 20px 0px 20px 0px;

  >div>img {
    width: 400px;
    border-radius: 10px;
  }

  ${media.small`
    display: flex;
    flex-direction: column-reverse;

    >div>img {
      width: 100%;
      border-radius: 5px;
    }
  `}
`;