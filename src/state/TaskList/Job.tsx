import {atom} from "recoil";

const Works: any = atom({
    key: 'State.Works',
    default: {
        task: [{title: "", description: ""}],
        job: false
    }
})

export default Works;