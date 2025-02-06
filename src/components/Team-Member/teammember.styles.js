import styled from 'styled-components';
import media from '../../utilities/media';

export const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 10px;
    /* margin-bottom: 20px; */

    background-color: whitesmoke;
    padding: 10px;
    border-radius: 10px;

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

        align-self: center;

        ${media.small`
            width: 100%;
            border-radius: 0%;
        `}
    }

    > div:nth-child(2) {
        font-weight: bold;
        align-self: center;
    }

    > div:nth-child(3) {
        font-size: .79rem;
        font-weight: normal;
        padding-left: 2rem;
    }
`;

export const TextWrapper = styled.div`
    /* display: flex;
    flex-direction: row;
    padding-top: 20px; */
`;
