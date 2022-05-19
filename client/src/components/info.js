import React from 'react';
import styled from 'styled-components';
import { colors, unit } from '../globalStyles';

const InfoPage = ({ company, ship }) => {
    const { employees, founder, name, summary } = company;

    return (
        <InfoPageContainer>
            <InfoPageImageContainer>
                <InfoPageImage alt={ship.image} src={ship.image} />
            </InfoPageImageContainer>
            <InfoPageText>
                <InfoPageTitle>
                    {name}
                </InfoPageTitle>
                {`${employees}
                ${founder}
                ${summary}`}
            </InfoPageText>
        </InfoPageContainer>
    );
};

export default InfoPage;

/** Info Page styled components */
const InfoPageContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const InfoPageImageContainer = styled.div`
    width: 600px;
    height: 400px;
    margin: 0 0 ${unit}px ${unit}px;
    float: right;
    box-shadow: 0 0 ${unit*2}px ${unit*2}px ${colors.background} inset;
`;

const InfoPageImage = styled.img`
    height: 100%;
    width: 100%;
    padding: 16px;
    object-fit: cover;
`;

const InfoPageText = styled.div`
`;

const InfoPageTitle = styled.h2`
    text-align: center;
    margin: ${unit}px 0 ${unit}px 0;
`;
