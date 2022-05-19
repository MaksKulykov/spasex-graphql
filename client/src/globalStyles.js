import { createGlobalStyle } from 'styled-components';

const size = {
    xs: '480px',
    sm: '768px',
    md: '992px'
};

export const device = {
    xs: `(max-width: ${size.sm})`,
    sm: `(min-width: ${size.sm}) and (max-width: ${size.md})`,
    md: `(min-width: ${size.md})`
}

export const unit = 8;
export const widths = {
    largePageWidth: 1600,
    regularPageWidth: 1100,
    textPageWidth: 800,
};

export const colors = {
    text: '#ffffff',
    background: '#0a1b22'
};

const GlobalStyles = createGlobalStyle`
    html {
        height: 100%;
        margin: 0;
        padding: 0;
    }
    body {
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: Source Sans Pro, sans-serif;
    }
    #root {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        background-color: ${colors.background};
        color: ${colors.text};
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .icon {
        margin: ${unit/2}px;
    }
`;

export default GlobalStyles;
