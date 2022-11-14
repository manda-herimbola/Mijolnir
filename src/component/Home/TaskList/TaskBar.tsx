import React from 'react';
import {Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import AddTaskButton from "./AddTask/AddTaskButton";
import MoreIconTaskList from "./MoreIcone/MoreIconTaskList";

const TaskBar = ({ number, service }: any) => {

    return (
        <Grid container sx={{ alignItems:"center" }}>
            <Typography variant="body1"
                        component="h3">{ service }</Typography>

            <Box sx={{ flexGrow: 1 }} />

            <AddTaskButton index={number} service={service}/>
            <MoreIconTaskList number={number} service={service}/>
        </Grid>
    );
};

export default TaskBar;