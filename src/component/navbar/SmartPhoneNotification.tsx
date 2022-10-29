import React from 'react';
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import {useRecoilValue} from "recoil";
import SearchState from "../../state/NavBar/SearchState";

const SmartPhoneNotification = () => {

    const {icon} = useRecoilValue(SearchState)

    return (
        <IconButton size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                    sx={{ display: icon }}>

            <Badge badgeContent={17} color="error">
                <NotificationsIcon />
            </Badge>
        </IconButton>
    );
};

export default SmartPhoneNotification;