import {useRecoilState} from "recoil";
import Archive from "../../../../state/TaskList/Archive";
import Alarm from "../../../../state/TaskList/Alarm";
import Job from "../../../../state/TaskList/Job";
import Finished from "../../../../state/TaskList/Finished";

const AddTask = ( index: number ) => {

    const [archive, setArchive]: any = useRecoilState(Archive)
    const [alarm, setAlarm]: any = useRecoilState(Alarm)
    const [job, setJob]: any = useRecoilState(Job)
    const [untitled, setUntitled]: any = useRecoilState(Finished)

    const AddTaskJob: any = () => {

        const task: Object = { title: "Title", description: "Description" }

        if( index === 0 ){
            setArchive({
                task: [...archive.task, task],
                archive: true
            })
        }else if( index === 1 ){
            setAlarm({
                task: [...alarm.task, task],
                alarm: true
            })
        }else if( index === 2 ){
            setJob({
                task: [...job.task, task],
                job: true
            })
        }else if( index === 3 ){
            setUntitled({
                task: [...untitled.task, task],
                untitled: true
            })
        }

    }

    return AddTaskJob;
};

export default AddTask;