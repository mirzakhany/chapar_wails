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
import Split from '@uiw/react-split';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
        // <TreeView
        //     aria-label="Request List"
        //     defaultCollapseIcon={<ExpandMoreIcon />}
        //     defaultExpandIcon={<ChevronRightIcon />}
        // >
        //     <TreeItem nodeId="1" label={<RequestItem type={"GET"} name={"Get User"}/>}></TreeItem>
        //     <TreeItem nodeId="5" label="Users">
        //         <TreeItem nodeId="10" label={<RequestItem type={"DELETE"} name={"Delete User"}/>} />
        //     </TreeItem>
        // </TreeView>
    )
}

function RequestsSideBar() {
    return (
        <Stack
            spacing={1}
            direction="row"
            alignItems="stretch"
            justifyContent="start"
            style={{ minHeight: 'calc(100vh - 60px)' , minWidth: '220px'}}
        >
            <Box
                flex={1}
                sx={{
                    paddingTop:'10px',
                    paddingRight:'10px',
                   // borderRight: (t) => `1px solid ${t.palette.divider}`
                }}>
                    <RequestActions/>
                    <SearchBox/>
                    <RequestList/>
            </Box>
        </Stack>
    )
}

const RequestTab = styled(Tab)`
   height: 40px;
   padding: 0;
   
   .close-tab-button {
        height: 10px;
    }
` ;

function RequestContainer() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' , paddingLeft: '5px'}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
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
                            <IconButton
                                className={"close-tab-button"}
                                size="small" component="span" onClick={() => { alert("Closing this tab..."); }}>
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
        <Split
            lineBar={true}
            mode="horizontal">
            <RequestsSideBar/>
            <RequestContainer/>
        </Split>
    )
}

export default RequestsPage;