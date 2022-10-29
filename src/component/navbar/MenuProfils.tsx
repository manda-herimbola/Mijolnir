import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NotesTwoToneIcon from '@mui/icons-material/NotesTwoTone';
import {IconButton} from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate: any = useNavigate()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const Profile = () => {
        setAnchorEl(null);
        navigate("/profile")
    }

    const LogOut = () => {
        alert('Are you sure to log out')
        localStorage.clear()
        setAnchorEl(null);
        document.location.reload()
    };

    return (
        <div>
            <IconButton size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleClick}>

                <NotesTwoToneIcon aria-controls={open ? 'basic-menu' : undefined}
                                  aria-haspopup="true"
                                  aria-expanded={open ? 'true' : undefined}/>
            </IconButton>

            <Menu id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{'aria-labelledby': 'basic-button'}}>

                <MenuItem onClick={Profile}>Profile</MenuItem>
                <MenuItem onClick={LogOut}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
