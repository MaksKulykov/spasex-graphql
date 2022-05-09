import React from 'react';
import styled from 'styled-components';
import { colors, device, unit } from '../globalStyles';

/**
 * Mission Card component renders basic info in a card format
 * for each mission populating the tracks grid homepage.
 */
const MissionCard = ({ mission }) => {
    const { id, name} = mission;

    return (
        <CardContainer>
            {id} {name}
        </CardContainer>
    );
};

export default MissionCard;

/** Mission Card styled components */
const CardContainer = styled.div`
    border-radius: 6px;
    color: ${colors.text};
    background-size: cover;
    background-color: green;
    background-position: center;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 380px;
    margin: ${unit}px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    @media only screen and ${device.md} {
        width: 31%;
    };
    @media only screen and ${device.sm} {
        width: 47%;
    };
    @media only screen and ${device.xs} {
        width: 90%;
    };
`;
