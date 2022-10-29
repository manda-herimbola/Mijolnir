import {atom} from "recoil";

const Job: any = atom({
    key: 'State.Job',
    default: {
        task: [{title: "", description: ""}],
        job: false
    }
})

export default Job;