import React from 'react';
import Drawer from "@mui/material/Drawer";
import NavBarLeft from "../navbar/NavBarLeft";
import MenuListDrawer from "./MenuListDrawer";
import {Typography} from "@mui/material";
import ReportingList from "./ReportingList";

const drawerWidth = 240;

const DrawerLeft = () => {

    return (
        <Drawer variant="permanent"
                anchor="left"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                    display: { xs: 'none', sm: 'flex', md: 'flex' }
                }}>

            <NavBarLeft />
            <MenuListDrawer />
            <Typography variant="body1"
                        component="h3"
                        sx={{ ml: 2.5,
                            color: "rgba(0,0,0,0.5)" }}>Reporting</Typography>
            <ReportingList />
        </Drawer>
    );
};

export default DrawerLeft;