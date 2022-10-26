import styled from 'styled-components';
import media from '../../utilities/media';

export const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin-bottom: 20px;

    ${media.small`
    display: flex;
    flex-direction: column;
    `}
`;

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;

    >img {
        border-radius: 50%;
        width: 52%;

        ${media.small`
            width: 100%;
            border-radius: 0%;
        `}
    }
`;

export const TextWrapper = styled.div`
    /* display: flex;
    flex-direction: row;
    padding-top: 20px; */
`;
