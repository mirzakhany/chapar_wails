import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Typography from "@mui/material/Typography";
import React from "react";

function TopBar() {
    return (
        <AppBar
            position="absolute"
            color="default"
            elevation={0}
            sx={{
                borderBottom: (t) => `1px solid ${t.palette.divider}`,
            }}
        >
            <Toolbar>
                <CameraIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    Chapar
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;