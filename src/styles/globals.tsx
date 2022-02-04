import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap');

    *{
        margin: 0;
        padding: 0;
        font-family: 'Zen Kurenaido', sans-serif;
        border: 0;
        box-sizing: border-box;
        transition: all 0.25s linear;
    }
    body{
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
    }
`;
