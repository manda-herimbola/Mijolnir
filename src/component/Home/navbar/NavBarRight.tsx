import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Avatar, Grid, TextField} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import useStyles from "../../../styles/Style";

const drawerWidth = 240;
const AppBarRight: object = {
    width: `calc(100% - ${drawerWidth}px)`,
    ml: `${drawerWidth}px`,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: "#000"
}

const NavBarRight = ({ users }: any) => {

    const classes: any = useStyles()

    return (
        <AppBar
            position="fixed"
            sx={ AppBarRight }>

            <Toolbar className={ classes.ToolBarRight }>
                <Typography variant="h6" noWrap component="div">
                    { users.username }
                </Typography>

                <Grid className={ classes.Search }>
                    <TextField
                        id="search"
                        name="search"
                        label="Search"
                        type="text"/>

                    <Avatar alt="Photo-profile"/>
                </Grid>
            </Toolbar>

        </AppBar>
    );
};

export default NavBarRight;