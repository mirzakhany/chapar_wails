import React from 'react';
import './App.css';
import Typography from '@mui/material/Typography';
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Envs from "./pages/envs";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

function App() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <TopBar/>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) => theme.palette.grey[900],
                    flexGrow: 1,
                    overflow: 'auto',
                    paddingTop: '38px',
                }}
            >
                <Grid
                       sx={{
                            paddingTop: '20px',
                       }}
                       spacing={0}
                       container
                       direction="row"
                       justifyContent="flex-start"
                       alignItems="stretch"
                >
                    <Grid
                        item xs={"auto"}>
                        <SideBar value={value} handleChange={handleChange}/>
                    </Grid>
                    <Grid item xs>
                        <TabPanel value={value} index={0}>
                            Requests
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Envs/>
                        </TabPanel>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default App
