import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import PathButton from "./PathButton";

const ReportingList = () => {

    const textList: Array<string> = ['Portfolio', 'Goals']
    const iconList: any = [
        <StorageOutlinedIcon />,
        <MyLocationOutlinedIcon />
    ]

    return (
        <List>
            {
                textList.map((text, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton onClick={ PathButton(textList, index) }>
                        <ListItemIcon>
                            { iconList[index] }
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

export default ReportingList;