import React from 'react';
import {Box} from "@mui/material";
import DrawerLeft from "../DrawerLeft/DrawerLeft";
import NavBarRight from "../navbar/NavBarRight";
import useStyles from "../../styles/Style";
import MyTaskBar from "./MyTaskBar";
import MyJobList from "./MyJobList";

const MyTask = () => {

    const classes: any= useStyles()

    return (
        <Box sx={{ display: 'flex' }}>
            <NavBarRight />
            <DrawerLeft />

            <Box component="main" className={ classes.ContainerMyTasks }>
                <MyTaskBar />

                <MyJobList />
            </Box>
        </Box>
    );
};

export default MyTask;