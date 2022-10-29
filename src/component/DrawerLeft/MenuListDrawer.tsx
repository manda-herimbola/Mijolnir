import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import PathButton from "./PathButton";

const MenuListDrawer = () => {

    const textList: Array<string> = ['Home', 'My tasks', 'Inbox']
    const iconList: Array<any> = [
        <CottageOutlinedIcon />,
        <CheckCircleOutlineTwoToneIcon />,
        <NotificationsOutlinedIcon />
    ]

    return (
        <List>
            {
                textList.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={ PathButton( textList, index ) }>
                            <ListItemIcon>
                                { iconList[index] }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
    );
};

export default MenuListDrawer;