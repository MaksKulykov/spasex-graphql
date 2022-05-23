import React from 'react';
import styled from 'styled-components';
import { colors, unit } from '../globalStyles';

const InfoPage = ({ company, ship }) => {

    return (
        <InfoPageContainer>
            <InfoPageImage background_img={ship.image} />
            <InfoPageContent>
                {company.summary}
            </InfoPageContent>
        </InfoPageContainer>
    );
};

export default InfoPage;

/** Info Page styled components */
const InfoPageContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const InfoPageImage = styled.div`
    width: 600px;
    height: 400px;
    margin: 0 0 ${unit}px ${unit}px;
    float: right;
    background: ${props => `url(${props.background_img}) no-repeat top center`};
    background-size: cover;
    box-shadow: 0 0 ${unit}px ${unit}px ${colors.background} inset;
`;

const InfoPageContent = styled.p`
`;
