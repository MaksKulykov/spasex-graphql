import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colors, device, unit } from '../globalStyles';

const InfoPage = ({ company, ship }) => {

    const [text, setText] = React.useState('');

    const
        string = company.summary,
        index = React.useRef(0);

    useEffect(() => {
        console.log(string);
        console.log(text);
        function tick() {
            setText(text + string[index.current]);
            index.current++;
        }
        if (index.current < string.length) {
            let addChar = setInterval(tick, 80);
            return () => clearInterval(addChar);
        }
    }, [string, text]);

    return (
        <InfoPageContainer>
            <InfoPageImage background_img={ship.image} />
            <InfoPageContent>
                {text}
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
    margin: 0 0 ${unit}px ${unit}px;
    background: ${props => `url(${props.background_img}) no-repeat center center`};
    background-size: cover;
    box-shadow: 0 0 ${unit}px ${unit}px ${colors.background} inset;
    @media only screen and ${device.md} {
        width: 600px;
        height: 400px;
        float: right;
    };
    @media only screen and ${device.sm} {
        width: 100%;
        height: 400px;
        float: none;
        margin: 0;
    };
    @media only screen and ${device.xs} {
        width: 100%;
        height: 300px;
        float: none;
        margin: 0;
    };
`;

const InfoPageContent = styled.p`
    font-style: italic;
    @media only screen and ${device.md} {
        font-size: 2rem;
        margin-top: 30%;
    };
    @media only screen and ${device.sm} {
        font-size: 1.5rem;
        margin-top: 4rem;
    };
    @media only screen and ${device.xs} {
        font-size: 1rem;
        margin-top: 4rem;
    };
`;
