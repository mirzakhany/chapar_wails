import Grid from "@mui/material/Grid";
import {Button, ListItemButton, ListItemText} from "@mui/material";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { SplitView } from "../components/SplitView";

function RequestActions() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
        >
            <Grid item>
                <Button size="small" variant="outlined" color="secondary">Add</Button>
            </Grid>
            <Grid item>
                <Button size="small" variant="outlined" color="secondary">Import</Button>
            </Grid>
        </Grid>
    )
}

function SearchBox() {
    return (
        <Box
            component="form"
            sx={{ display: 'flex', alignItems: 'center',
                border: (t) => `1px solid ${t.palette.divider}`}}
                borderRadius={"4px"}
                marginTop={"4px"}
                marginLeft={"4px"}
            >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search ..."
                inputProps={{ 'aria-label': 'search ...' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Box>
    )
}

function RequestList() {
    return (
        <List>
            <ListItemButton>
                <div className={'requestListType'}>
                    GET
                </div>
                <ListItemText primary="Sent mail" />
            </ListItemButton>
        </List>
    )

}

function RequestsSideBar() {
    return (
        <Stack
            spacing={1}
            direction="row"
            alignItems="stretch"
            justifyContent="start"
            style={{ minHeight: 'calc(100vh - 64px)' }}
        >
            <Box
                sx={{
                    paddingTop:'10px',
                    paddingRight:'10px',
                    borderRight: (t) => `1px solid ${t.palette.divider}`
                }}>
                <Paper>
                    <RequestActions/>
                    <SearchBox/>
                    <RequestList/>
                </Paper>
            </Box>
        </Stack>
    )
}

function RequestContainer() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    orientation="horizontal"
                    textColor={"inherit"}
                    variant="scrollable"
                    indicatorColor="secondary"
                    scrollButtons="auto"
                    aria-label="Tabs"
                >
                    <Tab label={
                        <span>
                            {"Test"}
                            <IconButton size="small"  component="div" onClick={() => { alert("Closing this tab..."); }}>
                                <CloseIcon />
                            </IconButton>
                        </span>
                    }/>
                    <Tab label="Create User" />
                    <Tab icon={<AddIcon />}/>
                </Tabs>
            </Box>
        </Box>
    )
}

function RequestsPage() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={1}
            component={Paper}
        >
            <Grid item xs={"auto"} style={{marginLeft:'1px'}}>
                <RequestsSideBar/>
            </Grid>
            <Grid item xs>
                <RequestContainer/>
            </Grid>
        </Grid>
        // <SplitView
        //     left={<RequestsSideBar/>}
        //     right={<RequestContainer/>}
        // />
    )
}

export default RequestsPage;