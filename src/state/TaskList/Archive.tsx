import {atom} from "recoil";

const Archive: any = atom({
    key: 'State.Archives',
    default: {
        task: [{title: "", description: ""}],
        job: false
    }
})

export default Archive;