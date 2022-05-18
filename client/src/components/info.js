import React from 'react';
import styled from 'styled-components';

const InfoPage = ({ company, ship }) => {
    const { ceo, coo, cto } = company;

    console.log(ship);

    return (
        <InfoPageContaner>
            {ceo}
            {coo}
            {cto}
            <img alt={ship.image} src={ship.image} />
        </InfoPageContaner>
    );
};

export default InfoPage;

/** Info Page styled components */
const InfoPageContaner = styled.div`
    width: 100%;
    height: 100%;
`;
