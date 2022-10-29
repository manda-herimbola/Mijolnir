import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import useStyles from "../../../styles/Style";
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import {useRecoilValue} from "recoil";
import Archive from "../../../state/TaskList/Archive";
import Alarm from "../../../state/TaskList/Alarm";
import Jobs from "../../../state/TaskList/Job";
import Untitled from "../../../state/TaskList/Untitled";
import AddTask from "./AddTask";
import TaskInput from "./TaskInput";

const TodoList = ({ index }: any) => {

    const classes: any = useStyles()

    const archive: ArchiveType = useRecoilValue(Archive)
    const alarm: ArchiveType = useRecoilValue(Alarm)
    const jobs: ArchiveType = useRecoilValue(Jobs)
    const untitled: ArchiveType = useRecoilValue(Untitled)

    const jobIndex: Array<ArchiveType> = [ archive, alarm, jobs, untitled ]

    return (
        <Box sx={{ m: "15px 0" }}>

            {
                jobIndex[index].task.map(({title, description}, index) => (
                    index !== 0 ?

                        <div key={index}>
                            <TaskInput input={index}
                                       title={title}
                                       description={description}/>
                        </div> : <div key={index}> </div>

                ))
            }

            <Grid className={ classes.AddCardList } onClick={ AddTask(index) }>
                <Grid container>
                    <AddCircleOutlineTwoToneIcon sx={{ mr: 2 }}/>
                    <Typography variant="body1" component="p">Add task</Typography>
                </Grid>
            </Grid>

        </Box>
    );
};

type taskType = {
    title: string,
    description: string
}

export type ArchiveType = {
    task: Array<taskType>
    archive?: boolean
    alarm?: boolean
    job?: boolean
    untitled?: boolean
}
export default TodoList;