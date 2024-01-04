import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from '@mui/material/styles';

interface SideBarProps {
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const SideBarTabs = styled(Tabs)`
    & .MuiTabs-indicator {
        display: none;
    }
`;

const SideBarTab = styled(Tab)`
     width: 80px;
     min-width: 60px;
     max-width: 80px;
`;

function SideBar(props: SideBarProps) {
    return (
        <SideBarTabs
            value={props.value}
            onChange={props.handleChange}
            orientation="vertical"
            textColor={"inherit"}
            indicatorColor="primary"
            aria-label="Tabs"
            sx={{
                textTransform: 'none',
                minHeight: 'calc(100vh - 64px)',
                borderRight: (t) => `1px solid ${t.palette.divider}`
            }}
        >
            <SideBarTab icon={<SwapHorizIcon fontSize="medium" />} label="Requests"/>
            <SideBarTab icon={<MenuIcon fontSize="medium" />} label="Envs"/>
        </SideBarTabs>
    )
}

export default SideBar;