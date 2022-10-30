import React from 'react';
import {Box, CardMedia} from "@mui/material";
import sary from "../../assets/manda.jpg";
import useStyles from "../../styles/Style";

const ProfilePictures = () => {

    const classes: any = useStyles()

    return (
        <Box className={ classes.ProfilePictures }>
            <CardMedia component="img"
                       height="200"
                       image={sary}
                       alt="profile-picture"/>
        </Box>
    );
};

export default ProfilePictures;