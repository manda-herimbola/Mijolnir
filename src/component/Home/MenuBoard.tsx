import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import NavBarRight from "../navbar/NavBarRight";
import TaskList from "./TaskList/TaskList";
import DrawerLeft from "../DrawerLeft/DrawerLeft";
import useStyles from "../../styles/Style";

const MenuBoard = () => {

    const classes: any = useStyles()

    return (
        <Box sx={{ display: 'flex' }}>

            <NavBarRight />
            <DrawerLeft />

            <Box component="main" className={ classes.ContainerBoard }>
                <Toolbar />
                <TaskList />
            </Box>
        </Box>
    );
}


export default MenuBoard;