import React from 'react';
import {Box} from "@mui/material";
import DrawerLeft from "../DrawerLeft/DrawerLeft";
import NavBarRight from "../navbar/NavBarRight";

const MyTask = () => {

    return (
        <Box>
            <NavBarRight />
            <DrawerLeft />
        </Box>
    );
};

export default MyTask;