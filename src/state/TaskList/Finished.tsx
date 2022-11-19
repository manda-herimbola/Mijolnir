import {atom} from "recoil";

const Finished: any = atom({
    key: 'State.Finished',
    default: {
        task: [{title: "", description: ""}],
        finished: false
    }
})

export default Finished;