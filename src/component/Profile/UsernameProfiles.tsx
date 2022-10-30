import React from 'react';
import {Typography} from "@mui/material";
import {usersType} from "../Home/Home";
import {useRecoilValue} from "recoil";
import ProfileName from "../../state/Name/ProfileName";

const UsernameProfiles = () => {

    const users: usersType = useRecoilValue(ProfileName)

    return (
        <Typography variant='h4' component='h2' sx={{ mb:1, mt:2 }}>
            { users.username }
        </Typography>
    );
};

export default UsernameProfiles;