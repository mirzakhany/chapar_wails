import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from "@mui/material/Box";

// @ts-ignore
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#131313',
        },
        secondary: {
            main: '#D7dade',
        },
    },
    components: {
        MuiButtonBase: {  // This can impact components like Button, IconButton, ListItem, etc.
            defaultProps: {
                disableRipple: true,  // No more ripple, on the whole application 💣!
            },
        },
    },
});


const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
           <App/>
        </ThemeProvider>
    </React.StrictMode>
)
