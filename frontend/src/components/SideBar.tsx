import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";

interface SideBarProps {
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

function SideBar(props: SideBarProps) {
    return (
        <Tabs
            value={props.value}
            onChange={props.handleChange}
            orientation="vertical"
            textColor={"inherit"}
            style={{
                textTransform: 'none',
            }}
            aria-label="Tabs"
            sx={{
                textTransform: 'none',
                borderRight: 1,
                borderColor: 'divider' ,
                minHeight: '100vh'
            }}

        >
            <Tab icon={<HomeIcon />} label="Requests" />
            <Tab icon={<ListIcon />} label="Envs" />
        </Tabs>
    )
}

export default SideBar;