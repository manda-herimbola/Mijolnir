import React from 'react';
import {IconButton, Typography, Grid, Avatar} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../../assets/logo.png";
import useStyles from "../../../styles/Style";

const NavBarLeft = () => {

    const classes: any = useStyles()

    return (
        <Toolbar sx={{ justifyContent: "space-between" }}>

            <Grid className={ classes.Logo }>
                <Avatar
                alt="Ted talk"
                src={logo} />
                <Typography variant="h6" component="h3">mijolnir</Typography>
            </Grid>

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu" >
                <MenuIcon/>
            </IconButton>

        </Toolbar>
    );
};

export default NavBarLeft;