import styled from 'styled-components';
// Helpers
import { colors } from './Helpers/colors';
import { mediaQuery } from './Helpers/mediaQuery';
// Themes
import { buttonTextColor } from './Themes/theme';

const getStyle = type => {
    switch (type) {
        case 'primary': return `
            background: ${colors.primary}
        `
        case 'secondary': return `
            background: ${colors.secondary}
        `
        case 'tertiary': return `
            background: ${colors.tertiary}
        `
        case 'close': return`
            background: ${colors.gray};
            position: relative;
            width: auto !important;
        `
        default: return ``
    }    
}

const getSize = size => {
    switch (size) {
        case 'mini': return `
            padding: 0.2rem 1rem;
            font-size: 0.8em;
        `
        case 'sm': return `
            height: 27px;
            padding: 0 0.8rem;
        `
        case 'md': return `
            padding: 0.6rem 1.6rem;
        `
        case 'bg': return `
            padding: 0.9rem 2.4rem;
        `
        default: return ``
    }
}

const Button = styled.button`
    position: absolute;
    display: flex;
    align-items: center;   
    justify-content: center; 
    right: 0.3em;
    border: none;
    cursor: pointer;
    color: ${buttonTextColor};
    font-size: 1.1111111111em;
    font-weight: 400;
    letter-spacing: -0.1em;
    text-shadow: none !important;
    text-align: center;
    ${({ type }) => getStyle(type) };
    ${({ size }) => getSize(size) };
    :focus {
        outline: none;    
    }
    @media ${mediaQuery.tablet} {
        font-size: 1.1111111111em; /* 20px Ã· 18px = 1.1111111111em */
        letter-spacing: -0.1em; /* -2px Ã· 20px = -0.1em */
        height: 22px;
        margin-top: 20px;
        width: 52%;        
        padding: 2px 3.333333333333333%; /* 4px Ã· 120px */
    }
`;

export default Button;