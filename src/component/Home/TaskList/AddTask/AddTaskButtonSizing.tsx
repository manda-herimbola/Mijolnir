import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import useStyles from "../../../../styles/Style";
import AddTask from "./AddTask";

const AddTaskButtonSizing = ({ index, service }: any) => {

    const classes: any = useStyles()

    return (
        <Box className={ classes.AddCardList } onClick={ AddTask(index, service) }>
            <Grid container>
                <AddCircleOutlineTwoToneIcon sx={{ mr: 1 }}/>
                <Typography variant="body1" component="p">Add task</Typography>
            </Grid>
        </Box>
    );
};

export default AddTaskButtonSizing;
