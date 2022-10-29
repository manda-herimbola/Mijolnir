import React from 'react';
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import {useRecoilValue} from "recoil";
import SearchState from "../../state/NavBar/SearchState";

const SmartPhoneMessage = () => {

    const {icon} = useRecoilValue(SearchState)

    return (
        <IconButton size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                    sx={{ display: icon }} >
            <Badge badgeContent={4} color="error">
                <MailIcon />
            </Badge>
        </IconButton>
    );
};

export default SmartPhoneMessage;