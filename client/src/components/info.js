import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colors, unit } from '../globalStyles';

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
    width: 600px;
    height: 400px;
    margin: 0 0 ${unit}px ${unit}px;
    float: right;
    background: ${props => `url(${props.background_img}) no-repeat top center`};
    background-size: cover;
    box-shadow: 0 0 ${unit}px ${unit}px ${colors.background} inset;
`;

const InfoPageContent = styled.p`
    margin-top: 30%;
    font-style: italic;
    font-size: 32px;
`;
