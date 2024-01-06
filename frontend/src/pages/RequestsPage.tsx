import Grid from "@mui/material/Grid";
import {Button} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import TabPanel from "../components/TabPanel";
import RestRequest from "../components/RestRequest";
import {styled} from "@mui/material/styles";
import RequestItem from "../components/RequestItem";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';


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
                <Button size="small" variant="outlined">Add</Button>
            </Grid>
            <Grid item>
                <Button size="small" variant="outlined">Import</Button>
            </Grid>
        </Grid>
    )
}

function SearchBox() {
    return (
        // <Box
        //     component="form"
        //     sx={{
        //         display: 'flex', alignItems: 'center',
        //         border: (t) => `1px solid ${t.palette.divider}`,
        //     }}
        //         borderRadius={"4px"}
        //         marginTop={"8px"}
        //         marginLeft={"4px"}
        //     >
        //     <InputBase
        //         sx={{ ml: 1, flex: 1 }}
        //         placeholder="Search ..."
        //         inputProps={{ 'aria-label': 'search ...' }}
        //     />
        //     <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        //         <SearchIcon />
        //     </IconButton>
        // </Box>
        <TextField
            size="small"
            id="input-with-icon-textfield"
            sx={{
                width: '100%',
                marginTop: '8px',
                marginLeft: '4px',
            }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            placeholder={"Search ..."}
            variant="outlined"
        />
    )
}

function RequestList() {
    return (
        <List>
            <RequestItem type={"GET"} name={"Get User"}/>
            <RequestItem type={"POST"} name={"Create User"}/>
            <RequestItem type={"DELETE"} name={"Delete User"}/>
            <RequestItem type={"PUT"} name={"Update user"}/>
            <RequestItem type={"OPTION"} name={"Server options"}/>
            <RequestItem type={"HEAD"} name={"This is the head"}/>
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
            style={{ minHeight: 'calc(100vh - 60px)' }}
        >
            <Box
                sx={{
                    paddingTop:'10px',
                    paddingRight:'10px',
                    borderRight: (t) => `1px solid ${t.palette.divider}`
                }}>
                    <RequestActions/>
                    <SearchBox/>
                    <RequestList/>
            </Box>
        </Stack>
    )
}

const RequestTab = styled(Tab)`
    & .MuiButtonBase-roo .MuiTab-root{
       max-height: 50px !important;
       padding: 0px 10px !important;
    }
`;

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
                    scrollButtons="auto"
                    aria-label="Tabs"
                >
                    <RequestTab label={
                        <span>
                            {"Test"}
                            <IconButton size="small"  component="div" onClick={() => { alert("Closing this tab..."); }}>
                                <CloseIcon />
                            </IconButton>
                        </span>
                    }/>
                    <RequestTab label="Create User" />
                </Tabs>
            </Box>
            <TabPanel prefix={"request-item"} value={value} index={0}>
                <RestRequest/>
            </TabPanel>
            <TabPanel prefix={"request-item"} value={value} index={1}>
                Item Two
            </TabPanel>
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
        >
            <Grid item xs={"auto"}>
                <RequestsSideBar/>
            </Grid>
            <Grid item xs>
                <RequestContainer/>
            </Grid>
        </Grid>
    )
}

export default RequestsPage;