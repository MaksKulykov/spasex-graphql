import React from 'react';
import styled from 'styled-components';

const InfoPage = ({ company, ships }) => {
    const { ceo, coo, cto } = company;

    console.log(ships);

    return (
        <InfoPageContaner>
            {ceo}
            {coo}
            {cto}
            {ships[0].image}
        </InfoPageContaner>
    );
};

export default InfoPage;

/** Info Page styled components */
const InfoPageContaner = styled.div`
    width: 100%;
    height: 100%;
`;
