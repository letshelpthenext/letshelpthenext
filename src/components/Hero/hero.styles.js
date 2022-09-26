import styled from 'styled-components';

export const MainWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.4)
    ),
    url(${(props) => props.wallImage}) center no-repeat;
    /* background: url(${(props) => props.wallImage}) center no-repeat; */
  background-attachment: fixed;
  background-size: cover;
  /* filter: grayscale(50%); */
`;

export const ContentWrapper = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  >h1 {
    color: white;
    font-size: 5rem;
  }

  >h5 {
    color: skyblue;
    font-size: 3rem;
  }
`;
