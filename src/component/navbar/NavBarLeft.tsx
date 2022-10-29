import React from 'react';
import {Typography, Grid, Avatar} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/logo.png";
import useStyles from "../../styles/Style";
import MenuProfils from './MenuProfils';

const NavBarLeft = () => {

    const classes: any = useStyles()

    return (
        <Toolbar sx={{ justifyContent: "space-between" }}>
            <Grid className={ classes.Logo }>
                <Avatar alt="Ted talk" src={logo} />
                <Typography variant="h6" component="h3">mijolnir</Typography>
            </Grid>

            <MenuProfils />
        </Toolbar>
    );
};

export default NavBarLeft;