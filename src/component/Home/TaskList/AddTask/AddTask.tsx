import {useRecoilState, useRecoilValue} from "recoil";
import Archive from "../../../../state/TaskList/Archive";
import Alarm from "../../../../state/TaskList/Alarm";
import Job from "../../../../state/TaskList/Job";
import Finished from "../../../../state/TaskList/Finished";
import ProfileName from "../../../../state/Name/ProfileName";

const AddTask = ( index: number, service: string ) => {

    const [archive, setArchive]: any = useRecoilState(Archive)
    const [alarm, setAlarm]: any = useRecoilState(Alarm)
    const [job, setJob]: any = useRecoilState(Job)
    const [finished, setFinished]: any = useRecoilState(Finished)
    const profile: any = useRecoilValue(ProfileName)
    const services: Array<any> = [ archive, alarm, job, finished ]

    const AddTaskJob: any = () => {

        const task: Object = {
            nb: services[index].task.length,
            work: service,
            ...profile,
            title: "Title",
            description: "Description"
        }

        if( index === 0 ){
            setArchive({ task: [...archive.task, task], archive: true })
        }else if( index === 1 ){
            setAlarm({ task: [...alarm.task, task], alarm: true })
        }else if( index === 2 ){
            setJob({ task: [...job.task, task], job: true })
        }else if( index === 3 ){
            setFinished({ task: [...finished.task, task], finished: true })
        }

    }

    return AddTaskJob;
};

export default AddTask;