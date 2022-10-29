import React from 'react';
import {Grid, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";
import {useSetRecoilState} from "recoil";
import SearchState from "../../state/NavBar/SearchState";

const searchSmartPhone: object = {
    width: { xs: 130, sm: 200 },
    display: { xs: 'flex', md: 'none' },
    outline: 'none',
    border: 'none',
    pl: 1
}

const SmartSearchInput = () => {

    const setSearch: any = useSetRecoilState(SearchState)

    const CloseSearch = () => {
        setSearch({
            icon: 'flex',
            search: 'none'
        })
    }

    return (
        <Grid container>

            <Typography variant='body1'
                        component='input'
                        type="text"
                        placeholder="Search..."
                        sx={ searchSmartPhone }/>

            <IconButton size="large"
                        aria-label="show 4 new mails"
                        color="inherit"
                        onClick={ CloseSearch }
                        sx={{ display: { xs: 'flex', md: 'none' } }}>
                <MoreIcon />
            </IconButton>

        </Grid>
    );
};

export default SmartSearchInput;