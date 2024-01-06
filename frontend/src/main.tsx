import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// @ts-ignore
const darkTheme = createTheme({
    palette: {
        mode: 'light',
        // primary: {
        //     main: '#131313',
        // },
        // secondary: {
        //     main: '#D7dade',
        // },
        // divider: '#242424',
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
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
