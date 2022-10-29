import {atom} from "recoil";

const Untitled: any = atom({
    key: 'State.Untitled',
    default: {
        task: [{title: "", description: ""}],
        untitled: false
    }
})

export default Untitled;