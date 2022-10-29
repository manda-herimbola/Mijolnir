import React from 'react';
import {Grid, Typography} from "@mui/material";
import useStyles from "../../../styles/Style";

const TaskInput = ({ index, title, description }: any) => {

    const classes: any = useStyles()

    return (
        <Grid component="form" className={ classes.CardList }>

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