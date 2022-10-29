import React from 'react';
import {Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import AddTaskButton from "./AddTaskButton";
import MoreIconTaskList from "./MoreIconTaskList";

const TaskBar = ({ number, job }: any) => {

    return (
        <Grid container sx={{ alignItems:"center" }}>
            <Typography variant="body1"
                        component="h3">{ job }</Typography>

            <Box sx={{ flexGrow: 1 }} />

            <AddTaskButton index={number}/>
            <MoreIconTaskList />
        </Grid>
    );
};

export default TaskBar;