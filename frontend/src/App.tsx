import React from 'react';
import './App.css';
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import EnvsPage from "./pages/EnvsPage";
import RequestsPage from "./pages/RequestsPage";
import {useTheme} from "@mui/material";
import TabPanel from "./components/TabPanel";

function App() {
    const [value, setValue] = React.useState(0);
    const theme = useTheme(); // Use the theme hook

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
                    paddingTop: '56px',
                }}
            >
                <Grid
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
                    <Grid item xs style={{paddingLeft: '10px'}}>
                        <TabPanel prefix={"sidebar"} value={value} index={0}>
                            <RequestsPage/>
                        </TabPanel>
                        <TabPanel prefix={"sidebar"} value={value} index={1}>
                            <EnvsPage/>
                        </TabPanel>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )

}

export default App
