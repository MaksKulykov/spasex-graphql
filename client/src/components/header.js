import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../globalStyles';
import logo_white from '../assets/logo_white.svg';

/**
 * Header renders the top navigation
 */
const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo src={logo_white} />
            </LogoContainer>
        </HeaderContainer>
    );
};

export default Header;

/** Header styled components */
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    border-bottom: solid 1px ${colors.text};
    box-shadow: 0 1px 5px 0 ${colors.text};
    padding: 5px 30px;
    min-height: 80px;
    background-color: ${colors.background};
    @media only screen and ${device.md} {
        min-height: 80px;
    };
    @media only screen and ${device.sm} {
        min-height: 60px;
    };
    @media only screen and ${device.xs} {
        min-height: 40px;
    };
`;

const LogoContainer = styled.div`
    display: flex;
    align-self: center;
`;

const Logo = styled.img`
    @media only screen and ${device.md} {
        width: 300px;
    };
    @media only screen and ${device.sm} {
        width: 250px;
    };
    @media only screen and ${device.xs} {
        width: 200px;
    };
`;
