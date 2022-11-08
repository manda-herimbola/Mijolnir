import { Box } from '@mui/material';
import React from 'react';
import NavBarRight from "../../../navbar/NavBarRight";
import DrawerLeft from "../../../DrawerLeft/DrawerLeft";
import useStyles from "../../../../styles/Style";

const Open = () => {

    const classes: any= useStyles()

    return (
        <Box>
            <NavBarRight />
            <DrawerLeft />

            <Box component="main" className={ classes.ContainerMyTasks }>

            </Box>
        </Box>
    );
};

export default Open;