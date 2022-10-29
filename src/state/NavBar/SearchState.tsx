import {atom} from "recoil";

const SearchState: any = atom({
    key: 'State.SearchState',
    default: {
        icon: 'flex',
        search: 'none'
    }
})

export default SearchState;