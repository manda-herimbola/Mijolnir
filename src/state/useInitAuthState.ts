import {atom} from "recoil";

const useInitAuthState = atom({
    key: 'State.useInitAuthState',
    default: false
})

export default useInitAuthState;