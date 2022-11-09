import { Box } from '@mui/material';
import React from 'react';
import NavBarRight from "../../../navbar/NavBarRight";
import DrawerLeft from "../../../DrawerLeft/DrawerLeft";
import useStyles from "../../../../styles/Style";
import OpenToolsBar from "./OpenToolsBar";
import ToolsList from "./ToolsList";

const Open = () => {

    const classes: any= useStyles()

    return (
        <Box sx={{ display: 'flex' }}>
            <NavBarRight />
            <DrawerLeft />

            <Box component="main" className={ classes.ContainerMyTasks }>
                <OpenToolsBar />
                <ToolsList />
            </Box>
        </Box>
    );
};

export default Open;