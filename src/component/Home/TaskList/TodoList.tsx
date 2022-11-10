import React from 'react';
import {Box} from "@mui/material";
import {useRecoilValue} from "recoil";
import Archive from "../../../state/TaskList/Archive";
import Alarm from "../../../state/TaskList/Alarm";
import Jobs from "../../../state/TaskList/Job";
import Finished from "../../../state/TaskList/Finished";
import TaskInput from "./TaskInput";
import AddTaskSizing from "./AddTask/AddTaskSizing";

const TodoList = ({ index }: any) => {

    const archive: ArchiveType = useRecoilValue(Archive)
    const alarm: ArchiveType = useRecoilValue(Alarm)
    const jobs: ArchiveType = useRecoilValue(Jobs)
    const untitled: ArchiveType = useRecoilValue(Finished)

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

            <AddTaskSizing index={ index }/>
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