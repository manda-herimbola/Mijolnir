import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import {useRecoilState} from "recoil";
import SearchState from "../../state/NavBar/SearchState";
import SmartSearchInput from "./SmartSearchInput";

const SmartPhoneSearch = () => {

    const [{ icon, search }, setSearch]: any = useRecoilState(SearchState)

    const OpenSearch = () => {
        setSearch({
            icon: 'none',
            search: 'flex'
        })
    }

    return (icon === 'flex' && search === 'none' ? (
        <IconButton size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                    onClick={ OpenSearch }
                    sx={{ display: { xs: 'flex', md: 'none' } }}>

            <SearchIcon />
        </IconButton>
    ):( <SmartSearchInput /> ));
};

export default SmartPhoneSearch;