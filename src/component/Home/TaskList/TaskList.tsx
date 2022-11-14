import React from 'react';
import {Box} from "@mui/material";
import {useRecoilValue} from "recoil";
import Archive from "../../../state/TaskList/Archive";
import Alarm from "../../../state/TaskList/Alarm";
import Job from "../../../state/TaskList/Job";
import Finished from "../../../state/TaskList/Finished";
import TaskInput from "./TaskInput/TaskInput";
import AddTaskButtonSizing from "./AddTask/AddTaskButtonSizing";

const TaskList = ({ index, service }: any) => {

    const archive: ArchiveType = useRecoilValue(Archive)
    const alarm: ArchiveType = useRecoilValue(Alarm)
    const job: ArchiveType = useRecoilValue(Job)
    const finished: ArchiveType = useRecoilValue(Finished)

    const serviceIndex: Array<ArchiveType> = [ archive, alarm, job, finished ]

    return (
        <Box sx={{ m: "15px 0" }}>

            {
                serviceIndex[index].task.map(({title, description}, number: number) => (
                    number !== 0 ? <div key={number}>
                        <TaskInput index={number}
                                   service={service}
                                   title={title}
                                   description={description}/></div> : <div key={number}> </div>
                ))
            }

            <AddTaskButtonSizing index={ index } service={ service }/>

        </Box>
    );
};

export type taskType = {
    id: any,
    nb: number,
    work: string,
    username: string,
    email: string
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
export default TaskList;