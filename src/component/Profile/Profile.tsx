import React from 'react';
import {Box} from "@mui/material";
import DrawerLeft from "../DrawerLeft/DrawerLeft";
import useStyles from "../../styles/Style";
import ProfilePictures from "./ProfilePictures";
import UsernameProfiles from "./UsernameProfiles";
import EmailProfiles from "./EmailProfiles";
import TableOfProfile from "./TableOfProfile";

const Profile = () => {
    const classes: any = useStyles()

    return (
        <Box sx={{ display: 'flex' }}>
            <DrawerLeft />

            <Box component="main" className={ classes.ContainerProfile }>
                <ProfilePictures />
                <UsernameProfiles />
                <EmailProfiles />
                <TableOfProfile />
            </Box>
        </Box>
    );
};

export default Profile;