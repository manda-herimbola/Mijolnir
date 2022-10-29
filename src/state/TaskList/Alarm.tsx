import {atom} from "recoil";

const Alarm: any = atom({
    key: 'State.Alarm',
    default: {
        task: [{title: "", description: ""}],
        alarm: false
    }
})

export default Alarm;