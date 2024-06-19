import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from "styled-components";
import {myTheme} from "./components/Styles/Theme.styled";
import {GlobalStyles} from "./components/Styles/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={myTheme}>
        <App />
    </ThemeProvider>
);