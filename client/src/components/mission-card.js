import React from 'react';
import styled from 'styled-components';
import { colors, device, unit } from '../globalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

/**
 * Mission Card component renders basic info in a card format
 * for each mission populating the missions grid homepage.
 */
const MissionCard = ({ mission }) => {
    const { id, name, description} = mission;

    return (
        <CardContainer>
            <CardContent>
                <CardHeader>
                    <h3>{name}</h3>
                </CardHeader>
                <CardBody>
                    {`${description.substring(0, 525)}${description.length > 525 ? '...' : ''}`}
                </CardBody>
                <CardFooter>
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                    <FontAwesomeIcon icon={faWikipediaW} className="icon" />
                    <FontAwesomeIcon icon={faUpRightFromSquare} className="icon" />
                </CardFooter>
            </CardContent>
        </CardContainer>
    );
};

export default MissionCard;

/** Mission Card styled components */
const CardContainer = styled.div`
    border-radius: 6px;
    color: ${colors.text};
    background-size: cover;
    background-color: #e0ffff;
    background-position: center;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 380px;
    margin: ${unit}px;
    padding: ${unit}px;
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

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${unit}px;
    height: 100%;
`;

const CardHeader = styled.div`
    text-align: center;
`;

const CardBody = styled.div`
    max-height: 280px;
    overflow: hidden;
`;

const CardFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;
