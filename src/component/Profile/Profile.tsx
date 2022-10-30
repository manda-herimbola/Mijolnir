import React from 'react';
import {Box} from "@mui/material";
import DrawerLeft from "../DrawerLeft/DrawerLeft";
import useStyles from "../../styles/Style";
import ProfilePictures from "./ProfilePictures";
import UsernameProfiles from "./UsernameProfiles";

const Profile = () => {

    const classes: any = useStyles()

    return (
        <Box sx={{ display: 'flex' }}>

            <DrawerLeft />

            <Box component="main" className={ classes.ContainerProfile }>

                <ProfilePictures />
                <UsernameProfiles />

            </Box>

        </Box>
    );
};

export default Profile;