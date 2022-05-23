import React from 'react';
import styled from 'styled-components';
import { colors } from '../globalStyles';

/**
 * Header renders the top navigation
 */
const Header = () => {
    return (
        <HeaderContainer>
            <p>This is header</p>
        </HeaderContainer>
    );
};

export default Header;

/** Header styled components */
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px ${colors.text};
    box-shadow: 0 1px 5px 0 ${colors.text};
    padding: 5px 30px;
    min-height: 80px;
    background-color: ${colors.background};
`;
