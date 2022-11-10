import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import useStyles from "../../../../styles/Style";
import AddTask from "./AddTask";

const AddTaskSizing = ({ index }: any) => {

    const classes: any = useStyles()

    return (
        <Box className={ classes.AddCardList } onClick={ AddTask(index) }>
            <Grid container>
                <AddCircleOutlineTwoToneIcon sx={{ mr: 2 }}/>
                <Typography variant="body1" component="p">Add task</Typography>
            </Grid>
        </Box>
    );
};

export default AddTaskSizing;