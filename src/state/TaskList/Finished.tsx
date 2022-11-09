import {atom} from "recoil";

const Finished: any = atom({
    key: 'State.Finished',
    default: {
        task: [{title: "", description: ""}],
        untitled: false
    }
})

export default Finished;