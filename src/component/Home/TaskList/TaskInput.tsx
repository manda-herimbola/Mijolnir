import React from 'react';
import {Grid, Typography} from "@mui/material";
import useStyles from "../../../styles/Style";
import TaskOption from "./TaskOption";

const TaskInput = ({ index, title, description }: any) => {

    const classes: any = useStyles()

    return (
        <Grid component="form" className={ classes.CardList }>

            <TaskOption />

            <Typography variant="h6"
                        component="input"
                        type="text"
                        defaultValue={title} />

            <Typography variant="body2"
                        component="input"
                        type="text"
                        defaultValue={description} />

        </Grid>
    );
};

export default TaskInput;