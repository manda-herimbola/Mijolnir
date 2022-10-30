import React from 'react';
import {Typography} from "@mui/material";
import {usersType} from "../Home/Home";
import {useRecoilValue} from "recoil";
import ProfileName from "../../state/Name/ProfileName";

const EmailProfiles = () => {

    const users: usersType = useRecoilValue(ProfileName)

    return (
        <Typography variant='body2' component='p'>
            { users.email }
        </Typography>
    );
};

export default EmailProfiles;