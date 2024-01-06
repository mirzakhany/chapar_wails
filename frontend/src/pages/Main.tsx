import React from "react";
import {useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "../components/TopBar";
import Grid from "@mui/material/Grid";
import SideBar from "../components/SideBar";
import TabPanel from "../components/TabPanel";
import RequestsPage from "./RequestsPage";
import EnvsPage from "./EnvsPage";


function Main() {
    const [value, setValue] = React.useState(0);
    const theme = useTheme(); // Use the theme hook

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box
                component="main"
                sx={{
                   // backgroundColor: (theme) => theme.palette.grey[900],
                    flexGrow: 1,
                }}
            >
                <Grid
                    spacing={0}
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                >
                    <Grid item xs={"auto"}>
                        <TopBar/>
                    </Grid>
                    <Grid item xs>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="stretch"
                        >
                            <Grid item xs={"auto"}>
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
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Main;