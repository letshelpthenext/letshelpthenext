import styled from 'styled-components';

export const MainWrapper = styled.div`
  min-height: 80vh;
  padding-top: 1.5rem;
`;

export const HeaderImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */

  > img {
    width: 38.9%;
    height: 100%;
    object-fit: contain;
  }

  > div {
    margin-left: 2rem;


    > p > ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    &:nth-child(3) {
      flex-grow: 1;
    }
  }
`;
