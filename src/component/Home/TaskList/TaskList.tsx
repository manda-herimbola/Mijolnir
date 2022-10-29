import React from 'react';
import {Grid} from "@mui/material";
import TodoList from "./TodoList";
import TaskBar from "./TaskBar";

const TaskList = () => {

    const taskProject: Array<string> = ['Archive', 'Alarm', 'Job', 'Untitled section']!

    return (
        <Grid container
              columns={{ xs: 1, md: 2, lg: 4 }}
              spacing={3}>

            {
                taskProject.map((job,number ) =>

                <Grid key={ number } item xs={1} md={1} lg={1}>
                    <TaskBar number={number} job={job}/>
                    <TodoList index={ number }/>
                </Grid>)
            }

        </Grid>
    );
};

export default TaskList;