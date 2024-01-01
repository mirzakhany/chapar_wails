import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import MenuIcon from "@mui/icons-material/Menu";

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
                minHeight: 'calc(100vh - 64px)',
            }}

        >
            <Tab icon={<SwapHorizIcon fontSize="medium" />} label="Requests" className={'sidebarTab'}/>
            <Tab icon={<MenuIcon fontSize="medium" />} label="Envs" className={'sidebarTab'}/>
        </Tabs>
    )
}

export default SideBar;