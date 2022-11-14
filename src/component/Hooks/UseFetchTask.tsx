import {useSetRecoilState} from "recoil";
import Archive from "../../state/TaskList/Archive";
import Alarm from "../../state/TaskList/Alarm";
import Job from "../../state/TaskList/Job";
import Finished from "../../state/TaskList/Finished";

const useFetchTask = ( url: url, profileId: string ) => {

    const setArchive: any = useSetRecoilState(Archive)
    const setAlarm: any = useSetRecoilState(Alarm)
    const setJob: any = useSetRecoilState(Job)
    const setFinished: any = useSetRecoilState(Finished)

    const dataTask: any = async () => {
        const dataBase: any = await fetch(url)
        const dt: any = await dataBase.json()
        const id: any = dt.filter((item: any) => item.id === profileId)

        const archiveFilter: any = id.filter((item: any) => item.work === 'Archive')
        const alarmFilter: any = id.filter((item: any) => item.work === 'Alarm')
        const jobFilter: any = id.filter((item: any) => item.work === 'Job')
        const finishedFilter: any = id.filter((item: any) => item.work === 'Finished')

        setArchive({
            task: [{ title: "", description: "" }, ...archiveFilter],
            archive: true
        })

        setAlarm({
            task: [{ title: "", description: "" }, ...alarmFilter],
            alarm: true
        })

        setJob({
            task: [{ title: "", description: "" }, ...jobFilter],
            job: true
        })

        setFinished({
            task: [{ title: "", description: "" }, ...finishedFilter],
            finished: true
        })
    }

    return dataTask;
};

type url = string

export default useFetchTask;