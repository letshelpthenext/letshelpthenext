import styled from 'styled-components';

export const MainWrapper = styled.div`
  min-height: 80vh;
`;

export const TeamMembersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > hr {
    width: 80vw;
    opacity: .3;
  }
`;
