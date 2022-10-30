import React from 'react';
import {Typography} from "@mui/material";
import {usersType} from "../Home/Home";
import {useRecoilValue} from "recoil";
import ProfileName from "../../state/Name/ProfileName";

const UsernameProfiles = () => {

    const name: usersType = useRecoilValue(ProfileName)

    return (
        <Typography variant='h5' component='h2'>
            { name.username }
        </Typography>
    );
};

export default UsernameProfiles;