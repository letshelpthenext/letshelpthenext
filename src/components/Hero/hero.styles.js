import styled from 'styled-components';

export const MainWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.73),
      rgba(0, 0, 0, 0.7)
    ),
    url(${(props)=>props.wallImage}) center no-repeat;
  background-attachment: fixed;
  background-size: cover;
  /* filter: grayscale(100%); */
`;
