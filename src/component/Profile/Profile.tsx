import React from 'react';
import {Box, Card, CardMedia} from "@mui/material";
import DrawerLeft from "../DrawerLeft/DrawerLeft";
import useStyles from "../../styles/Style";
import sary from "../../assets/manda.jpg";

const Profile = () => {

    const classes: any = useStyles()

    return (
        <Box sx={{ display: 'flex' }}>

            <DrawerLeft />

            <Box component="main" className={ classes.ContainerBoard }>
                <Card sx={{
                    borderRadius: 100,
                    width: 200,
                    height: 200, margin: '10px 0'
                }}>
                    <CardMedia component="img"
                               height="200"
                               image={sary}
                               alt="profile-picture"/>
                </Card>
            </Box>

        </Box>
    );
};

export default Profile;