import React from 'react';
import NotesTwoToneIcon from "@mui/icons-material/NotesTwoTone";
import IconButton from "@mui/material/IconButton";

const SmartPhoneMenu = () => {

    return (
        <IconButton size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: 'flex',sm:'none' , md: 'none' } }}>

            <NotesTwoToneIcon aria-controls='basic-menu'
                              aria-haspopup="true"
                              aria-expanded='true'/>
        </IconButton>
    );
};

export default SmartPhoneMenu;