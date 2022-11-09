import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import useStyles from "../../../../styles/Style";
import {useRecoilValue} from "recoil";
import OpenTheTools from "../../../../state/TaskList/OpenTheTools";

const OpenToolsBar = () => {

    const classes: any = useStyles()
    const Tools: string = useRecoilValue(OpenTheTools)

    return (
        <Box className={ classes.ToolBarRight }>
            <Typography variant="body1" component="h3">{ Tools }</Typography>

            <Box sx={{ '& .MuiButton-root': { margin: 0.5 } }}>
                <Button variant="text">Delete All</Button>
                <Button variant="text">Colab</Button>
                <Button variant="text">Friend</Button>
            </Box>
        </Box>
    );
};

export default OpenToolsBar;