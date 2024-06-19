import {createGlobalStyle} from "styled-components";
import {myTheme} from "./Theme.styled";


export const GlobalStyles = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    *.
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        background-color: ${myTheme.colors.grey};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    p, h1, h2, h3, h4, h5, h6 {
        font-family: 'Inter', sans-serif;
    }
`