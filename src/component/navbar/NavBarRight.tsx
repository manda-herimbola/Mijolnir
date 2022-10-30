import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import sary from "../../assets/manda.jpg";
import {Avatar} from "@mui/material";
import {useRecoilValue} from "recoil";
import ProfileName from "../../state/Name/ProfileName";
import {usersType} from "../Home/Home";
import SmartPhoneMenu from "./SmartPhoneMenu";
import SmartPhoneSearch from './SmartPhoneSearch';
import SmartPhoneMessage from './SmartPhoneMessage';
import SmartPhoneNotification from "./SmartPhoneNotification";
import SearchMedium from './SearchMedium';

const drawerWidth: number = 240;
const appWidth: any = `calc(100% - ${drawerWidth}px)`

const AppBarRight: object = {
    width: { xs: '100%', sm: appWidth, md: appWidth },
    ml: `${drawerWidth}px`,
    backgroundColor: '#FFF',
    boxShadow: 'none',
    color: "#000",
    flexGrow: 1
}
const SmartPhoneStyle = {
    display: { xs: 'flex', md: 'flex' },
    width: {xs: '100%', md: 'auto'},
    justifyContent: 'space-between'
}
const responsive: object = { xs: 'none', md: 'flex' }

const PrimarySearchAppBar = () => {

    const users: usersType = useRecoilValue(ProfileName)

    return (
        <Box>
            <AppBar sx={ AppBarRight }>
                <Toolbar>
                    <Typography variant="h6"
                                component="h2"
                                noWrap
                                sx={{ display: responsive }}>{users.username}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: responsive }} />
                    <SearchMedium />

                    <Box sx={ SmartPhoneStyle }>
                        <SmartPhoneMenu />
                        <SmartPhoneSearch />
                        <SmartPhoneMessage />
                        <SmartPhoneNotification />

                        <Avatar alt="Ted talk" src={sary} sx={{ ml: 2 }}/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default PrimarySearchAppBar;