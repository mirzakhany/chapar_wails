import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import CssBaseline from '@mui/material/CssBaseline';
 // import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from "@mui/material/Box";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
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
